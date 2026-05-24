import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentRoot = path.join(root, "src", "content");
const projectsDir = path.join(contentRoot, "projects");

const fail = (message) => {
  throw new Error(message);
};

const readText = (filePath) => fs.readFileSync(filePath, "utf8");

const listFiles = (dir, predicate) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listFiles(entryPath, predicate);
    return predicate(entryPath) ? [entryPath] : [];
  });

const markdownFiles = listFiles(projectsDir, (filePath) => filePath.endsWith(".md"));

const frontmatterOf = (source, filePath) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) fail(`Missing frontmatter: ${path.relative(root, filePath)}`);
  return match[1];
};

const lineValue = (frontmatter, key) => {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  return match?.[1]?.trim();
};

const allowedThemes = new Set(["data-graph", "aidlc-mlops", "nlp-llm"]);
const allowedEvidenceLevels = new Set(["Published", "Implemented", "Prototype", "Study", "In Progress"]);
const allowedDisclosureLevels = new Set(["Public", "Public Summary Only", "Sanitized", "Private / Mention Only"]);

for (const filePath of markdownFiles) {
  const source = readText(filePath);
  const frontmatter = frontmatterOf(source, filePath);
  const relative = path.relative(root, filePath);

  if (!frontmatter.includes("\nevidence:\n")) {
    fail(`Missing evidence metadata: ${relative}`);
  }

  const primaryTheme = lineValue(frontmatter, "  primaryTheme");
  const evidenceLevel = lineValue(frontmatter, "  evidenceLevel");
  const disclosureLevel = lineValue(frontmatter, "  disclosureLevel");
  const businessSignal = lineValue(frontmatter, "  businessSignal");
  const proofSentence = lineValue(frontmatter, "  proofSentence");

  if (!allowedThemes.has(primaryTheme)) {
    fail(`Invalid or missing primaryTheme in ${relative}: ${primaryTheme ?? "(missing)"}`);
  }

  if (!allowedEvidenceLevels.has(evidenceLevel)) {
    fail(`Invalid or missing evidenceLevel in ${relative}: ${evidenceLevel ?? "(missing)"}`);
  }

  if (!allowedDisclosureLevels.has(disclosureLevel)) {
    fail(`Invalid or missing disclosureLevel in ${relative}: ${disclosureLevel ?? "(missing)"}`);
  }

  if (!businessSignal || businessSignal.length < 20) {
    fail(`Missing or too-short businessSignal in ${relative}`);
  }

  if (!proofSentence || proofSentence.length < 20) {
    fail(`Missing or too-short proofSentence in ${relative}`);
  }

  if (!/^  priority:\s*$/m.test(frontmatter)) {
    fail(`Missing evidence.priority in ${relative}`);
  }

  if (!frontmatter.includes("  reviewerIntents:")) {
    fail(`Missing evidence.reviewerIntents in ${relative}`);
  }

  if (!frontmatter.includes("  roleSignals:")) {
    fail(`Missing evidence.roleSignals in ${relative}`);
  }

  for (const role of allowedThemes) {
    const roleBlock = frontmatter.match(new RegExp(`^    ${role}:\\s*\\r?\\n([\\s\\S]*?)(?=^    (?:data-graph|aidlc-mlops|nlp-llm):|^  subtypes:|^portfolio:|^resume:|^---)`, "m"))?.[1] ?? "";
    if (!roleBlock.includes("weight:")) fail(`Missing roleSignals.${role}.weight in ${relative}`);
    if (!roleBlock.includes("rank:")) fail(`Missing roleSignals.${role}.rank in ${relative}`);
    if (!roleBlock.includes("signal:")) fail(`Missing roleSignals.${role}.signal in ${relative}`);
    if (!roleBlock.includes("reviewerReason:")) fail(`Missing roleSignals.${role}.reviewerReason in ${relative}`);
  }

  for (const requiredList of ["secondaryThemes", "dataSurfaces", "workflowStages", "subtypes"]) {
    if (!frontmatter.includes(`  ${requiredList}:\n`)) {
      fail(`Missing ${requiredList} list in ${relative}`);
    }
  }
}

const researchDir = path.join(contentRoot, "research");
const researchFiles = listFiles(researchDir, (filePath) => filePath.endsWith(".md"));
const allowedContributionTypes = new Set(["modeling", "evaluation", "alignment", "domain-nlp", "system-support", "literature-review"]);
const projectNames = markdownFiles.map((filePath) => path.basename(filePath));
const koSlugs = new Set(projectNames.filter((name) => name.endsWith(".ko.md")).map((name) => name.replace(/\.ko\.md$/, "")));
const enSlugs = new Set(projectNames.filter((name) => name.endsWith(".en.md")).map((name) => name.replace(/\.en\.md$/, "")));
const projectSlugs = new Set([...koSlugs, ...enSlugs]);

for (const filePath of researchFiles) {
  const source = readText(filePath);
  const frontmatter = frontmatterOf(source, filePath);
  const relative = path.relative(root, filePath);
  const contributionType = lineValue(frontmatter, "contributionType")?.replace(/^['"]|['"]$/g, "");
  const portfolioRelevance = lineValue(frontmatter, "portfolioRelevance");

  if (!allowedContributionTypes.has(contributionType)) {
    fail(`Invalid or missing contributionType in ${relative}: ${contributionType ?? "(missing)"}`);
  }

  if (!portfolioRelevance || portfolioRelevance.length < 30) {
    fail(`Missing or too-short portfolioRelevance in ${relative}`);
  }

  if (!frontmatter.includes("linkedRoles:\n")) {
    fail(`Missing linkedRoles in ${relative}`);
  }

  const linkedProjectBlock = frontmatter.match(/linkedProjects:\s*\r?\n((?:\s+-\s+.+\r?\n?)*)/);
  const linkedProjects = linkedProjectBlock?.[1]
    ?.split(/\r?\n/)
    .map((line) => line.match(/-\s+["']?([^"'\r\n]+)["']?/)?.[1]?.trim())
    .filter(Boolean) ?? [];
  for (const slug of linkedProjects) {
    if (!projectSlugs.has(slug)) fail(`Unknown linked project "${slug}" in ${relative}`);
  }
}

for (const fileName of ["experience.ko.yaml", "experience.en.yaml", "education.ko.yaml", "education.en.yaml"]) {
  const source = readText(path.join(contentRoot, "globals", fileName));
  const relative = path.join("src", "content", "globals", fileName);
  const entries = source.split(/\r?\n(?=  - )/).filter((entry) => entry.startsWith("  - "));
  for (const entry of entries) {
    if (!entry.includes("startDate:")) fail(`Missing startDate in ${relative}`);
    if (!entry.includes("endDate:") && !entry.includes("isCurrent: true")) fail(`Missing endDate or isCurrent in ${relative}`);
    if (!entry.includes("isCurrent:")) fail(`Missing isCurrent in ${relative}`);
  }
}

const pageFiles = listFiles(path.join(contentRoot, "pages"), (filePath) => filePath.endsWith(".yaml"));
for (const filePath of pageFiles) {
  const source = readText(filePath);
  const relative = path.relative(root, filePath);
  if (!/^contract:\s*$/m.test(source)) fail(`Missing page contract in ${relative}`);
  for (const key of ["userQuestion", "pageAnswer", "requiredEvidence", "nextPaths", "doNotRepeat"]) {
    if (!source.includes(`  ${key}:`)) fail(`Missing contract.${key} in ${relative}`);
  }
}

for (const slug of koSlugs) {
  if (!enSlugs.has(slug)) fail(`Missing English project pair for ${slug}`);
}

for (const slug of enSlugs) {
  if (!koSlugs.has(slug)) fail(`Missing Korean project pair for ${slug}`);
}

const publicContentFiles = listFiles(path.join(root, "src"), (filePath) =>
  [".astro", ".ts", ".yaml", ".md"].some((extension) => filePath.endsWith(extension))
);

const riskyPhrases = ["Graph-focused Data Specialist", "Domain NLP Researcher"];
for (const filePath of publicContentFiles) {
  const source = readText(filePath);
  for (const phrase of riskyPhrases) {
    if (source.includes(phrase)) {
      fail(`Risky positioning phrase "${phrase}" found in ${path.relative(root, filePath)}`);
    }
  }
}

const portfolioKo = readText(path.join(contentRoot, "pages", "portfolio.ko.yaml"));
const portfolioEn = readText(path.join(contentRoot, "pages", "portfolio.en.yaml"));

if (!portfolioKo.includes("Development Flow")) {
  fail("Korean portfolio page must define the development-flow section.");
}

if (!portfolioEn.includes("Development Flow")) {
  fail("English portfolio page must define the development-flow section.");
}

const firstFeaturedSlug = (source) => {
  const match = source.match(/featuredCaseSlugs:\s*\r?\n\s*-\s*([^\r\n]+)/);
  return match?.[1]?.trim();
};

if (firstFeaturedSlug(portfolioKo) === "emr-nursing-surveillance") {
  fail("Korean portfolio must not promote the medical/EMR case as the first featured case.");
}

if (firstFeaturedSlug(portfolioEn) === "emr-nursing-surveillance") {
  fail("English portfolio must not promote the medical/EMR case as the first featured case.");
}

console.log("Content validation passed.");

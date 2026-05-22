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

  for (const requiredList of ["secondaryThemes", "dataSurfaces", "workflowStages", "subtypes"]) {
    if (!frontmatter.includes(`  ${requiredList}:\n`)) {
      fail(`Missing ${requiredList} list in ${relative}`);
    }
  }
}

const projectNames = markdownFiles.map((filePath) => path.basename(filePath));
const koSlugs = new Set(projectNames.filter((name) => name.endsWith(".ko.md")).map((name) => name.replace(/\.ko\.md$/, "")));
const enSlugs = new Set(projectNames.filter((name) => name.endsWith(".en.md")).map((name) => name.replace(/\.en\.md$/, "")));

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

if (!portfolioKo.includes("AI-Driven Development Life Cycle")) {
  fail("Korean portfolio page must define AI-DLC on first-page content.");
}

if (!portfolioEn.includes("AI-Driven Development Life Cycle")) {
  fail("English portfolio page must define AI-DLC on first-page content.");
}

console.log("Content validation passed.");

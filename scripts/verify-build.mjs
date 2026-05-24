import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

const read = (relativePath) => fs.readFileSync(path.join(dist, relativePath), "utf8");
const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

assert(fs.existsSync(dist), "dist directory is missing. Run the build before verification.");

const indexHtml = read("index.html");
const enIndexHtml = read(path.join("en", "index.html"));
const projectListHtml = read(path.join("projects", "index.html"));
const researchListHtml = read(path.join("research", "index.html"));
const contactHtml = read(path.join("contact", "index.html"));
const portfolioHtml = read(path.join("portfolio", "index.html"));
const portfolioPrintHtml = read(path.join("portfolio", "print", "index.html"));
const notFoundHtml = read("404.html");
const robotsTxt = read("robots.txt");

assert(indexHtml.includes('rel="canonical"'), "Home page is missing a canonical link.");
assert(indexHtml.includes('property="og:title"'), "Home page is missing Open Graph title metadata.");
assert(indexHtml.includes('name="twitter:card"'), "Home page is missing Twitter card metadata.");

assert(projectListHtml.includes("프로젝트"), "Projects list page is missing expected Korean copy.");
assert(researchListHtml.includes("연구"), "Research list page is missing expected Korean copy.");
assert(contactHtml.includes("검토 목적") || contactHtml.includes("빠른 선별"), "Contact page is missing reviewer-oriented intent copy.");
assert(portfolioHtml.includes("Data &amp; Applied AI Engineer") || portfolioHtml.includes("Data & Applied AI Engineer"), "Portfolio page is missing the top-level identity.");
assert(portfolioHtml.includes("Development Flow"), "Portfolio page is missing the development-flow section.");
assert(portfolioHtml.includes("Review Mode") || portfolioHtml.includes("검토 모드"), "Portfolio page is missing reviewer-mode routing.");
assert(portfolioHtml.includes("Project Comparison") || portfolioHtml.includes("대표 프로젝트"), "Portfolio page is missing representative project comparison.");
assert(portfolioHtml.includes("관점 선택") || portfolioHtml.includes("Focus Areas"), "Portfolio page is missing the focus-area structure.");
assert(portfolioHtml.includes("data-status-selected"), "Portfolio role lens workbench is missing selected-lens guidance state.");
assert(portfolioHtml.includes("프로젝트 기록") || portfolioHtml.includes("Project records"), "Portfolio page is missing the project-record structure.");
assert(projectListHtml.includes("Project Overview"), "Projects page is missing the project overview.");
assert(projectListHtml.includes("data-project-empty"), "Projects page is missing an empty state for filter combinations.");
assert(researchListHtml.includes("Research-to-System Map"), "Research page is missing the research-to-system overview.");
assert(portfolioPrintHtml.includes("역할 요약"), "Print portfolio is missing the role summary section.");
assert(portfolioPrintHtml.includes("검토 포인트"), "Print portfolio is missing review point metadata.");
assert(portfolioPrintHtml.includes('data-density="print-a4"'), "Print portfolio is missing print density mode.");
assert(!portfolioHtml.includes("Graph-focused Data Specialist"), "Portfolio page contains risky graph-only positioning.");

const bannedPublicPhrases = [
  "Evidence Level",
  "Disclosure Level",
  "Public Summary Only",
  "Private / Mention Only",
  "Evidence Library",
  "프로젝트는 단순 목록",
  "증거 메타데이터",
  "PUBLIC SUMMARY ONLY"
];
for (const phrase of bannedPublicPhrases) {
  assert(!indexHtml.includes(phrase), `Home page leaks internal phrase: ${phrase}`);
  assert(!projectListHtml.includes(phrase), `Projects page leaks internal phrase: ${phrase}`);
  assert(!portfolioHtml.includes(phrase), `Portfolio page leaks internal phrase: ${phrase}`);
  assert(!portfolioPrintHtml.includes(phrase), `Print portfolio leaks internal phrase: ${phrase}`);
}

const lynxesIndex = portfolioHtml.indexOf("Lynxes");
const emrIndex = portfolioHtml.indexOf("EMR");
if (lynxesIndex >= 0 && emrIndex >= 0) {
  assert(lynxesIndex < emrIndex, "Portfolio promotes the medical/EMR case before the graph/data case.");
}

const homeLynxesIndex = enIndexHtml.indexOf("Lynxes");
const homeEmrIndex = enIndexHtml.indexOf("EMR");
if (homeLynxesIndex >= 0 && homeEmrIndex >= 0) {
  assert(homeLynxesIndex < homeEmrIndex, "English home page promotes the medical/EMR case before the graph/data case.");
}

assert(notFoundHtml.includes('content="noindex, nofollow"'), "404 page is missing the noindex directive.");
assert(robotsTxt.includes("Sitemap:"), "robots.txt is missing the sitemap declaration.");
assert(fs.existsSync(path.join(dist, "sitemap-index.xml")), "sitemap-index.xml was not generated.");

console.log("Build verification passed.");

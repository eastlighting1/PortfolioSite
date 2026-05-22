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
assert(contactHtml.includes("채용 및 역할 제안"), "Contact page is missing the new intent section.");
assert(portfolioHtml.includes("AI Systems Engineer"), "Portfolio page is missing the top-level identity.");
assert(portfolioHtml.includes("AI-Driven Development Life Cycle"), "Portfolio page is missing the AI-DLC definition.");
assert(portfolioHtml.includes("Evidence Level") || portfolioHtml.includes("Evidence"), "Portfolio page is missing evidence-oriented content.");
assert(portfolioPrintHtml.includes("역할 요약"), "Print portfolio is missing the role summary section.");
assert(portfolioPrintHtml.includes("증거 메타데이터"), "Print portfolio is missing evidence metadata.");
assert(!portfolioHtml.includes("Graph-focused Data Specialist"), "Portfolio page contains risky graph-only positioning.");

assert(notFoundHtml.includes('content="noindex, nofollow"'), "404 page is missing the noindex directive.");
assert(robotsTxt.includes("Sitemap:"), "robots.txt is missing the sitemap declaration.");
assert(fs.existsSync(path.join(dist, "sitemap-index.xml")), "sitemap-index.xml was not generated.");

console.log("Build verification passed.");

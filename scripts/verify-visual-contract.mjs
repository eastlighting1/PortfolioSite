import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const read = (relativePath) => fs.readFileSync(path.join(dist, relativePath), "utf8");
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

assert(fs.existsSync(dist), "dist directory is missing. Run build before visual contract checks.");

const home = read("index.html");
const portfolio = read(path.join("portfolio", "index.html"));
const projects = read(path.join("projects", "index.html"));
const research = read(path.join("research", "index.html"));
const resume = read(path.join("resume", "index.html"));
const portfolioPrint = read(path.join("portfolio", "print", "index.html"));

assert(home.includes("review-router"), "Home visual contract missing review router.");
assert(home.includes("diagnostic-evidence"), "Home visual contract missing diagnostic evidence cards.");
assert(portfolio.includes("reviewer-mode"), "Portfolio visual contract missing reviewer mode.");
assert(portfolio.includes("portfolio-evidence-compare"), "Portfolio visual contract missing evidence comparison.");
assert(portfolio.includes("aidlc-stage-map"), "Portfolio visual contract missing AI-DLC stage map.");
assert(portfolio.includes("role=\"status\"") && portfolio.includes("aria-live=\"polite\""), "Portfolio visual contract missing live lens guidance.");
assert(projects.includes("project-evidence-overview"), "Projects visual contract missing evidence overview.");
assert(projects.includes("data-project-disclosure"), "Projects visual contract missing disclosure filters.");
assert(projects.includes("data-project-workflow"), "Projects visual contract missing workflow filters.");
assert(projects.includes("data-project-empty"), "Projects visual contract missing empty filter state.");
assert(projects.includes("aria-pressed"), "Projects visual contract missing pressed-state controls.");
assert(research.includes("research-contribution-clusters"), "Research visual contract missing contribution clusters.");
assert(research.includes("research-bridge-overview"), "Research visual contract missing bridge overview.");
assert(resume.includes("Methods:") || resume.includes("Methods"), "Resume visual contract missing structured research interests.");
assert(portfolioPrint.includes("portfolio-print-matrix"), "Print visual contract missing evidence matrix.");
assert(portfolioPrint.includes('data-density="print-a4"'), "Print visual contract missing print density mode.");
assert(portfolioPrint.includes("Public") || portfolioPrint.includes("공개") || portfolioPrint.includes("요약 공개"), "Print visual contract missing disclosure language.");

const printSheets = (portfolioPrint.match(/paper-sheet--portfolio-print-page/g) ?? []).length;
assert(printSheets >= 3, `Print portfolio should render multiple sheets, found ${printSheets}.`);

console.log("Visual contract verification passed.");

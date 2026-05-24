import { entrySlug } from "../../lib/content";
import { type Locale, localizePath } from "../../lib/i18n";
import { withBase } from "../../lib/site";
import { normalizeEvidenceMetadata } from "../portfolio/portfolio-data";

export const normalizeProjectEvidence = (project: any, locale: Locale) => {
  const slug = project.slug ?? entrySlug(project);
  const evidence = normalizeEvidenceMetadata({ project: { ...project, slug }, locale });
  return {
    id: slug,
    kind: "project" as const,
    slug,
    title: project.data.title,
    year: project.data.year,
    href: withBase(localizePath(`projects/${slug}/`, locale)),
    summary: project.data.summary,
    claim: project.data.evidence?.proofSentence ?? evidence.businessSignal,
    evidence
  };
};

export const normalizeResearchEvidence = (entry: any, locale: Locale) => {
  const slug = entrySlug(entry);
  return {
    id: slug,
    kind: "research" as const,
    slug,
    title: entry.data.title,
    year: entry.data.year,
    href: withBase(localizePath(`research/${slug}/`, locale)),
    summary: entry.data.abstract,
    claim: entry.data.portfolioRelevance ?? entry.data.contributionClaim ?? entry.data.abstract,
    contributionType: entry.data.contributionType ?? "system-support",
    linkedProjects: entry.data.linkedProjects ?? [],
    linkedRoles: entry.data.linkedRoles ?? ["nlp-llm"]
  };
};


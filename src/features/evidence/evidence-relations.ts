import { entrySlug } from "../../lib/content";

export const getProjectsForResearch = (researchEntry: any, projects: any[]) => {
  const linked = new Set(researchEntry.data.linkedProjects ?? []);
  return projects.filter((project) => linked.has(project.slug ?? entrySlug(project)));
};

export const getResearchForProject = (project: any, research: any[]) => {
  const slug = project.slug ?? entrySlug(project);
  return research.filter((entry) => (entry.data.linkedProjects ?? []).includes(slug));
};

export const getEvidenceRelations = (projects: any[], research: any[]) =>
  projects.map((project) => ({
    project,
    research: getResearchForProject(project, research)
  }));


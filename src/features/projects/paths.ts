import { entrySlug, getLocalizedCollection } from "../../lib/content";
import { type Locale } from "../../lib/i18n";

export async function getProjectStaticPaths(locale: Locale) {
  const projects = await getLocalizedCollection("projects", locale);
  return projects.map((project) => ({
    params: { slug: entrySlug(project) },
    props: { project }
  }));
}

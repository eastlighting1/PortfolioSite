import { entrySlug, getLocalizedCollection } from "../../lib/content";
import { type Locale } from "../../lib/i18n";

export async function getResearchStaticPaths(locale: Locale) {
  const research = await getLocalizedCollection("research", locale);
  return research.map((item) => ({
    params: { slug: entrySlug(item) },
    props: { item }
  }));
}

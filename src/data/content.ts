import { getCollection } from "astro:content";
import { defaultLocale, stripLocaleSuffix, type Locale } from "./i18n";

export const entrySlug = (entry: { id: string }) => stripLocaleSuffix(entry.id.replace(/\.[^/.]+$/, ""));

const isLocalizedEntry = (entryId: string, id: string, locale: Locale) =>
  entryId.startsWith(`${id}.${locale}.`);

async function getSingletonEntry(collection: "pages" | "globals" | "ui", id: string, locale: Locale = defaultLocale) {
  const entries = await getCollection(collection);
  const entry = entries.find((item) => isLocalizedEntry(item.id, id, locale));
  if (!entry) {
    throw new Error(`Missing ${collection} entry: ${id} (${locale})`);
  }
  return entry;
}

const isLocalizedContentEntry = (entryId: string, locale: Locale) => entryId.includes(`.${locale}.`);

export const getPageEntry = async (id: string, locale: Locale = defaultLocale) =>
  getSingletonEntry("pages", id, locale);
export const getGlobalEntry = async (id: string, locale: Locale = defaultLocale) =>
  getSingletonEntry("globals", id, locale);
export const getUiEntry = async (id: string, locale: Locale = defaultLocale) =>
  getSingletonEntry("ui", id, locale);

export const getLocalizedCollection = async (collection: "projects" | "research", locale: Locale = defaultLocale) =>
  (await getCollection(collection)).filter((entry) => isLocalizedContentEntry(entry.id, locale));

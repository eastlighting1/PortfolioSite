import { getCollection } from "astro:content";

export const entrySlug = (entry: { id: string }) => entry.id.replace(/\.[^/.]+$/, "");

async function getSingletonEntry(collection: "pages" | "globals" | "ui", id: string) {
  const entries = await getCollection(collection);
  const entry = entries.find((item) => item.id === id);
  if (!entry) {
    throw new Error(`Missing ${collection} entry: ${id}`);
  }
  return entry;
}

export const getPageEntry = async (id: string) => getSingletonEntry("pages", id);
export const getGlobalEntry = async (id: string) => getSingletonEntry("globals", id);
export const getUiEntry = async (id: string) => getSingletonEntry("ui", id);

export const entrySlug = (entry: { id: string }) => entry.id.replace(/\.[^/.]+$/, "");

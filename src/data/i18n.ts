export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const normalizePath = (value: string) => {
  if (!value || value === "/") return "/";
  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
};

export const stripLocaleFromPath = (value: string) => {
  const normalized = normalizePath(value);
  if (normalized === "/") return normalized;

  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    const prefix = `/${locale}/`;
    if (normalized === prefix) return "/";
    if (normalized.startsWith(prefix)) {
      return normalizePath(normalized.slice(locale.length + 2));
    }
  }

  return normalized;
};

export const localizePath = (value: string, locale: Locale = defaultLocale) => {
  const normalized = normalizePath(value);
  if (locale === defaultLocale) return normalized;
  if (normalized === "/") return `/${locale}/`;
  return `/${locale}${normalized}`;
};

export const switchLocalePath = (value: string, locale: Locale) =>
  localizePath(stripLocaleFromPath(value), locale);

export const stripLocaleSuffix = (value: string) => value.replace(/\.(ko|en)$/, "");

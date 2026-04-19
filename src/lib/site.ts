export const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const normalizeSitePath = (path: string) => {
  if (!path || path === "/") return "/";
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash;
};

export const toAbsoluteUrl = (siteUrl: string, path: string) => {
  const normalizedSiteUrl = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
  return new URL(withBase(normalizeSitePath(path)), normalizedSiteUrl).toString();
};

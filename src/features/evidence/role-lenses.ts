import { type Locale } from "../../lib/i18n";
import { getRoleThemes } from "../portfolio/portfolio-data";

export type RoleLensId = "data-graph" | "aidlc-mlops" | "nlp-llm";

export const getRoleLenses = (locale: Locale) => getRoleThemes(locale);

export const getRoleLensById = (roleId: RoleLensId, locale: Locale) =>
  getRoleLenses(locale).find((role) => role.id === roleId) ?? getRoleLenses(locale)[0];


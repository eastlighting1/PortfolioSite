import { type Locale } from "../../lib/i18n";
import { getPublicDisclosureLabel, getPublicEvidenceLevelLabel } from "../portfolio/portfolio-data";

export { getPublicDisclosureLabel, getPublicEvidenceLevelLabel };

export const getContributionTypeLabel = (type: string | undefined, locale: Locale) => {
  const value = type ?? "system-support";
  const labels = {
    ko: {
      modeling: "모델링",
      evaluation: "평가",
      alignment: "Alignment",
      "domain-nlp": "도메인 NLP",
      "system-support": "시스템 판단",
      "literature-review": "문헌 검토"
    },
    en: {
      modeling: "Modeling",
      evaluation: "Evaluation",
      alignment: "Alignment",
      "domain-nlp": "Domain NLP",
      "system-support": "System Support",
      "literature-review": "Literature Review"
    }
  } as const;

  return labels[locale][value as keyof (typeof labels)[typeof locale]] ?? value;
};


import { entrySlug } from "../../lib/content";
import { type Locale } from "../../lib/i18n";
import { normalizeEvidenceMetadata, type PortfolioCase } from "../portfolio/portfolio-data";

export type EvidenceSurface = "home" | "portfolio-web" | "portfolio-print" | "projects" | "research" | "resume-web" | "cv-print";
export type EvidenceThemeId = "data-graph" | "aidlc-mlops" | "nlp-llm";
export type EvidenceWeight = "primary" | "supporting" | "related" | "not-relevant";

const knownProjectPriority: Record<string, Partial<Record<EvidenceSurface, number>> & { global: number; role?: Partial<Record<EvidenceThemeId, number>> }> = {
  "emr-nursing-surveillance": {
    global: 10,
    home: 40,
    projects: 30,
    "resume-web": 20,
    role: { "nlp-llm": 15, "data-graph": 35 }
  },
  "contexta-portfolio": {
    global: 20,
    home: 20,
    "portfolio-web": 10,
    "portfolio-print": 10,
    projects: 20,
    "resume-web": 20,
    role: { "aidlc-mlops": 10, "data-graph": 35 }
  },
  "lynxes-portfolio": {
    global: 30,
    home: 10,
    "portfolio-web": 20,
    "portfolio-print": 20,
    projects: 10,
    "resume-web": 30,
    role: { "data-graph": 10, "aidlc-mlops": 45 }
  },
  "blogeek-ai-blog": {
    global: 40,
    home: 30,
    "portfolio-web": 30,
    "portfolio-print": 30,
    projects: 40,
    "resume-web": 40,
    role: { "nlp-llm": 20, "aidlc-mlops": 45 }
  },
  "frimo-conversational-diary": {
    global: 50,
    home: 50,
    projects: 50,
    role: { "nlp-llm": 10 }
  },
  "devridge-feedback-bridge": {
    global: 60,
    projects: 60,
    role: { "nlp-llm": 35 }
  },
  "dalkom-shop-internal-commerce": {
    global: 80,
    projects: 80,
    role: { "aidlc-mlops": 30 }
  }
};

const surfacePriorityKey: Partial<Record<EvidenceSurface, "home" | "portfolio" | "projects" | "resume" | "print">> = {
  home: "home",
  "portfolio-web": "portfolio",
  "portfolio-print": "print",
  projects: "projects",
  "resume-web": "resume",
  "cv-print": "resume"
};

export function getProjectEvidencePriority(project: any, surface: EvidenceSurface, locale: Locale, role?: EvidenceThemeId) {
  const slug = project.slug ?? entrySlug(project);
  const evidence = normalizeEvidenceMetadata({ project: { ...project, slug }, locale });
  const configured = project.data.evidence?.priority ?? {};
  const known = knownProjectPriority[slug];
  const surfaceKey = surfacePriorityKey[surface];
  const configuredSurfacePriority = surfaceKey ? configured[surfaceKey] : undefined;
  const knownSurfacePriority = known?.[surface];
  const globalPriority = configured.global ?? known?.global ?? (project.data.featured ? 50 : 100);
  const rolePriority = role
    ? configured.role?.[role] ?? evidence.roleSignals[role]?.rank ?? known?.role?.[role] ?? inferRolePriority(evidence, role)
    : 0;

  return (configuredSurfacePriority ?? knownSurfacePriority ?? globalPriority) + rolePriority / 100;
}

export function sortProjectsForSurface(projects: any[], surface: EvidenceSurface, locale: Locale, role?: EvidenceThemeId) {
  return [...projects].sort((a, b) =>
    getProjectEvidencePriority(a, surface, locale, role) - getProjectEvidencePriority(b, surface, locale, role) ||
    b.data.year - a.data.year
  );
}

export function getProjectRoleWeight(project: any, role: EvidenceThemeId, locale: Locale): EvidenceWeight {
  const slug = project.slug ?? entrySlug(project);
  const evidence = normalizeEvidenceMetadata({ project: { ...project, slug }, locale });
  const configured = project.data.evidence?.reviewerIntents ?? {};
  const roleSignalWeight = evidence.roleSignals[role]?.weight;

  if (configured[role]) return configured[role] as EvidenceWeight;
  if (roleSignalWeight) return roleSignalWeight;
  if (evidence.primaryTheme === role) return "primary";
  if (evidence.secondaryThemes.includes(role)) return "supporting";
  return "related";
}

function inferRolePriority(evidence: ReturnType<typeof normalizeEvidenceMetadata>, role: EvidenceThemeId) {
  if (evidence.primaryTheme === role) return 10;
  if (evidence.secondaryThemes.includes(role)) return 40;
  return 90;
}

export function getProjectProofSentence(project: any, locale: Locale) {
  const slug = project.slug ?? entrySlug(project);
  const evidence = normalizeEvidenceMetadata({ project: { ...project, slug }, locale });
  const configured = project.data.evidence?.proofSentence;
  if (configured) return configured;

  if (locale === "ko") {
    if (evidence.primaryTheme === "data-graph") return "데이터 구조와 그래프 기반 구현 판단을 확인할 수 있습니다.";
    if (evidence.primaryTheme === "aidlc-mlops") return "실험, 평가, 산출물 관리가 구현 흐름으로 이어지는 방식을 확인할 수 있습니다.";
    return "NLP/LLM 모델링과 평가 판단이 실제 기능 구현으로 이어지는 방식을 확인할 수 있습니다.";
  }

  if (evidence.primaryTheme === "data-graph") return "Shows data-structure and graph-oriented implementation judgment.";
  if (evidence.primaryTheme === "aidlc-mlops") return "Shows how experiment, evaluation, and artifact management become implementation workflow.";
  return "Shows how NLP/LLM modeling and evaluation judgment turn into implemented features.";
}

export function getCasePriority(caseItem: PortfolioCase, surface: EvidenceSurface, role?: EvidenceThemeId) {
  const known = knownProjectPriority[caseItem.slug];
  const rolePriority = role
    ? caseItem.evidence.roleSignals[role]?.rank ??
      known?.role?.[role] ??
      (caseItem.evidence.primaryTheme === role ? 10 : caseItem.evidence.secondaryThemes.includes(role) ? 40 : 90)
    : 0;
  return (known?.[surface] ?? known?.global ?? 100) + rolePriority / 100;
}

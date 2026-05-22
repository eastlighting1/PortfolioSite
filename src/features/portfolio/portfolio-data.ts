import { entrySlug } from "../../lib/content";
import { type Locale, localizePath } from "../../lib/i18n";
import { withBase } from "../../lib/site";

type ArtifactKind = "repo" | "demo" | "paper" | "slides" | "doc" | "image" | "video";
type EvidenceThemeId = "data-graph" | "aidlc-mlops" | "nlp-llm";
type EvidenceLevel = "Published" | "Implemented" | "Prototype" | "Study" | "In Progress";
type DisclosureLevel = "Public" | "Public Summary Only" | "Sanitized" | "Private / Mention Only";

export interface PortfolioMetric {
  label: string;
  value: string;
  context?: string;
}

export interface PortfolioArtifact {
  label: string;
  href: string;
  kind: ArtifactKind;
  description?: string;
}

export interface ArchitectureModel {
  summary: string;
  nodes: Array<{ id: string; label: string; kind: string; description?: string }>;
  links: Array<{ from: string; to: string; label?: string }>;
}

export interface PortfolioCase {
  slug: string;
  title: string;
  year: number;
  type: string;
  role: string;
  roles: string[];
  summary: string;
  thesis: string;
  value: string;
  problem: string;
  constraints: string[];
  decisions: Array<{ label: string; description: string; rationale?: string }>;
  architecture?: ArchitectureModel;
  process: Array<{ label: string; description: string }>;
  outcome: string;
  metrics: PortfolioMetric[];
  artifacts: PortfolioArtifact[];
  reflection?: string;
  relatedResearch: any[];
  tags: string[];
  href: string;
  evidence: EvidenceMetadata;
}

export interface EvidenceMetadata {
  primaryTheme: EvidenceThemeId;
  secondaryThemes: EvidenceThemeId[];
  dataSurfaces: string[];
  workflowStages: string[];
  evidenceLevel: EvidenceLevel;
  disclosureLevel: DisclosureLevel;
  businessSignal: string;
  subtypes: string[];
}

export interface RoleTheme {
  id: EvidenceThemeId;
  title: string;
  shortTitle: string;
  description: string;
  businessSignal: string;
  skills: string[];
}

const linkLabels = {
  ko: {
    repo: "저장소",
    demo: "데모",
    paper: "논문",
    slides: "발표자료"
  },
  en: {
    repo: "Repository",
    demo: "Demo",
    paper: "Paper",
    slides: "Slides"
  }
} satisfies Record<Locale, Record<string, string>>;

const sectionLabels = {
  ko: {
    valueMap: "역할 지도",
    aidlc: "AI-DLC",
    evidenceLibrary: "증거",
    outcomes: "성과",
    featuredCases: "케이스",
    process: "프로세스",
    researchBridge: "연구 연결",
    recognition: "수료와 수상",
    contact: "연락"
  },
  en: {
    valueMap: "Role Map",
    aidlc: "AI-DLC",
    evidenceLibrary: "Evidence",
    outcomes: "Outcomes",
    featuredCases: "Cases",
    process: "Process",
    researchBridge: "Research",
    recognition: "Recognition",
    contact: "Contact"
  }
} satisfies Record<Locale, Record<string, string>>;

const roleThemes = {
  ko: [
    {
      id: "data-graph",
      title: "그래프를 핵심 강점으로 가진 데이터 스페셜리스트",
      shortTitle: "Data + Graph",
      description: "정형, 텍스트, 이미지, 그래프 데이터를 모델링 가능한 구조로 만들고 그래프 생태계를 주요 전문축으로 확장합니다.",
      businessSignal: "복잡한 데이터 표면을 기업 검토가 가능한 구조와 파이프라인으로 바꿉니다.",
      skills: ["Structured Data", "Text Data", "Graph Systems", "Data Pipelines"]
    },
    {
      id: "aidlc-mlops",
      title: "AI-DLC 기반 운영형 MLOps 엔지니어",
      shortTitle: "AI-DLC / MLOps",
      description: "AI-Driven Development Life Cycle 관점에서 실험, 학습, 평가, 배포, 관측, 복구 흐름을 연결합니다.",
      businessSignal: "AI 작업을 재현 가능하고 관측 가능한 운영 흐름으로 만듭니다.",
      skills: ["Observability", "CI/CD", "Continuous Training", "Artifacts"]
    },
    {
      id: "nlp-llm",
      title: "응용 NLP 및 LLM 연구 엔지니어",
      shortTitle: "NLP / LLM",
      description: "NLP/LLM 연구 경험을 모델링, 평가, alignment 이해, 시스템 수준 판단으로 연결합니다.",
      businessSignal: "언어 모델 연구를 평가 가능한 시스템 의사결정으로 번역합니다.",
      skills: ["NLP", "LLM Evaluation", "Alignment", "Domain Transfer"]
    }
  ],
  en: [
    {
      id: "data-graph",
      title: "Data Specialist, with Graph as a Core Strength",
      shortTitle: "Data + Graph",
      description: "Structures diverse data surfaces, including structured, text, image, and graph data, while using graph ecosystems as a core professional strength.",
      businessSignal: "Turns complex data surfaces into reviewable structures and pipelines.",
      skills: ["Structured Data", "Text Data", "Graph Systems", "Data Pipelines"]
    },
    {
      id: "aidlc-mlops",
      title: "AI-DLC and Operational MLOps Engineer",
      shortTitle: "AI-DLC / MLOps",
      description: "Connects experiment, training, evaluation, deployment, observability, and recovery through the AI-Driven Development Life Cycle.",
      businessSignal: "Makes AI work repeatable, observable, and operationally inspectable.",
      skills: ["Observability", "CI/CD", "Continuous Training", "Artifacts"]
    },
    {
      id: "nlp-llm",
      title: "Applied NLP and LLM Research Engineer",
      shortTitle: "NLP / LLM",
      description: "Uses NLP/LLM research experience for modeling, evaluation, alignment awareness, and system-level decisions.",
      businessSignal: "Translates language-model research into evaluable system judgment.",
      skills: ["NLP", "LLM Evaluation", "Alignment", "Domain Transfer"]
    }
  ]
} satisfies Record<Locale, RoleTheme[]>;

export const getRoleThemes = (locale: Locale) => roleThemes[locale];

const aidlcStages = {
  ko: [
    { title: "Data", emphasis: "데이터 표면", description: "정형, 텍스트, 이미지, 그래프 입력을 목적에 맞는 구조로 정리합니다." },
    { title: "Experiment", emphasis: "실험 추적", description: "가설, 설정, 메트릭, 산출물을 다시 검토할 수 있게 남깁니다." },
    { title: "Training", emphasis: "학습 흐름", description: "재현 가능한 환경과 파이프라인으로 모델 학습을 관리합니다." },
    { title: "Evaluation", emphasis: "평가 설계", description: "정확도만이 아니라 오류, 희소 클래스, 도메인 요구를 함께 확인합니다." },
    { title: "Deployment", emphasis: "전달 구조", description: "검토 가능한 산출물과 실행 표면으로 결과를 전달합니다." },
    { title: "Observability", emphasis: "관측 가능성", description: "로그, 아티팩트, 실행 기록을 통해 시스템 상태를 설명 가능하게 만듭니다." },
    { title: "Feedback / Recovery", emphasis: "복구와 개선", description: "비교, 복구, 회고를 다음 개선 사이클로 연결합니다." }
  ],
  en: [
    { title: "Data", emphasis: "Data surface", description: "Shape structured, text, image, and graph inputs into usable modeling surfaces." },
    { title: "Experiment", emphasis: "Tracking", description: "Keep hypotheses, settings, metrics, and artifacts inspectable." },
    { title: "Training", emphasis: "Training flow", description: "Manage model training through reproducible environments and workflows." },
    { title: "Evaluation", emphasis: "Evaluation design", description: "Review errors, rare cases, and domain needs beyond top-line scores." },
    { title: "Deployment", emphasis: "Delivery", description: "Package outputs into reviewable artifacts and execution surfaces." },
    { title: "Observability", emphasis: "Visibility", description: "Use logs, artifacts, and run records to explain system state." },
    { title: "Feedback / Recovery", emphasis: "Recovery", description: "Connect comparison, recovery, and retrospection into the next cycle." }
  ]
} satisfies Record<Locale, Array<{ title: string; emphasis: string; description: string }>>;

const defaultCaseDecisionLabel = {
  ko: "핵심 설계",
  en: "Key Decision"
} satisfies Record<Locale, string>;

const defaultProcess = {
  ko: [
    { label: "문제 정의", description: "현장에서 실제로 막히는 지점과 평가 가능한 목표를 먼저 분리합니다." },
    { label: "데이터 구조화", description: "모델링 가능한 입력면을 만들고 재현 가능한 전처리 흐름을 정리합니다." },
    { label: "검증 가능한 구현", description: "모델, 평가, 산출물을 함께 남겨 결과를 다시 조사할 수 있게 만듭니다." },
    { label: "전달과 회고", description: "성과와 한계를 문서화해 다음 연구와 시스템 개선으로 이어지게 합니다." }
  ],
  en: [
    { label: "Frame the failure mode", description: "Separate the real-world bottleneck from the measurable technical target." },
    { label: "Shape the data surface", description: "Turn messy inputs into a reproducible modeling and evaluation workflow." },
    { label: "Build inspectable outputs", description: "Keep models, metrics, and artifacts traceable enough to review later." },
    { label: "Document the next step", description: "Record outcomes and limits so the work can continue beyond the demo." }
  ]
} satisfies Record<Locale, Array<{ label: string; description: string }>>;

const normalizeLegacyMetric = (metric: string): PortfolioMetric => {
  const [label, ...rest] = metric.split(/\s+/);
  return {
    label: rest.length > 0 ? label : "Metric",
    value: rest.length > 0 ? rest.join(" ") : metric,
    context: metric
  };
};

const hasAny = (values: string[], patterns: RegExp[]) => values.some((value) => patterns.some((pattern) => pattern.test(value)));

const inferEvidenceTheme = (project: any): EvidenceThemeId => {
  const slug = project.slug ?? entrySlug(project);
  const haystack = [
    slug,
    project.data.title,
    project.data.type,
    project.data.summary,
    ...(project.data.tags ?? [])
  ].join(" ").toLowerCase();

  if (/lynxes|caracal|graph|knowledge graph|gnn|recommend/.test(haystack)) return "data-graph";
  if (/contexta|observability|mlops|pipeline|devops|ci\/cd|continuous/.test(haystack)) return "aidlc-mlops";
  return "nlp-llm";
};

const inferDataSurfaces = (project: any): string[] => {
  const values = [
    project.data.title,
    project.data.type,
    project.data.summary,
    ...(project.data.tags ?? [])
  ].map((value: string) => value.toLowerCase());
  const surfaces = new Set<string>();

  if (hasAny(values, [/emr|structured|검사|정형|feature|피처|table/])) surfaces.add("structured");
  if (hasAny(values, [/text|nlp|bert|dialogue|대화|텍스트|언어|nursing/])) surfaces.add("text");
  if (hasAny(values, [/image|이미지|multimodal|멀티모달/])) surfaces.add("image");
  if (hasAny(values, [/graph|그래프|gnn|knowledge|recommend|추천|arrow|csr|caracal|lynxes/])) surfaces.add("graph");
  if (surfaces.size > 1) surfaces.add("hybrid");

  return surfaces.size > 0 ? Array.from(surfaces) : ["hybrid"];
};

const inferWorkflowStages = (project: any): string[] => {
  const values = [
    project.data.title,
    project.data.type,
    project.data.summary,
    ...(project.data.tags ?? [])
  ].map((value: string) => value.toLowerCase());
  const stages = new Set<string>(["data", "evaluation"]);

  if (hasAny(values, [/experiment|tracking|실험|observability|contexta/])) stages.add("experiment");
  if (hasAny(values, [/training|bert|xgboost|model|학습|모델/])) stages.add("training");
  if (hasAny(values, [/deploy|serving|cloud|docker|ci\/cd|배포/])) stages.add("deployment");
  if (hasAny(values, [/inference|추론/])) stages.add("inference");
  if (hasAny(values, [/observability|monitor|logging|artifact|로그|관측/])) stages.add("observability");
  if (hasAny(values, [/recovery|restore|backup|feedback|복구|회고/])) stages.add("feedback-recovery");

  return Array.from(stages);
};

const inferEvidenceLevel = (project: any): EvidenceLevel => {
  if (project.data.paperUrl || project.data.portfolio?.artifacts?.some((item: PortfolioArtifact) => item.kind === "paper")) {
    return "Published";
  }
  if (project.data.repoUrl || project.data.demoUrl) return "Implemented";
  return project.data.featured ? "Implemented" : "Prototype";
};

const inferBusinessSignal = ({ theme, locale }: { theme: EvidenceThemeId; locale: Locale }) => {
  const themeItem = roleThemes[locale].find((item) => item.id === theme);
  return themeItem?.businessSignal ?? (locale === "ko" ? "기업 검토 가능한 기술 증거입니다." : "Reviewable evidence for company-facing technical evaluation.");
};

export const normalizeEvidenceMetadata = ({ project, locale }: { project: any; locale: Locale }): EvidenceMetadata => {
  const provided = project.data.evidence ?? {};
  const primaryTheme = provided.primaryTheme ?? inferEvidenceTheme(project);
  const secondaryThemes = (provided.secondaryThemes ?? []).filter((item: EvidenceThemeId) => item !== primaryTheme);

  return {
    primaryTheme,
    secondaryThemes,
    dataSurfaces: provided.dataSurfaces?.length ? provided.dataSurfaces : inferDataSurfaces(project),
    workflowStages: provided.workflowStages?.length ? provided.workflowStages : inferWorkflowStages(project),
    evidenceLevel: provided.evidenceLevel ?? inferEvidenceLevel(project),
    disclosureLevel: provided.disclosureLevel ?? "Public",
    businessSignal: provided.businessSignal ?? inferBusinessSignal({ theme: primaryTheme, locale }),
    subtypes: provided.subtypes ?? []
  };
};

const buildArtifacts = (project: any, locale: Locale): PortfolioArtifact[] =>
  [
    { label: linkLabels[locale].repo, href: project.data.repoUrl, kind: "repo" as const },
    { label: linkLabels[locale].demo, href: project.data.demoUrl, kind: "demo" as const },
    { label: linkLabels[locale].paper, href: project.data.paperUrl, kind: "paper" as const },
    { label: linkLabels[locale].slides, href: project.data.slidesUrl, kind: "slides" as const }
  ].filter((item) => Boolean(item.href));

const normalizePortfolioCase = ({
  project,
  research,
  locale
}: {
  project: any;
  research: any[];
  locale: Locale;
}): PortfolioCase => {
  const portfolio = project.data.portfolio;
  const legacyProblem = project.data.portfolioProblem ?? project.data.summary;
  const legacyApproach = project.data.portfolioApproach ?? project.data.summary;
  const legacyOutcome = project.data.portfolioOutcome ?? project.data.summary;
  const metrics = portfolio?.metrics?.length
    ? portfolio.metrics
    : (project.data.metrics ?? []).map(normalizeLegacyMetric);
  const artifacts = [
    ...(portfolio?.artifacts ?? []),
    ...buildArtifacts(project, locale)
  ];
  const relatedResearch = (portfolio?.relatedResearch ?? project.data.linkedResearch ?? [])
    .map((slug: string) => research.find((item) => entrySlug(item) === slug))
    .filter(Boolean);

  if (!legacyProblem || !legacyOutcome) {
    throw new Error(`Featured portfolio case is missing problem/outcome content: ${project.id}`);
  }

  return {
    slug: project.slug,
    title: project.data.title,
    year: project.data.year,
    type: project.data.type,
    role: project.data.role,
    roles: project.data.roles,
    summary: project.data.summary,
    thesis: portfolio?.thesis ?? project.data.summary,
    value: portfolio?.value ?? legacyOutcome,
    problem: portfolio?.problem ?? legacyProblem,
    constraints: portfolio?.constraints ?? [],
    decisions: portfolio?.decisions?.length
      ? portfolio.decisions
      : [{ label: defaultCaseDecisionLabel[locale], description: legacyApproach }],
    architecture: portfolio?.architecture,
    process: portfolio?.process ?? [],
    outcome: portfolio?.outcome ?? legacyOutcome,
    metrics,
    artifacts,
    reflection: portfolio?.reflection,
    relatedResearch,
    tags: project.data.tags ?? [],
    href: withBase(localizePath(`projects/${project.slug}/`, locale)),
    evidence: normalizeEvidenceMetadata({ project, locale })
  };
};

export const getFeaturedCases = ({
  locale,
  page,
  projects,
  research
}: {
  locale: Locale;
  page: any;
  projects: any[];
  research: any[];
}) => {
  const legacySlugs = page.data.selection?.selectedProjectSlugs ?? [];
  const slugs = page.data.featuredCaseSlugs.length > 0 ? page.data.featuredCaseSlugs : legacySlugs;
  const selected = slugs.length > 0
    ? slugs.map((slug: string) => {
        const project = projects.find((item) => item.slug === slug);
        if (!project) {
          throw new Error(`Missing featured portfolio case: ${slug} (${locale})`);
        }
        return project;
      })
    : projects.filter((item) => item.data.featured).slice(0, 3);

  return selected.map((project) => normalizePortfolioCase({ project, research, locale }));
};

export const getPortfolioMetrics = (cases: PortfolioCase[]) =>
  cases.flatMap((item) =>
    item.metrics.slice(0, 2).map((metric) => ({
      ...metric,
      source: item.title
    }))
  ).slice(0, 6);

export const getEvidenceGroups = ({ locale, projects, research }: { locale: Locale; projects: any[]; research: any[] }) => {
  const evidenceItems = projects
    .map((project) => normalizePortfolioCase({ project, research, locale }))
    .filter((item) => item.evidence.disclosureLevel !== "Private / Mention Only");

  return roleThemes[locale].map((theme) => ({
    theme,
    items: evidenceItems.filter((item) =>
      item.evidence.primaryTheme === theme.id || item.evidence.secondaryThemes.includes(theme.id)
    )
  }));
};

export const getRecognitionEntries = (recognition: any, limit = 4) =>
  [
    ...(recognition.certificates ?? []).map((item: any) => ({ kind: "certificate" as const, item })),
    ...(recognition.awards ?? []).map((item: any) => ({ kind: "award" as const, item }))
  ].slice(0, limit);

export const getResearchLinks = ({ cases, research }: { cases: PortfolioCase[]; research: any[] }) => {
  const linked = new Set(cases.flatMap((item) => item.relatedResearch.map((entry) => entry.id)));
  const fallback = research.slice(0, 3).map((entry) => ({ entry, linkedCases: [] as string[] }));
  const explicit = research
    .filter((entry) => linked.has(entry.id))
    .map((entry) => ({
      entry,
      linkedCases: cases
        .filter((item) => item.relatedResearch.some((researchEntry) => researchEntry.id === entry.id))
        .map((item) => item.title)
    }));

  return explicit.length > 0 ? explicit : fallback;
};

export const getPortfolioNavigation = ({ page, locale }: { page: any; locale: Locale }) =>
  page.data.sections.map((id: string) => ({
    id,
    href: `#${id}`,
    label: sectionLabels[locale][id] ?? id
  }));

export function buildPortfolioViewModel({
  locale,
  profile,
  siteConfig,
  links,
  recognition,
  portfolioPage,
  allProjects,
  allResearch
}: {
  locale: Locale;
  profile: any;
  siteConfig: any;
  links: any;
  recognition: any;
  portfolioPage: any;
  allProjects: any[];
  allResearch: any[];
}) {
  const featuredCases = getFeaturedCases({
    locale,
    page: portfolioPage,
    projects: allProjects,
    research: allResearch
  });
  const hero = portfolioPage.data.hero ?? {
    eyebrow: siteConfig.primaryRole,
    title: profile.headline,
    lead: profile.intro,
    valueStatement: profile.summary,
    actions: [
      { label: locale === "ko" ? "대표 케이스 보기" : "View Featured Cases", href: "#featuredCases", variant: "primary" }
    ]
  };
  const contactItems = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    ...links.externalProfiles.slice(0, 3).map((item: any) => ({
      label: item.label,
      value: item.href.replace(/^https?:\/\//, ""),
      href: item.href
    }))
  ];

  return {
    hero,
    roleThemes: roleThemes[locale],
    aidlcStages: aidlcStages[locale],
    evidenceGroups: getEvidenceGroups({ locale, projects: allProjects, research: allResearch }),
    featuredCases,
    portfolioMetrics: getPortfolioMetrics(featuredCases),
    recognitionEntries: getRecognitionEntries(recognition, 4),
    researchLinks: getResearchLinks({ cases: featuredCases, research: allResearch }),
    navigation: getPortfolioNavigation({ page: portfolioPage, locale }),
    contactItems,
    process: profile.pipeline.length > 0 ? profile.pipeline : defaultProcess[locale],
    valueItems: profile.capabilityGroups.map((group: any, index: number) => ({
      value: group.title,
      outcome: group.description,
      evidence: featuredCases[index % Math.max(featuredCases.length, 1)]?.title ?? profile.summary,
      skills: group.skills
    })),
    labels: {
      outcomes: locale === "ko" ? "검증 가능한 성과" : "Evidence-backed Outcomes",
      featuredCases: locale === "ko" ? "대표 케이스 스터디" : "Featured Case Studies",
      valueMap: locale === "ko" ? "가치 지도" : "Value Map",
      process: locale === "ko" ? "작업 프로세스" : "Working Process",
      researchBridge: locale === "ko" ? "연구와 구현의 연결" : "Research-to-Implementation Bridge",
      recognition: locale === "ko" ? "수료와 수상" : "Recognition",
      contact: locale === "ko" ? "다음 대화" : "Next Conversation",
      problem: locale === "ko" ? "문제" : "Problem",
      decision: locale === "ko" ? "핵심 결정" : "Key Decision",
      outcome: locale === "ko" ? "결과" : "Outcome",
      evidence: locale === "ko" ? "증거" : "Evidence",
      readCase: locale === "ko" ? "케이스 스터디 읽기" : "Read Case Study",
      artifacts: locale === "ko" ? "관련 자료" : "Artifacts"
    }
  };
}

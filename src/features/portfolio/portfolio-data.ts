import { entrySlug } from "../../lib/content";
import { type Locale, localizePath } from "../../lib/i18n";
import { withBase } from "../../lib/site";

type ArtifactKind = "repo" | "demo" | "paper" | "slides" | "doc" | "image" | "video";
type EvidenceThemeId = "data-graph" | "aidlc-mlops" | "nlp-llm";
type EvidenceLevel = "Published" | "Implemented" | "Prototype" | "Study" | "In Progress";
type DisclosureLevel = "Public" | "Public Summary Only" | "Sanitized" | "Private / Mention Only";
type RoleWeight = "primary" | "supporting" | "minor";
type EvidenceRoleSignalWeight = "primary" | "supporting" | "related" | "not-relevant";

interface EvidenceRoleSignal {
  weight: EvidenceRoleSignalWeight;
  rank: number;
  signal: string;
  reviewerReason: string;
}

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
  roleSignals: Partial<Record<EvidenceThemeId, EvidenceRoleSignal>>;
}

export interface RoleTheme {
  id: EvidenceThemeId;
  title: string;
  shortTitle: string;
  description: string;
  businessSignal: string;
  skills: string[];
  icon: string;
  reviewerQuestion: string;
}

export interface RoleSignalView {
  role: RoleTheme;
  weight: RoleWeight;
  label: string;
  signal: string;
  reviewerReason?: string;
  rank?: number;
}

export interface EvidenceMatrixRow {
  title: string;
  href: string;
  thesis: string;
  type: string;
  year: number;
  cells: RoleSignalView[];
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
    reviewerMode: "검토 모드",
    valueMap: "관점 선택",
    aidlc: "AI-DLC",
    evidenceLibrary: "프로젝트",
    outcomes: "성과",
    featuredCases: "케이스",
    process: "프로세스",
    researchBridge: "연구 연결",
    recognition: "수료와 수상",
    contact: "연락"
  },
  en: {
    reviewerMode: "Review Mode",
    valueMap: "Focus Areas",
    aidlc: "AI-DLC",
    evidenceLibrary: "Projects",
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
      title: "그래프 네이티브 깊이를 가진 데이터 시스템 스페셜리스트",
      shortTitle: "Data Systems",
      description: "정형, 텍스트, 이미지, 그래프형 데이터를 모델링과 운영에 연결 가능한 구조로 만들고, 그래프 모델링과 인프라를 핵심 깊이로 가져갑니다.",
      businessSignal: "이질적인 데이터를 모델과 시스템이 함께 다룰 수 있는 표현, 파이프라인, 그래프 구조로 바꿉니다.",
      skills: ["Heterogeneous Data", "Graph-native Modeling", "Pipeline-ready Representation", "Data Infrastructure"],
      icon: "Network",
      reviewerQuestion: "다양한 데이터 표면을 다루면서 그래프 시스템 깊이를 보여주는가?"
    },
    {
      id: "aidlc-mlops",
      title: "AI-DLC 기반 운영형 MLOps 엔지니어",
      shortTitle: "AI-DLC / MLOps",
      description: "AI-Driven Development Life Cycle 관점에서 실험, 학습, 평가, 배포, 추론, 관측, 복구 흐름을 재현 가능한 운영 구조로 연결합니다.",
      businessSignal: "AI 작업의 실행 기록, 산출물, 모델 행동, 피드백 경로를 다시 검토하고 개선할 수 있게 만듭니다.",
      skills: ["Experiment Records", "Observability", "CI/CD and CT", "Recovery Flow"],
      icon: "Workflow",
      reviewerQuestion: "AI 작업을 반복 가능하고 관측 가능한 운영 흐름으로 만들 수 있는가?"
    },
    {
      id: "nlp-llm",
      title: "응용 NLP 및 LLM 연구 엔지니어",
      shortTitle: "NLP / LLM",
      description: "NLP/LLM 연구 경험을 모델링, 평가 설계, alignment 이해, 적용 맥락 판단으로 연결합니다.",
      businessSignal: "언어 모델 연구 경험을 실제 시스템에서 더 나은 모델링과 평가 판단으로 번역합니다.",
      skills: ["Modeling", "Evaluation Design", "Alignment Awareness", "Research-to-System"],
      icon: "BrainCircuit",
      reviewerQuestion: "연구 경험이 시스템 판단과 평가 설계로 이어지는가?"
    }
  ],
  en: [
    {
      id: "data-graph",
      title: "Data Systems Specialist with Graph-native Depth",
      shortTitle: "Data Systems",
      description: "Shapes structured, text, image, and graph-shaped data into representations that can move into modeling and operations, with graph-native modeling and infrastructure as the deepest specialization.",
      businessSignal: "Turns heterogeneous data into model-ready and system-ready structures, pipelines, and graph representations.",
      skills: ["Heterogeneous Data", "Graph-native Modeling", "Pipeline-ready Representation", "Data Infrastructure"],
      icon: "Network",
      reviewerQuestion: "Can this work handle broad data surfaces while showing real graph-system depth?"
    },
    {
      id: "aidlc-mlops",
      title: "AI-DLC and Operational MLOps Engineer",
      shortTitle: "AI-DLC / MLOps",
      description: "Connects experiment, training, evaluation, deployment, inference, observability, and recovery through the AI-Driven Development Life Cycle.",
      businessSignal: "Makes run records, artifacts, model behavior, and feedback paths inspectable enough to improve.",
      skills: ["Experiment Records", "Observability", "CI/CD and CT", "Recovery Flow"],
      icon: "Workflow",
      reviewerQuestion: "Can this work make AI workflows repeatable, observable, and operationally reviewable?"
    },
    {
      id: "nlp-llm",
      title: "Applied NLP and LLM Research Engineer",
      shortTitle: "NLP / LLM",
      description: "Uses NLP/LLM research experience for modeling, evaluation design, alignment awareness, and applied system judgment.",
      businessSignal: "Translates language-model research into better modeling and evaluation decisions in applied systems.",
      skills: ["Modeling", "Evaluation Design", "Alignment Awareness", "Research-to-System"],
      icon: "BrainCircuit",
      reviewerQuestion: "Does the research experience improve system decisions and evaluation design?"
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

const dataSystemsConcepts = {
  ko: [
    { id: "structured", title: "Structured Data", emphasis: "정형 데이터 설계", description: "EMR 및 다양한 피처 테이블 등 관계형/정형 데이터 표현 및 스키마 설계" },
    { id: "text", title: "Text & Embedding", emphasis: "텍스트 및 임베딩", description: "비구조화 텍스트 데이터의 토큰화 및 시맨틱 임베딩 공간 구조화" },
    { id: "graph", title: "Knowledge Graph", emphasis: "지식 그래프", description: "GNN 및 추천 모델에 연동 가능한 실시간 지식 그래프 구조 설계" },
    { id: "hybrid", title: "Hybrid Pipeline", emphasis: "하이브리드 파이프라인", description: "이질적인 데이터 소스들을 통합하여 고성능 처리가 가능한 파이프라인 구축" }
  ],
  en: [
    { id: "structured", title: "Structured Data", emphasis: "Structured Data Design", description: "Schema and relational design for structured inputs including EMR and feature tables." },
    { id: "text", title: "Text & Embedding", emphasis: "Text & Embedding", description: "Tokenization and semantic embedding space structure for unstructured text." },
    { id: "graph", title: "Knowledge Graph", emphasis: "Knowledge Graph", description: "Real-time knowledge graph design compatible with GNNs and recommender systems." },
    { id: "hybrid", title: "Hybrid Pipeline", emphasis: "Hybrid Pipeline", description: "Integrating heterogeneous sources into high-performance processing pipelines." }
  ]
} satisfies Record<Locale, Array<{ id: string; title: string; emphasis: string; description: string }>>;

const nlpLlmConcepts = {
  ko: [
    { id: "modeling", title: "Language Modeling", emphasis: "언어 모델링", description: "특정 도메인에 맞춘 사전 학습(Pre-training) 및 태스크 미세 조정(Fine-tuning)" },
    { id: "evaluation", title: "Evaluation Design", emphasis: "평가 및 벤치마크", description: "정확도 지표를 넘어 희소 클래스 오류, 편향, 도메인 제약을 고려한 다차원 평가 설계" },
    { id: "alignment", title: "Alignment & Preference", emphasis: "정렬 및 선호도", description: "지시어 튜닝(Instruction tuning) 및 RLAIF/RLHF 등을 통한 인간/AI 선호도 정렬" },
    { id: "integration", title: "Research-to-System", emphasis: "연구의 실무 전환", description: "최신 NLP 논문 연구 성과를 실생활 웹 서비스 API 및 경량화 모델로 배포 및 통합" }
  ],
  en: [
    { id: "modeling", title: "Language Modeling", emphasis: "Language Modeling", description: "Domain-specific pre-training and downstream task adaptation/fine-tuning." },
    { id: "evaluation", title: "Evaluation Design", emphasis: "Evaluation Design", description: "Multi-dimensional evaluation addressing rare errors, biases, and domain constraints beyond simple metrics." },
    { id: "alignment", title: "Alignment & Preference", emphasis: "Alignment & Preference", description: "Instruction tuning and alignment with human/AI preferences via RLAIF/RLHF." },
    { id: "integration", title: "Research-to-System", emphasis: "Research-to-System", description: "Translating advanced NLP research into production-grade web service APIs and lightweight optimized models." }
  ]
} satisfies Record<Locale, Array<{ id: string; title: string; emphasis: string; description: string }>>;


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
  return themeItem?.businessSignal ?? (locale === "ko" ? "검토 가능한 기술 판단을 보여주는 작업입니다." : "A reviewable record of technical judgment.");
};

const publicEvidenceLevelLabels = {
  ko: {
    Published: "논문 기반",
    Implemented: "구현 완료",
    Prototype: "프로토타입",
    Study: "스터디",
    "In Progress": "진행 중"
  },
  en: {
    Published: "Published work",
    Implemented: "Built project",
    Prototype: "Prototype",
    Study: "Study",
    "In Progress": "In progress"
  }
} satisfies Record<Locale, Record<EvidenceLevel, string>>;

const publicDisclosureLabels = {
  ko: {
    Public: "공개 자료",
    "Public Summary Only": "요약 공개",
    Sanitized: "안전 요약",
    "Private / Mention Only": "세부 내용 별도 문의"
  },
  en: {
    Public: "Public",
    "Public Summary Only": "Summary available",
    Sanitized: "Safe summary",
    "Private / Mention Only": "Details on request"
  }
} satisfies Record<Locale, Record<DisclosureLevel, string>>;

export const getPublicEvidenceLevelLabel = (level: EvidenceLevel, locale: Locale) => publicEvidenceLevelLabels[locale][level];
export const getPublicDisclosureLabel = (level: DisclosureLevel, locale: Locale) => publicDisclosureLabels[locale][level];

export const getThemeById = (themeId: EvidenceThemeId, locale: Locale) =>
  roleThemes[locale].find((theme) => theme.id === themeId) ?? roleThemes[locale][0];

const roleSignalLabels = {
  ko: {
    primary: "주요 신호",
    supporting: "보조 신호",
    minor: "연결 가능"
  },
  en: {
    primary: "Primary signal",
    supporting: "Supporting signal",
    minor: "Related signal"
  }
} satisfies Record<Locale, Record<RoleWeight, string>>;

const toPresentationRoleWeight = (weight?: EvidenceRoleSignalWeight): RoleWeight => {
  if (weight === "primary") return "primary";
  if (weight === "supporting") return "supporting";
  return "minor";
};

export const getRoleSignalsForCase = (item: PortfolioCase, locale: Locale): RoleSignalView[] => {
  const signals: RoleSignalView[] = roleThemes[locale].map((role) => {
    const configuredSignal = item.evidence.roleSignals[role.id];
    const inferredWeight: RoleWeight =
      item.evidence.primaryTheme === role.id
        ? "primary"
        : item.evidence.secondaryThemes.includes(role.id)
          ? "supporting"
          : "minor";
    const weight = configuredSignal ? toPresentationRoleWeight(configuredSignal.weight) : inferredWeight;
    const inferredSignal =
      inferredWeight === "primary"
        ? item.evidence.businessSignal
        : inferredWeight === "supporting"
          ? role.businessSignal
          : locale === "ko"
            ? "이 작업의 중심 검토 축은 아닙니다."
            : "Not a primary review signal for this work.";

    return {
      role,
      weight,
      label: roleSignalLabels[locale][weight],
      signal: configuredSignal?.signal ?? inferredSignal,
      reviewerReason: configuredSignal?.reviewerReason,
      rank: configuredSignal?.rank
    };
  });

  return signals;
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
    subtypes: provided.subtypes ?? [],
    roleSignals: provided.roleSignals ?? {}
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
  const priorityFor = (project: any) =>
    project.data.evidence?.priority?.portfolio ??
    project.data.evidence?.priority?.global ??
    project.data.resume?.priority ??
    100;
  const selected = slugs.length > 0
    ? slugs.map((slug: string) => {
        const project = projects.find((item) => item.slug === slug);
        if (!project) {
          throw new Error(`Missing featured portfolio case: ${slug} (${locale})`);
        }
        return project;
      }).sort((a: any, b: any) => priorityFor(a) - priorityFor(b) || b.data.year - a.data.year)
    : (projects.some((item) => item.data.featured) ? projects.filter((item) => item.data.featured) : projects)
        .sort((a: any, b: any) => priorityFor(a) - priorityFor(b) || b.data.year - a.data.year)
        .slice(0, 3);

  return selected.map((project) => normalizePortfolioCase({ project, research, locale }));
};

export const getPortfolioMetrics = (cases: PortfolioCase[]) =>
  cases.flatMap((item) =>
    item.metrics.slice(0, 2).map((metric) => ({
      ...metric,
      source: item.title,
      primaryTheme: item.evidence.primaryTheme,
      secondaryThemes: item.evidence.secondaryThemes
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

export const getEvidenceMatrixRows = ({ locale, cases }: { locale: Locale; cases: PortfolioCase[] }): EvidenceMatrixRow[] =>
  cases.map((item) => ({
    title: item.title,
    href: item.href,
    thesis: item.thesis,
    type: item.type,
    year: item.year,
    cells: getRoleSignalsForCase(item, locale)
  }));

export const getRecognitionEntries = (recognition: any, limit = 4) =>
  [
    ...(recognition.certificates ?? []).map((item: any) => ({ kind: "certificate" as const, item })),
    ...(recognition.awards ?? []).map((item: any) => ({ kind: "award" as const, item }))
  ].slice(0, limit);

export const getResearchLinks = ({ cases, research, projects = [] }: { cases: PortfolioCase[]; research: any[]; projects?: any[] }) => {
  const linked = new Set(cases.flatMap((item) => item.relatedResearch.map((entry) => entry.id)));
  const projectTitleBySlug = new Map(projects.map((project: any) => [project.slug ?? entrySlug(project), project.data.title]));
  const fallback = research.slice(0, 3).map((entry) => ({
    entry,
    linkedCases: [] as string[],
    primaryTheme: "nlp-llm" as const,
    secondaryThemes: [] as string[]
  }));
  const explicit = research
    .filter((entry) => linked.has(entry.id) || entry.data.linkedProjects?.length)
    .map((entry) => {
      const associatedCases = cases.filter((item) => item.relatedResearch.some((researchEntry) => researchEntry.id === entry.id));
      const primaryTheme = associatedCases[0]?.evidence.primaryTheme ?? "nlp-llm";
      const secondaryThemes = Array.from(new Set(associatedCases.flatMap(c => c.evidence.secondaryThemes)));
      return {
        entry,
        linkedCases: associatedCases.length > 0
          ? associatedCases.map((item) => item.title)
          : (entry.data.linkedProjects ?? []).map((slug: string) => projectTitleBySlug.get(slug) ?? slug),
        primaryTheme,
        secondaryThemes
      };
    });

  return explicit.length > 0 ? explicit : fallback;
};

export const getPortfolioNavigation = ({
  page,
  locale,
  metricsCount = 0,
  recognitionCount = 0
}: {
  page: any;
  locale: Locale;
  metricsCount?: number;
  recognitionCount?: number;
}) => {
  const skipMap = new Set<string>();
  if (metricsCount === 0) skipMap.add("outcomes");
  if (recognitionCount === 0) skipMap.add("recognition");

  return page.data.sections
    .filter((id: string) => !skipMap.has(id))
    .map((id: string) => ({
      id,
      href: `#${id}`,
      label: sectionLabels[locale][id] ?? id
    }));
};

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
    researchLinks: getResearchLinks({ cases: featuredCases, research: allResearch, projects: allProjects }),
    navigation: getPortfolioNavigation({
      page: portfolioPage,
      locale,
      metricsCount: getPortfolioMetrics(featuredCases).length,
      recognitionCount: getRecognitionEntries(recognition, 4).length
    }),
    dataSystemsConcepts: dataSystemsConcepts[locale],
    nlpLlmConcepts: nlpLlmConcepts[locale],
    contactItems,
    process: profile.pipeline.length > 0 ? profile.pipeline : defaultProcess[locale],
    valueItems: profile.capabilityGroups.map((group: any, index: number) => ({
      value: group.title,
      outcome: group.description,
      evidence: featuredCases[index % Math.max(featuredCases.length, 1)]?.title ?? profile.summary,
      skills: group.skills
    })),
    labels: {
      outcomes: locale === "ko" ? "맥락이 있는 성과" : "Outcomes in Context",
      featuredCases: locale === "ko" ? "대표 케이스 스터디" : "Featured Case Studies",
      valueMap: locale === "ko" ? "관점 선택" : "Focus Areas",
      process: locale === "ko" ? "작업 프로세스" : "Working Process",
      researchBridge: locale === "ko" ? "연구와 구현의 연결" : "Research-to-Implementation Bridge",
      recognition: locale === "ko" ? "수료와 수상" : "Recognition",
      contact: locale === "ko" ? "연락" : "Contact",
      problem: locale === "ko" ? "문제" : "Problem",
      decision: locale === "ko" ? "핵심 결정" : "Key Decision",
      outcome: locale === "ko" ? "결과" : "Outcome",
      evidence: locale === "ko" ? "확인할 내용" : "What to Review",
      readCase: locale === "ko" ? "프로젝트 보기" : "Open Project",
      artifacts: locale === "ko" ? "관련 자료" : "Artifacts"
    },
    evidenceMatrixRows: getEvidenceMatrixRows({ locale, cases: featuredCases })
  };
}

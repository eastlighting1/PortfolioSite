# Web-First Portfolio Technical Product Spec

## 1. Product Intent

The site must stop treating Portfolio as a printable sibling of Resume. Resume remains a concise document surface. Portfolio becomes a web-first showcase that explains the owner's value through project evidence, decisions, outcomes, research links, and artifacts.

## 2. Requirement Specification

### Product Requirements

| ID | Requirement | Priority | Acceptance Criteria |
| --- | --- | --- | --- |
| PR-01 | `/portfolio/` must communicate role, domain, evidence, and primary actions in the first viewport. | Must | The first viewport contains one H1, one domain statement, at least two evidence cues, and at least one primary CTA. |
| PR-02 | Resume and Portfolio must be structurally distinct. | Must | Resume uses `PrintLayout`; Portfolio uses `BaseLayout` and scroll sections. |
| PR-03 | Portfolio content must be editable through intuitive nested fields. | Must | Project entries support `portfolio.thesis`, `problem`, `constraints`, `decisions`, `architecture`, `metrics`, `artifacts`, and `reflection`. |
| PR-04 | Recognition data must not live inside the Portfolio page. | Must | Certificates and awards are stored in `globals/recognition.{locale}.yaml` and consumed by Resume and Portfolio. |
| PR-05 | Existing legacy project content must keep building during migration. | Must | Builders fall back to legacy `portfolioProblem`, `portfolioApproach`, `portfolioOutcome`, and `metrics` fields. |
| PR-06 | Featured portfolio cases must be curated explicitly. | Must | Portfolio page data contains `featuredCaseSlugs`; missing slugs fail at build time. |
| PR-07 | Project detail pages must surface portfolio evidence before long-form Markdown. | Should | Detail pages render problem, decision, outcome, architecture, metrics, and artifacts when data exists. |
| PR-08 | The design system must support evidence-heavy editorial pages. | Should | Global tokens include semantic states for focus, hover, disabled, selected, overlay, and elevation. |

### Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
| --- | --- | --- |
| NFR-01 | Static build compatibility | `npm run build` succeeds with Astro static output. |
| NFR-02 | Locale support | Korean and English portfolio pages use the same structural model. |
| NFR-03 | Accessibility | Section navigation uses meaningful anchors; CTA text is descriptive; focus rings are visible. |
| NFR-04 | Responsive stability | Portfolio cards and hero evidence cues do not overflow at desktop or mobile widths. |
| NFR-05 | Migration safety | New schema fields are optional until all project entries are migrated. |

## 3. Use Cases

| User | Goal | Portfolio Behavior |
| --- | --- | --- |
| Recruiter | Understand the owner's practical value quickly. | Hero explains domain and value; evidence cues link to representative cases. |
| Technical reviewer | Inspect decisions and system thinking. | Case cards expose problem, constraints, decisions, architecture, metrics, and artifacts. |
| Research collaborator | Connect projects with research direction. | Research bridge links papers and research entries to applied project outcomes. |
| Site owner | Add or revise portfolio content without hunting across components. | Content lives in nested project fields and page-level curation YAML. |
| Print/PDF reader | Read a concise professional document. | Resume remains document-first; Portfolio can later expose `/portfolio/print/` if needed. |

## 4. Implementation Phases

### Phase 1 - Schema And Data Migration

- Add nested `portfolio` schema to the project collection.
- Add `resume.include` and `resume.priority` to project entries.
- Move certificates and awards into `globals/recognition.{locale}.yaml`.
- Keep legacy portfolio fields temporarily for compatibility.

### Phase 2 - View Model Refactor

- Replace page-local derivation with pure builders:
  - `getFeaturedCases(input): PortfolioCase[]`
  - `getPortfolioMetrics(cases): PortfolioMetric[]`
  - `getRecognitionEntries(input): RecognitionGroup[]`
  - `getResearchLinks(researchEntries, locale): ResearchLink[]`
  - `buildPortfolioViewModel(input): PortfolioViewModel`
- Use locale-aware links through `localizePath()` and `withBase()`.
- Throw build-time errors for missing featured slugs or unusable featured cases.

### Phase 3 - Portfolio Web UI

- Replace `PrintLayout` usage in Portfolio with `BaseLayout`.
- Render scroll sections:
  - Hero
  - Value Map
  - Outcome Metrics
  - Featured Cases
  - Process
  - Research Bridge
  - Recognition
  - Contact
- Keep Resume on `PrintLayout`.

### Phase 4 - Project Detail Enrichment

- Render portfolio evidence before Markdown body.
- Show architecture nodes, metric cards, artifacts, and problem/approach/outcome summaries.
- Keep Markdown as long-form narrative, not the only source of structured evidence.

### Phase 5 - QA And Cleanup

- Run `npm run build`.
- Verify `/portfolio/`, `/en/portfolio/`, `/resume/`, and representative project detail pages.
- Check first viewport content, section anchors, CTA links, visual overflow, and mobile wrapping.
- After content migration, remove deprecated legacy fields and old carousel-only components.

## 5. Technical Design

### Content Model

```ts
type PortfolioMetric = {
  label: string;
  value: string;
  context?: string;
};

type PortfolioArtifact = {
  label: string;
  href: string;
  kind: "repo" | "demo" | "paper" | "slides" | "writeup" | "dataset";
};

type ArchitectureNode = {
  id: string;
  label: string;
  role: string;
  detail?: string;
};

type ArchitectureLink = {
  from: string;
  to: string;
  label?: string;
};

type ProjectPortfolio = {
  thesis?: string;
  problem?: string;
  constraints?: string[];
  decisions?: string[];
  architecture?: {
    summary?: string;
    nodes?: ArchitectureNode[];
    links?: ArchitectureLink[];
  };
  metrics?: PortfolioMetric[];
  artifacts?: PortfolioArtifact[];
  reflection?: string;
};

type ProjectResume = {
  include: boolean;
  priority: number;
};
```

### Builder Contracts

| Function | Input | Output | Failure Rule |
| --- | --- | --- | --- |
| `getFeaturedCases` | localized projects, featured slugs, locale | normalized `PortfolioCase[]` | throw if slug is missing or no problem/outcome can be derived |
| `getPortfolioMetrics` | featured cases | flattened metrics with case context | return empty array when no metrics exist |
| `getRecognitionEntries` | recognition global, optional page fallback | grouped certificates and awards | return empty groups only if both sources are absent |
| `getResearchLinks` | localized research collection | sorted links | return empty array when no research exists |
| `buildPortfolioViewModel` | page, projects, research, globals, locale | complete render model | throw for missing required page identity |

### Locale And Fallback Rules

- Page-level copy comes from `src/content/pages/portfolio.{locale}.yaml`.
- Featured project content comes from matching localized project entries.
- Global recognition comes from `src/content/globals/recognition.{locale}.yaml`.
- Legacy fields are read only as fallback.
- Fallback text must never silently replace a missing featured slug.

## 6. Design System

### Value Principles

| Principle | Meaning |
| --- | --- |
| Evidence first | Every major claim should be near a project, metric, artifact, or research link. |
| Web-first narrative | Portfolio uses scroll, anchors, cards, and progressive disclosure instead of page-like print blocks. |
| Editorial restraint | Dense information should feel calm, legible, and deliberate. |
| Distinct surfaces | Resume is formal and compact; Portfolio is explanatory and dynamic. |

### Outcome Principles

| Outcome | UX Signal |
| --- | --- |
| Fast comprehension | First viewport states domain, value, evidence, and actions. |
| Trust | Metrics and artifacts appear close to claims. |
| Maintainability | Editors update YAML/Markdown fields, not component templates. |
| Scalability | New case studies can be added without redesigning the page. |

### Color Scales

All values are RGB.

| Token | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Neutral | `rgb(248,250,252)` | `rgb(241,245,249)` | `rgb(226,232,240)` | `rgb(203,213,225)` | `rgb(148,163,184)` | `rgb(100,116,139)` | `rgb(71,85,105)` | `rgb(51,65,85)` | `rgb(30,41,59)` | `rgb(15,23,42)` | `rgb(2,6,23)` |
| Paper | `rgb(255,253,248)` | `rgb(250,247,239)` | `rgb(244,241,234)` | `rgb(237,232,222)` | `rgb(215,207,191)` | `rgb(184,171,149)` | `rgb(139,125,101)` | `rgb(101,88,66)` | `rgb(74,63,46)` | `rgb(49,41,30)` | `rgb(24,20,15)` |
| Teal | `rgb(240,253,250)` | `rgb(204,251,241)` | `rgb(153,246,228)` | `rgb(94,234,212)` | `rgb(45,212,191)` | `rgb(20,184,166)` | `rgb(13,148,136)` | `rgb(15,118,110)` | `rgb(17,94,89)` | `rgb(19,78,74)` | `rgb(4,47,46)` |
| Blue | `rgb(239,246,255)` | `rgb(219,234,254)` | `rgb(191,219,254)` | `rgb(147,197,253)` | `rgb(96,165,250)` | `rgb(59,130,246)` | `rgb(37,99,235)` | `rgb(29,78,216)` | `rgb(30,64,175)` | `rgb(30,58,138)` | `rgb(23,37,84)` |
| Amber | `rgb(255,251,235)` | `rgb(254,243,199)` | `rgb(253,230,138)` | `rgb(252,211,77)` | `rgb(251,191,36)` | `rgb(245,158,11)` | `rgb(217,119,6)` | `rgb(180,83,9)` | `rgb(146,64,14)` | `rgb(120,53,15)` | `rgb(69,26,3)` |
| Rose | `rgb(255,241,242)` | `rgb(255,228,230)` | `rgb(254,205,211)` | `rgb(253,164,175)` | `rgb(251,113,133)` | `rgb(244,63,94)` | `rgb(225,29,72)` | `rgb(190,18,60)` | `rgb(159,18,57)` | `rgb(136,19,55)` | `rgb(76,5,25)` |

### Semantic Color Tokens

| Token | RGB Value | Usage |
| --- | --- | --- |
| `color-bg` | `rgb(244,241,234)` | page background |
| `color-surface` | `rgb(255,253,248)` | primary section/card surface |
| `color-surface-muted` | `rgb(250,247,239)` | quiet bands and secondary cards |
| `color-text` | `rgb(15,23,42)` | primary text |
| `color-text-muted` | `rgb(71,85,105)` | supporting text |
| `color-border` | `rgb(215,207,191)` | default border |
| `color-border-strong` | `rgb(184,171,149)` | emphasized dividers |
| `color-accent` | `rgb(15,118,110)` | primary accent |
| `color-accent-hover` | `rgb(17,94,89)` | accent hover |
| `color-link` | `rgb(15,118,110)` | links |
| `color-link-hover` | `rgb(17,94,89)` | link hover |
| `color-link-visited` | `rgb(29,78,216)` | visited links |
| `color-focus-ring` | `rgb(37,99,235)` | keyboard focus ring |
| `color-selected-bg` | `rgb(204,251,241)` | selected controls |
| `color-selected-text` | `rgb(19,78,74)` | selected control text |
| `color-disabled-bg` | `rgb(226,232,240)` | disabled control fill |
| `color-disabled-text` | `rgb(100,116,139)` | disabled text |
| `color-overlay` | `rgba(15,23,42,0.56)` | modal/scrim overlay |
| `shadow-card` | `0 12px 32px rgba(15,23,42,0.08)` | default elevation |
| `shadow-card-hover` | `0 18px 48px rgba(15,23,42,0.12)` | hover elevation |

### Icon System

| Icon | Purpose | Visual Description |
| --- | --- | --- |
| `ArrowRight` | primary forward navigation | right arrow with simple stroke, used in CTAs |
| `ExternalLink` | external artifact link | square corner with outbound arrow |
| `Github` | repository artifact | recognizable GitHub mark or code repository symbol |
| `FileText` | resume, writeup, paper | document sheet with folded corner |
| `Presentation` | slides artifact | rectangular board or slide frame |
| `Database` | dataset or structured data | stacked cylinder |
| `Network` | architecture/system graph | connected nodes |
| `LineChart` | metrics/outcome evidence | rising line chart |
| `Award` | awards and recognition | medal or ribbon |
| `Mail` | contact | envelope outline |
| `Search` | research/discovery | magnifying glass |
| `CheckCircle` | validated result | circle with check mark |

### Spacing Scale

One unit is `4px`. `spacing-100` is `4 units = 16px`.

| Token | Units | Pixels | Ratio To `spacing-100` |
| --- | ---: | ---: | ---: |
| `spacing-25` | 1 | 4px | 0.25 |
| `spacing-50` | 2 | 8px | 0.5 |
| `spacing-75` | 3 | 12px | 0.75 |
| `spacing-100` | 4 | 16px | 1 |
| `spacing-150` | 6 | 24px | 1.5 |
| `spacing-200` | 8 | 32px | 2 |
| `spacing-300` | 12 | 48px | 3 |
| `spacing-400` | 16 | 64px | 4 |
| `spacing-600` | 24 | 96px | 6 |
| `spacing-800` | 32 | 128px | 8 |

### Typography

| Style | Weight | Size | Line Height | Letter Spacing | Use |
| --- | ---: | ---: | ---: | ---: | --- |
| `display-xl` | 800 | 72px | 0.95 | 0 | desktop portfolio hero |
| `display-lg` | 800 | 56px | 1.0 | 0 | compact hero |
| `heading-lg` | 750 | 36px | 1.1 | 0 | section title |
| `heading-md` | 700 | 28px | 1.18 | 0 | card group title |
| `heading-sm` | 700 | 20px | 1.3 | 0 | card title |
| `body-lg` | 400 | 18px | 1.75 | 0 | hero lead |
| `body-md` | 400 | 16px | 1.65 | 0 | default body |
| `body-sm` | 400 | 14px | 1.55 | 0 | metadata and labels |
| `label` | 700 | 12px | 1.2 | 0.08em | uppercase eyebrow |
| `metric` | 800 | 32px | 1.0 | 0 | numeric outcome |

## 7. UI/UX Components

| Component | Type | Variants | Required Props | Optional Props | Usage Rules |
| --- | --- | --- | --- | --- | --- |
| `PortfolioHero` | section | `default`, `compact` | `eyebrow`, `title`, `lead`, `actions`, `evidenceCues` | `valueStatement` | First viewport only; must include descriptive CTAs and at least two evidence cues. |
| `PortfolioSectionNav` | navigation | `sticky`, `inline` | `items: { label, href }[]` | `ariaLabel` | Anchors must point to visible section IDs. |
| `ValueMap` | grid | `three-column`, `stacked` | `items: { title, body }[]` | `iconName` | Use for capability/value translation, not generic feature marketing. |
| `OutcomeMetric` | card | `featured`, `compact` | `label`, `value` | `context`, `sourceHref` | Metrics must stay near project or case context. |
| `FeaturedCaseCard` | card | `hero`, `compact`, `list` | `title`, `summary`, `href`, `problem`, `outcome` | `metrics`, `tags`, `artifactLinks`, `visualVariant` | Whole card must not contain nested interactive regions; artifact links stay in a separate list. |
| `CaseStudyPanel` | section | `default`, `dense` | `problem`, `decisions`, `outcome` | `constraints`, `architecture`, `artifacts`, `reflection` | Use inside project detail pages before Markdown body. |
| `ArchitectureDiagram` | evidence | `node-list`, `graph-preview` | `nodes`, `links`, `ariaLabel`, `fallbackText` | `caption`, `highlightedNodeIds` | Must provide text fallback when graph rendering is not available. |
| `EvidenceList` | list | `artifacts`, `research`, `recognition` | `items` | `emptyState`, `iconName` | Empty states should explain absence only in authoring/debug contexts, not public pages. |
| `RecognitionCard` | card | `certificate`, `award` | `title`, `issuer`, `year` | `description`, `href` | Recognition is supporting proof, never the main hero claim. |
| `ContactPanel` | section | `default` | `title`, `body`, `links` | `primaryAction` | Final conversion surface; use real contact links. |

### Component Prop Detail Example

```ts
type FeaturedCaseCardProps = {
  title: string;
  summary: string;
  href: string;
  problem: string;
  outcome: string;
  metrics?: Array<{ label: string; value: string; context?: string }>;
  tags?: string[];
  artifactLinks?: Array<{
    label: string;
    href: string;
    kind: "repo" | "demo" | "paper" | "slides" | "writeup" | "dataset";
  }>;
  visualVariant?: "none" | "architecture" | "metric";
  ariaLabel?: string;
};
```

Responsive rule: `hero` cards use two columns above `960px` and one column below. `compact` and `list` cards use one column below `720px`.

## 8. Design, Structure, Content, And Usability Plan

### Design Plan

- Use large but controlled hero typography with no negative letter spacing.
- Pair claims with evidence cues instead of decorative visuals.
- Keep cards at `8px` radius or less.
- Use restrained elevation and strong focus states.
- Avoid one-note palettes by mixing paper neutrals, teal accents, blue focus, amber highlights, and rose warning/error states.

### Structural Plan

- `/portfolio/`: web-first showcase.
- `/resume/`: print-first document.
- `/projects/`: index of project cards.
- `/projects/[slug]/`: evidence-enriched detail page.
- `src/content/globals/recognition.*.yaml`: shared recognition source.
- `src/features/portfolio/portfolio-data.ts`: pure view-model builders.

### Content Plan

- Every featured case should answer:
  - What problem was solved?
  - What constraints shaped the work?
  - What technical decisions mattered?
  - What outcome or metric proves value?
  - What artifact can a reviewer inspect?
  - What did the owner learn or refine?
- Resume bullets remain concise and role-oriented.
- Portfolio case copy can be wider, explanatory, and web-native.

### Usability Plan

- Sticky section navigation supports scanning.
- CTA labels must be literal: "View featured cases", "Open resume", "View all projects".
- Long evidence text must wrap without horizontal overflow.
- Artifact links must show external-link affordance.
- Keyboard users must see focus rings on all links and controls.

## 9. Text-Based Preview

```txt
[Navigation]
Kim Donghyun | Home | Projects | Research | Resume | Portfolio | About | Contact

[Sticky Portfolio Nav]
Value | Outcomes | Cases | Process | Research Bridge | Recognition | Contact

[Hero]
APPLIED AI PORTFOLIO
I connect real data and research into working AI systems.

Medical AI, conversational AI, and ML observability work shown through
problem framing, modeling, evaluation, implementation, and delivery.

[CTA] View featured cases
[CTA] Open resume

[Evidence Cues]
- Medical AI research: final model reached 0.9245 accuracy with strong rare-class recall.
- ML platform project: local experiment observability, reports, and recovery workflows.
- Graph engine project: Arrow-backed graph structures and O(degree) neighbor traversal.

[Value Map]
1. From ambiguous domain problem to modelable task.
2. From experiment output to inspectable system behavior.
3. From research artifact to reusable product-facing evidence.

[Outcomes]
0.9245 accuracy | Rare-class recall | Local ML observability | Graph-native traversal

[Featured Case]
EMR Nursing Surveillance
Problem: clinical text classification without post-event documentation.
Decision: compare sparse and dense representations under imbalanced labels.
Outcome: high practical classification performance with interpretable evidence.
Artifacts: paper, code, report.

[Process]
Frame -> Model -> Evaluate -> Package -> Explain

[Research Bridge]
Research entries that support the portfolio's applied AI direction.

[Recognition]
Certificates and awards as supporting proof.

[Contact]
For applied AI, ML systems, or research collaboration:
Email | GitHub | LinkedIn | Google Scholar
```

## 10. Measurable Acceptance Criteria

- `npm run build` completes successfully.
- `/portfolio/` and `/en/portfolio/` render with `BaseLayout`.
- `/resume/` renders with `PrintLayout`.
- Portfolio first viewport contains:
  - H1
  - domain/value lead
  - at least two evidence cues
  - at least one CTA link
- Portfolio has at least three featured cases.
- Recognition appears on both Portfolio and Resume from global recognition data.
- Project detail pages render portfolio evidence when nested portfolio fields exist.
- Browser validation shows no horizontal overflow in the primary desktop viewport.
- Missing featured slugs fail at build time instead of being ignored.

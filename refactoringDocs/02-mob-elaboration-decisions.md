# Mob Elaboration Decisions

## Purpose

This document records the first decision set produced from the Mob Elaboration session for the portfolio refactoring effort.

The session assumed an AI-DLC context where AI-generated questions, proposals, and concerns are actively challenged by the whole team before implementation. Each role below resolves the concerns it raised and turns them into concrete product, content, UX, and engineering decisions.

The goal is to create a stable decision baseline before changing the portfolio content model or UI.

## Shared Decision Baseline

The portfolio should be treated as a company-submission artifact. It should not read primarily as a research archive, a personal project gallery, or a domain-specific medical AI portfolio.

The top-level professional identity is:

> AI Systems Engineer

This identity is supported by three equal role themes:

1. Data Specialist, with Graph as a Core Strength
2. AI-DLC and Operational MLOps Engineer
3. Applied NLP and LLM Research Engineer

Medical, finance, recommendation, and other domain experiences should remain visible, but they should function as supporting evidence rather than top-level positioning.

## PM Decisions

- The default positioning will be **AI Systems Engineer**.
- The site will still expose three equal supporting themes: data systems, AI-DLC/MLOps, and NLP/LLM research.
- The hero should lead with engineering identity rather than research identity.
- AI-DLC will be used as a differentiating framework, but its first appearance must define it as **AI-Driven Development Life Cycle**.
- The website will be exploratory and navigational.
- The printable portfolio will be a detailed company-submission packet.
- The printable portfolio can be long, but the first page must work as a strong executive summary for first-pass reviewers.

## Recruiter Decisions

- The first viewport and the first printable page must immediately show which job families the owner can be reviewed for.
- The three role themes should be exposed early and with equal visual weight.
- Role labels should stay connected to recognizable company role signals.
- Medical, finance, and recommendation keywords should not dominate the first viewport.
- Each role card should include a **Business Signal**, not only technical keywords.
- The printable portfolio's first page should include:
  - role map
  - core strengths
  - selected evidence
  - contact or web portfolio path

Example business signals:

- Converts messy data into model-ready and system-ready structures.
- Makes AI experiments and operational workflows observable and repeatable.
- Connects NLP/LLM research experience to evaluation and system-level decisions.

## Technical Interviewer Decisions

- Every project or evidence item should have an **Evidence Level**.
- Supported evidence levels are:
  - Published
  - Implemented
  - Prototype
  - Study
  - In Progress
- Projects should not be forced into a single role theme.
- Each project should support:
  - primary theme
  - secondary themes
  - evidence level
  - implementation or artifact signal
- Project writeups must include design decisions, not only summaries of what was built.
- New projects should not become flagship evidence until their implementation state is confirmed.
- New or less mature projects may be introduced as **Emerging Evidence** or **In Progress Evidence**.
- Public GitHub links should be used only after checking repository quality, disclosure safety, and implementation clarity.

## UX/UI Decisions

- The top-level page flow will be:
  1. Hero
  2. Three Role Map
  3. AI-DLC Operating Model
  4. Evidence Library
  5. Case Studies
  6. Research Bridge
  7. Resume and Contact Path
- The three role cards must use the same visual weight.
- Evidence Library should be organized by theme rather than presented as a plain project list.
- The default Evidence Library experience should be readable as sections before adding heavy filter UI.
- The printable portfolio first page should include:
  - high-level identity
  - three role summaries
  - core technology and workflow signals
  - three to five selected evidence items
  - contact and web portfolio route
- PDF pages should support detailed review while keeping page one useful for fast screening.

## Content Strategy Decisions

- The Data role will use the direction **Data Specialist, with Graph as a Core Strength**.
- Avoid **Graph-focused Data Specialist** because it can imply graph-only work.
- The Korean direction should be:
  - 그래프를 핵심 강점으로 가진 데이터 스페셜리스트
- The MLOps role will use the direction **AI-DLC and Operational MLOps Engineer**.
- The Korean direction should be:
  - AI-DLC 기반 운영형 MLOps 엔지니어
- The NLP/LLM role will use the direction **Applied NLP and LLM Research Engineer**.
- The Korean direction should be:
  - 응용 NLP 및 LLM 연구 엔지니어
- Domain labels such as medical, finance, and recommendation should be handled in project details, research bridge sections, and application tags.
- The role copy should not overstate unsupported claims.
- Each role should have a distinct content responsibility:
  - Data role: data surfaces, pipelines, graph systems, data modeling.
  - MLOps role: AI-DLC, observability, CI/CD, continuous training, repeatability.
  - NLP/LLM role: modeling, evaluation, alignment awareness, domain transfer, research-to-system reasoning.

## Data and Graph SME Decisions

- Graph is a core strength within the data theme, not the only data mode.
- The Data theme should preserve breadth across structured data, text data, image data, graph data, and hybrid data surfaces.
- Graph Ecosystem will be defined as including:
  - graph data modeling
  - graph databases
  - graph analytics engines
  - knowledge graphs
  - graph-based recommendation
  - graph pipelines
  - graph-native storage, query, and execution concepts
- CaracalDB should be treated as a **Graph/Data Infrastructure Evidence** candidate until its content and maturity are reviewed.
- Graph-related evidence can be classified into subtypes:
  - Graph Database
  - Graph Engine
  - Knowledge Graph
  - Graph Recommendation
  - Graph Pipeline

## MLOps and Platform Engineering Decisions

- AI-DLC should receive a dedicated operating model section.
- AI-DLC will be defined through the following stages:
  1. Data
  2. Experiment
  3. Training
  4. Evaluation
  5. Deployment
  6. Inference
  7. Observability
  8. Feedback / Recovery
- Observability should be separated into:
  - Experiment Observability
  - Model Observability
  - System Observability
- CI/CD and continuous training should only be emphasized where project evidence supports the claim.
- Avoid using "full pipeline" as a blanket claim.
- Instead, each project should show which AI-DLC stages it actually covers.
- Contexta-style work can serve as operational MLOps evidence, but it should be reviewed alongside new evidence before becoming the flagship example.

## NLP and LLM Research Decisions

- NLP/LLM will remain one of the three equal themes, not the dominant top-level identity.
- Do not use **Domain NLP Researcher** as the role label.
- Medical, finance, and recommendation work should be framed as application contexts.
- RLAIF and DPO should not be overemphasized in the hero or primary role cards.
- RLAIF, DPO, and related LLM alignment work should appear in the Research Bridge or detailed evidence sections.
- The NLP/LLM theme should communicate:
  - research-backed modeling
  - evaluation design
  - alignment awareness
  - domain transfer
  - system-level interpretation
- Publications should connect to projects or capability claims instead of appearing only as a standalone list.

## Legal, Security, and Policy Decisions

- Every project should receive a **Disclosure Level**.
- Supported disclosure levels are:
  - Public
  - Public Summary Only
  - Sanitized
  - Private / Mention Only
- Medical and finance-related projects should default to summary-oriented descriptions unless disclosure is explicitly safe.
- Data sources, institution names, and sensitive implementation details should be reviewed before publication.
- Performance metrics should be used only when their source is clear.
- Publication metrics and personal project metrics should be distinguished.
- Public GitHub projects should be checked for:
  - sensitive data
  - secrets or tokens
  - license issues
  - README quality
  - implementation maturity
- AI-DLC must be consistently defined as **AI-Driven Development Life Cycle**.

## QA and Verification Decisions

- The content schema should be strengthened before major UI refactoring.
- Each project should include at least:
  - primaryTheme
  - secondaryThemes
  - dataSurfaces
  - workflowStages
  - evidenceLevel
  - businessSignal
  - disclosureLevel
- Build-time validation should detect missing required metadata.
- Korean and English pages should use the same content model to avoid strategic drift.
- Printable portfolio layout should be treated as a separate verification target.
- If filters or grouped evidence views are added, QA should verify that no evidence item disappears from the intended theme view.

## Final Team Decisions

1. The top-level identity is **AI Systems Engineer**.
2. The three equal role themes are:
   - Data Specialist, with Graph as a Core Strength
   - AI-DLC and Operational MLOps Engineer
   - Applied NLP and LLM Research Engineer
3. Domain areas such as medical, finance, and recommendation remain supporting evidence, not top-level identity.
4. Projects will be managed through an Evidence Library structure rather than a fixed flagship-only list.
5. New projects require Evidence Level and Disclosure Level review before strong portfolio placement.
6. The printable portfolio will be detailed, but page one must be an executive summary.
7. The content schema should be expanded before UI and document refactoring begins.

## Next Recommended Artifact

The next document should define the content model and metadata schema proposal.

Recommended title:

> 03 Content Model and Evidence Metadata Schema

That document should specify fields, allowed values, validation rules, localization behavior, and migration strategy for existing projects.

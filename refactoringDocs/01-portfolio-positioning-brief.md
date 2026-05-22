# Portfolio Positioning Brief

## Purpose

This document captures the first strategic brief for refactoring the portfolio site and printable portfolio document. The project should be treated as a company-submission portfolio, not as a general research archive or a personal project gallery.

The portfolio should present a clear professional identity across the whole site: an AI systems-oriented engineer who connects data systems, AI-driven development workflows, and NLP/LLM research into reliable, reviewable, and operational AI work.

The immediate goal is not to lock in specific case studies. The first goal is to define the themes, content model, UX direction, and review logic that future project evidence can fit into, including newer work such as CaracalDB.

## Positioning Principle

The portfolio should avoid making the owner look like a domain-specific medical, finance, or recommendation researcher. Those domains can appear as evidence and application contexts, but they should not define the top-level identity.

The top-level identity should be broader and more enterprise-relevant:

> An AI engineer who structures diverse data, builds AI-DLC workflows, and applies NLP/LLM research to reliable AI systems.

For Korean pages, role labels and copy should be written naturally in Korean. For English pages, role labels and copy should be written naturally in English. The same strategic structure should be preserved across both locales.

## Core Themes

### 1. Data Specialist, with Graph as a Core Strength

This theme should communicate that the owner can work with structured data, text data, image data, graph data, and hybrid data surfaces. Graph should be presented as a major professional strength, not as the only data mode.

Avoid labels that imply all work is graph-only, such as "Graph-focused Data Specialist" if it reads too narrowly.

Better English directions:

- Data Specialist, with Graph as a Core Strength
- Data Systems Specialist, Graph as Core Strength
- Multimodal Data Specialist with Graph Systems Depth

Better Korean direction:

- 그래프를 핵심 강점으로 가진 데이터 스페셜리스트
- 정형, 텍스트, 이미지, 그래프 데이터를 다루며 그래프 생태계를 주요 전문축으로 확장하는 데이터 스페셜리스트

This theme can include graph databases, graph analytics engines, knowledge graphs, graph-based recommendation, graph data modeling, graph pipelines, and graph ecosystem tooling. New projects such as CaracalDB can later be evaluated under this theme if they provide strong evidence for graph infrastructure or graph data systems.

### 2. AI-DLC and Operational MLOps Engineer

AI-DLC means AI-Driven Development Life Cycle. Because this abbreviation may not be familiar to every reviewer, the portfolio should define it when it first appears.

This theme should cover the full operational pipeline around AI systems:

- experiment tracking
- training workflows
- inference workflows
- observability
- CI/CD
- continuous training
- artifact management
- reproducibility
- recovery workflows
- cloud and DevOps foundations

The key message is not simply "I can deploy models." The stronger message is:

> I can design the workflow around AI work so that training, inference, evaluation, observability, and recovery are inspectable and repeatable.

### 3. Applied NLP and LLM Research Engineer

This theme should avoid positioning the owner primarily as a domain researcher. Medical, finance, recommendation, and other domains should appear as application evidence, not as the main identity.

The stronger enterprise-facing identity is:

> I use NLP and LLM research experience to build, evaluate, and reason about AI systems.

This theme may include:

- domain NLP
- Korean NLP
- medical text modeling
- financial or recommendation-related text understanding
- RLAIF
- DPO
- LLM alignment methods
- evaluation design
- multimodal research participation
- research-to-system translation

The portfolio should be careful with the strength of claims around RLAIF, DPO, and multimodal work. These should be tied to actual publications, experiments, implementations, or clearly labeled study/research experience.

## Recommended Narrative

The site should be structured around three equal professional themes, but with one higher-level identity that ties them together.

Recommended narrative shape:

1. The owner handles diverse data surfaces.
2. Graph is the strongest data-system specialization.
3. AI-DLC and MLOps make the work repeatable, observable, and operational.
4. NLP/LLM research provides modeling, evaluation, and alignment depth.
5. Projects and publications serve as evidence for these themes.

This helps prevent the portfolio from reading as a scattered list of projects. It also avoids making the owner look like only a medical AI researcher, only an NLP researcher, or only an MLOps engineer.

## Functional Requirements

- The portfolio site and printable portfolio document must be reorganized around three equal professional themes.
- The three themes must be visible early, especially in the printable portfolio's first page.
- The Data Specialist theme must not imply graph-only work. It must show breadth across structured, text, image, and graph data while presenting graph as the core strength.
- The MLOps theme must explicitly connect AI-DLC, observability, CI/CD, continuous training, experiment tracking, inference operations, and reproducibility.
- The NLP/LLM theme must position domain work as supporting evidence, not the top-level identity.
- Projects should support multiple classifications, such as primary theme, secondary theme, evidence type, data surface, and workflow stage.
- The content model should support current and future projects, including new repositories such as CaracalDB.
- The site should allow project evidence to be grouped by theme, not only by chronological order or a fixed "top three" list.
- The printable portfolio should work as a detailed company-submission packet, while the resume should remain concise and format-driven.
- Korean and English content should share the same strategy while using natural role names and copy in each language.

## Non-Functional Requirements

- The portfolio must be readable by company reviewers under time pressure.
- The first viewport and first printable page must immediately communicate professional fit.
- The three themes must feel balanced in visual hierarchy and content weight.
- The portfolio should feel like an engineering and AI systems portfolio, not a decorative personal website or a research archive.
- Claims must be evidence-backed and should not exceed what the projects, publications, code, or experience can support.
- The information architecture must be extensible, so adding new projects does not require rewriting the whole narrative.
- The print/PDF layout must preserve readability, hierarchy, and section flow.
- Technical language is appropriate, but unfamiliar terms such as AI-DLC should be defined.
- Domain labels such as medical, finance, and recommendation should appear as application contexts rather than primary brand categories.

## User Roles

### Portfolio Owner

Needs a coherent professional identity that can connect broad experience without appearing unfocused. The owner needs the portfolio to support company submission, technical review, and interview follow-up.

### Corporate Recruiter

Needs to understand role fit quickly. This user will scan headline, role map, core skills, evidence labels, and selected projects.

### Technical Interviewer

Needs to inspect the depth of project decisions, system design, data handling, evaluation, and implementation choices.

### AI Platform or MLOps Team

Needs evidence of AI-DLC thinking, observability, experiment tracking, CI/CD, continuous training, deployment awareness, and operational reliability.

### Data or Graph Systems Team

Needs evidence of structured and unstructured data handling, graph data modeling, graph engine or database work, graph ecosystem knowledge, and data pipeline design.

### NLP or LLM Team

Needs evidence of NLP modeling, LLM alignment understanding, evaluation design, and research-to-system translation.

## Edge Cases and Risks

- If the Data Specialist theme is phrased too narrowly, reviewers may think the owner only works on graph data.
- If the Data Specialist theme is phrased too broadly, reviewers may think the owner is shallow across many data types.
- If NLP/LLM is overemphasized, the portfolio may read as a domain research portfolio instead of an enterprise AI systems portfolio.
- If MLOps language is too abstract, it may sound like process vocabulary without engineering proof.
- If new projects are promoted too early, they may feel unverified unless their implementation state and evidence are clear.
- If every project is forced into one of three roles, cross-cutting work may be misrepresented. Projects should support primary and secondary theme labels.
- If the printable document becomes too detailed, the first page must compensate with a strong executive summary.
- If Korean and English pages drift apart, the portfolio may send inconsistent professional signals.

## Policy and Accuracy Checks

- Confirm whether new repositories such as CaracalDB are public, stable enough to cite, and free of sensitive implementation or commit history issues.
- Confirm the actual feature scope and implementation maturity before using a new project as major evidence.
- Confirm that medical, finance, and recommendation-related work does not expose private data, institutional details, confidential research material, or restricted artifacts.
- Confirm the level of RLAIF, DPO, and multimodal experience before making strong claims.
- Confirm which cloud, DevOps, CI/CD, and continuous training details can be disclosed.
- Separate publication metrics, project metrics, qualitative outcomes, and study experience.
- Define AI-DLC consistently as AI-Driven Development Life Cycle.

## Suggested Content Model

Each project or evidence item should be described through a consistent structure:

- Theme
- Primary role signal
- Secondary role signals
- Data surface
- Workflow stage
- System decision
- Evaluation or observability evidence
- Artifact type
- Business signal

Example values:

- Theme: Data Systems and Graph Intelligence
- Primary role signal: Data Specialist
- Secondary role signals: Systems Engineering, MLOps
- Data surface: structured data, graph data, text data, image data
- Workflow stage: ingestion, preprocessing, modeling, evaluation, deployment, observability
- Artifact type: repository, paper, demo, architecture diagram, benchmark, report
- Business signal: can build reviewable AI infrastructure, can structure messy data, can connect research with operations

## Suggested UX Direction

The portfolio should use a role-first layout:

1. Hero with a single high-level identity.
2. Three equal role cards.
3. AI-DLC operating model.
4. Evidence library grouped by theme.
5. Detailed case studies.
6. Research and publication bridge.
7. Resume/contact path.

The printable portfolio can be longer and more detailed:

1. Cover and positioning summary.
2. Three-role capability map.
3. AI-DLC operating model.
4. Evidence sections by theme.
5. Detailed case studies.
6. Research and publication bridge.
7. Experience, recognition, and contact.

The resume should remain concise and conventional, using the portfolio as the deeper review artifact.

## Open Questions

- Which company role family should be prioritized when the portfolio needs to be tailored: AI platform/MLOps, data/graph systems, or NLP/LLM engineering?
- Which new projects are mature enough to be included as primary evidence?
- Should CaracalDB be introduced as a major project, a developing project, or a supporting evidence item?
- Which RLAIF, DPO, and multimodal experiences can be described as publication-backed, implementation-backed, study-backed, or participation-backed?
- How much implementation detail should the printable portfolio include before it becomes too dense for company submission?

# Major Use Cases

## Purpose

This document summarizes the major use cases expected for the refactored portfolio site.

The site is designed as a company-submission portfolio. Its primary job is to help different reviewers understand the owner's professional fit, inspect evidence, and move to the correct follow-up artifact.

## Use Case 1: Recruiter First-Pass Review

### User

Corporate recruiter or first-pass reviewer.

### User Goal

Quickly decide which role family the candidate should be reviewed for.

### Flow

1. User enters Home or Portfolio.
2. User sees the top-level identity: AI Systems Engineer.
3. User scans the three role themes.
4. User scans three to five selected evidence items.
5. User opens either Resume or Printable Portfolio.

### Success Criteria

- User understands the candidate's positioning within 30 seconds.
- User can quickly access resume and submission portfolio.
- User does not mistake the candidate for a narrow domain-only researcher.

## Use Case 2: Technical Interviewer Deep Review

### User

Technical interviewer, engineering lead, or senior reviewer.

### User Goal

Inspect implementation depth, design judgment, and technical contribution.

### Flow

1. User enters Portfolio or Projects.
2. User selects an evidence theme.
3. User opens Project Detail.
4. User reviews Problem, Data Surface, System Decisions, AI-DLC Coverage, Metrics, and Artifacts.
5. User opens GitHub, paper, demo, or other artifacts if available.

### Success Criteria

- User understands the owner's contribution and design decisions.
- User can access evidence such as code, paper, architecture, or metrics.
- User can distinguish between implemented, prototype, study, and published evidence.

## Use Case 3: AI Platform / MLOps Role Review

### User

AI platform engineer, MLOps interviewer, or platform team reviewer.

### User Goal

Evaluate AI-DLC, observability, CI/CD, continuous training, experiment tracking, and operational AI experience.

### Flow

1. User enters Portfolio.
2. User reviews the AI-DLC Operating Model.
3. User opens MLOps or AI-DLC evidence.
4. User reviews observability, workflow, and pipeline coverage.
5. User checks Resume for related stack and experience.

### Success Criteria

- User understands which AI-DLC stages are actually covered.
- User sees concrete evidence for observability and repeatable AI workflows.
- User does not have to rely on vague "full pipeline" claims.

## Use Case 4: Data / Graph Systems Role Review

### User

Data engineering reviewer, graph systems reviewer, or graph infrastructure team.

### User Goal

Evaluate broad data handling ability and graph ecosystem depth.

### Flow

1. User enters Portfolio or Projects.
2. User opens Data / Graph Evidence.
3. User reviews graph database, graph engine, knowledge graph, graph pipeline, or graph recommendation items.
4. User opens a system-oriented project such as CaracalDB or Lynxes if available.
5. User reviews data modeling, query, storage, execution, or pipeline decisions.

### Success Criteria

- User understands that graph is a core strength, not the only data mode.
- User sees evidence across structured, text, image, graph, or hybrid data surfaces.
- User can inspect graph-related implementation or design depth.

## Use Case 5: NLP / LLM Role Review

### User

NLP engineer, LLM engineer, research engineer, or applied AI reviewer.

### User Goal

Evaluate NLP/LLM research experience, evaluation design, alignment awareness, and domain transfer ability.

### Flow

1. User enters Portfolio.
2. User opens Applied NLP and LLM Research section.
3. User reviews Research Bridge.
4. User opens related research or project evidence.
5. User checks RLAIF, DPO, evaluation, or domain application evidence where supported.

### Success Criteria

- User understands the NLP/LLM theme as system-relevant research experience.
- Medical, finance, and recommendation appear as application contexts.
- Research links support capability claims instead of appearing as a detached publication list.

## Use Case 6: Printable Portfolio / PDF Submission

### User

Portfolio owner, recruiter, or hiring process coordinator.

### User Goal

Save or review a company-submission portfolio document.

### Flow

1. User enters Portfolio.
2. User selects Open Submission Portfolio or Print Portfolio.
3. User enters Printable Portfolio.
4. User reviews the first-page executive summary.
5. User saves as PDF or prints through the browser.

### Success Criteria

- Page one clearly shows identity, three role themes, and selected evidence.
- The PDF layout does not break.
- Detailed pages support deeper technical review.

## Use Case 7: Resume Quick Review

### User

Recruiter, HR reviewer, hiring manager, or interviewer.

### User Goal

Quickly review official career, skill, project, and research information.

### Flow

1. User enters Resume from Home, Portfolio, or direct link.
2. User reviews Profile Summary.
3. User reviews Core Competencies.
4. User scans Experience, Selected Projects, Research, Education, and Recognition.
5. User opens Portfolio for deeper evidence if needed.

### Success Criteria

- User can quickly understand official qualifications.
- Resume stays concise and conventional.
- Portfolio provides the deeper evidence path.

## Use Case 8: Research Evidence Review

### User

Research reviewer, technical interviewer, NLP reviewer, or academic-adjacent reviewer.

### User Goal

Understand how research supports portfolio capabilities.

### Flow

1. User enters Research Index.
2. User filters or scans research themes.
3. User opens Research Detail.
4. User reviews Abstract, Contribution, and Why It Matters.
5. User checks linked projects or evidence.
6. User opens paper, DOI, slides, or code if public.

### Success Criteria

- Research appears as support for modeling, evaluation, and system decisions.
- Publications connect to projects or capability claims.
- User can access public research artifacts when available.

## Use Case 9: Disclosure-Limited Project Review

### User

Recruiter, technical interviewer, or reviewer handling sensitive domain work.

### User Goal

Understand a sensitive or non-public project without exposing restricted details.

### Flow

1. User finds a Summary Only or disclosure-limited project.
2. User sees Disclosure Level badge.
3. User reads public-safe problem, decision, and outcome summary.
4. User sees artifact limitations or contact guidance.

### Success Criteria

- User understands why full details are not available.
- Sensitive data, institution details, and private artifacts are not exposed.
- The project still communicates a useful professional signal.

## Use Case 10: GitHub-Based Implementation Review

### User

Technical interviewer, engineering lead, or implementation reviewer.

### User Goal

Inspect public code and verify implementation credibility.

### Flow

1. User opens a Project Detail page.
2. User selects GitHub or repository artifact.
3. User reviews README, code structure, tests, and implementation state.
4. User returns to the portfolio to compare claims with evidence.

### Success Criteria

- Public repository content matches the project claims.
- Evidence Level does not overstate implementation maturity.
- User can inspect meaningful implementation details.

## Use Case 11: Language Switching

### User

Korean or English reviewer.

### User Goal

Switch language while preserving the same professional positioning and page context.

### Flow

1. User opens any major page.
2. User selects KO or EN.
3. User lands on the corresponding localized page.
4. User sees the same role structure and evidence strategy in the selected language.

### Success Criteria

- Strategic positioning remains consistent across languages.
- Role names are natural in the selected language.
- Missing localized content is clearly handled.

## Use Case 12: Contact and Follow-Up

### User

Recruiter, hiring manager, technical interviewer, or external reviewer.

### User Goal

Choose the correct follow-up channel.

### Flow

1. User enters Contact.
2. User reviews preferred review path.
3. User selects Email, GitHub, LinkedIn, Resume, or Portfolio PDF.

### Success Criteria

- User understands the intended review path.
- Resume supports official screening.
- Portfolio and GitHub support technical review.
- Contact links are configured and working.

## Priority Use Cases

The highest-priority flows for implementation quality are:

1. Recruiter First-Pass Review
2. Technical Interviewer Deep Review
3. Printable Portfolio / PDF Submission
4. AI Platform / MLOps Role Review
5. Data / Graph Systems Role Review
6. Resume Quick Review

These flows should be tested and reviewed first because they most directly support the company-submission purpose of the site.

## Cross-Use-Case Principles

- The site should help reviewers identify the candidate's role fit quickly.
- Role themes should remain balanced.
- Evidence should be safe, classified, and reviewable.
- Domain work should support the narrative without becoming the primary identity.
- The resume should remain concise.
- The portfolio should provide deeper evidence.
- The printable portfolio should be submission-ready.
- GitHub and artifact links should not overpromise implementation maturity.

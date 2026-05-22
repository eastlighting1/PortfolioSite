# Low-Fidelity Wireframes

## Purpose

This document defines low-fidelity wireframes for the major screens of the portfolio site.

The goal is not visual design. The goal is to define user intent, information hierarchy, major UI elements, major components, and error or empty states before implementation begins.

These wireframes follow the validated direction:

- The site is a company-submission portfolio.
- The top-level identity is AI Systems Engineer.
- The three equal themes are:
  - Data Specialist, with Graph as a Core Strength
  - AI-DLC and Operational MLOps Engineer
  - Applied NLP and LLM Research Engineer
- Domain areas such as medical, finance, and recommendation remain supporting evidence.
- Web pages are exploratory.
- Print portfolio pages are submission-oriented.
- Resume pages are concise and format-driven.

## Common Layout

```text
------------------------------------------------
Global Header
Name / Logo | Home | Portfolio | Projects | Research | Resume | Contact | KO/EN
------------------------------------------------

Main Content

------------------------------------------------
Global Footer
Contact | GitHub | LinkedIn | Email | Optional last updated note
------------------------------------------------
```

## Common Error and Empty States

- Required portfolio content is not available.
- This evidence is available as a public summary only.
- Artifact link is not currently public.
- This page is not available in the selected language yet.
- No evidence matches the selected filters.
- Project classification is incomplete.

## Screen 1: Home

### User Purpose

The user should quickly understand what kind of AI engineer the portfolio represents and move toward the portfolio, projects, or resume.

### Wireframe

```text
------------------------------------------------
Hero
AI Systems Engineer
[Short positioning sentence]

[Role Chip] Data Specialist
[Role Chip] AI-DLC / MLOps
[Role Chip] NLP / LLM

[View Portfolio] [Open Resume]
------------------------------------------------
Three Role Preview
[Data + Graph] [AI-DLC MLOps] [Applied NLP/LLM]
------------------------------------------------
AI-DLC Snapshot
Data -> Experiment -> Training -> Evaluation
-> Deployment -> Inference -> Observability
------------------------------------------------
Selected Evidence
[Evidence Card] [Evidence Card] [Evidence Card]
------------------------------------------------
Research / Resume / Contact CTA
------------------------------------------------
```

### Major UI Elements

- Hero headline
- Positioning sentence
- Role chips
- Three role preview cards
- AI-DLC mini flow
- Selected evidence cards
- Portfolio and resume calls to action

### Major Components

- HeroBlock
- RoleMapPreview
- AIDLCMiniFlow
- FeaturedEvidence
- DocumentCTA

### Error and Empty States

- Selected evidence is being reviewed.
- Role summary is incomplete.
- Portfolio call-to-action is unavailable.

## Screen 2: Portfolio Web

### User Purpose

The user should explore the full professional positioning, understand the three role themes, and inspect evidence connected to those themes.

### Wireframe

```text
------------------------------------------------
Portfolio Hero
AI Systems Engineer
[Company-submission positioning statement]

[Download / Print Portfolio] [Open Resume]
------------------------------------------------
Section Nav
Role Map | AI-DLC | Evidence | Case Studies | Research
------------------------------------------------
Three Role Map
[Data Specialist, Graph as Core Strength]
- Data surfaces
- Graph ecosystem
- Business signal

[AI-DLC and Operational MLOps]
- Observability
- CI/CD/CT
- Business signal

[Applied NLP and LLM Research]
- Evaluation
- Alignment
- Business signal
------------------------------------------------
AI-DLC Operating Model
[Data] [Experiment] [Training] [Evaluation]
[Deployment] [Inference] [Observability] [Recovery]
------------------------------------------------
Evidence Library
Theme Sections:
[Data / Graph]
  [Evidence Card]
[AI-DLC / MLOps]
  [Evidence Card]
[NLP / LLM]
  [Evidence Card]
------------------------------------------------
Detailed Case Studies
[Case Study Card]
Problem | Decision | Evidence | Outcome
------------------------------------------------
Research Bridge
[Research Card] -> linked evidence
------------------------------------------------
Contact / Resume CTA
------------------------------------------------
```

### Major UI Elements

- Portfolio hero
- Section navigation
- Three role map
- AI-DLC operating model
- Evidence library grouped by theme
- Case study stack
- Research bridge
- Contact and resume call to action

### Major Components

- PortfolioHero
- PortfolioSectionNav
- RoleMap
- AIDLCOperatingModel
- EvidenceLibrary
- EvidenceCard
- CaseStudyCard
- ResearchBridge
- ContactPanel

### Error and Empty States

- This evidence item is missing required classification.
- Public summary only. Full details are not disclosed.
- No evidence matches this theme yet.
- AI-DLC stage metadata is incomplete.

## Screen 3: Printable Portfolio / PDF

### User Purpose

The user should be able to save or print a company-submission document. First-pass reviewers should understand the positioning from page one, while technical reviewers can continue into detailed evidence.

### Wireframe

```text
Page 1: Executive Summary
------------------------------------------------
AI Systems Engineer
[One paragraph positioning]

Three Role Summary
[Data + Graph] [AI-DLC MLOps] [NLP / LLM]

Selected Evidence
- Evidence 1 / level / theme
- Evidence 2 / level / theme
- Evidence 3 / level / theme

Contact / Web Portfolio / Resume
------------------------------------------------

Page 2: Capability Map
------------------------------------------------
Role -> Skills -> Business Signal -> Evidence
------------------------------------------------

Page 3: AI-DLC Operating Model
------------------------------------------------
Data -> Experiment -> Training -> Evaluation
-> Deployment -> Inference -> Observability -> Recovery
------------------------------------------------

Page 4+: Case Study Pages
------------------------------------------------
Title
Primary Theme / Secondary Themes / Evidence Level

Problem
Decision
Architecture / Workflow
Outcome
Artifacts
Disclosure Note
------------------------------------------------

Final Page
Research Bridge / Recognition / Contact
------------------------------------------------
```

### Major UI Elements

- Executive summary
- Three role summary
- Selected evidence list
- Capability map
- AI-DLC operating model
- Case study sheets
- Disclosure notes
- Final contact block

### Major Components

- PrintToolbar
- PortfolioPrintCover
- PrintRoleMap
- PrintAIDLCModel
- PrintCaseStudySection
- PrintResearchBridge
- PrintContactBlock

### Error and Empty States

- Print summary data is incomplete.
- Disclosure level is required before print export.
- Artifact available upon request.
- Evidence level is missing for this printable item.

## Screen 4: Projects Index

### User Purpose

The user should browse all projects as evidence grouped by theme, maturity, and role signal.

### Wireframe

```text
------------------------------------------------
Projects
[Short intro: evidence-oriented project library]
------------------------------------------------
Filters / Segments
[All] [Data + Graph] [AI-DLC] [NLP / LLM]
[Published] [Implemented] [Prototype] [Study]
------------------------------------------------
Project Grid
[Project Card]
Title
Primary Theme
Secondary Themes
Evidence Level
Data Surfaces
Business Signal
[Read Case]
------------------------------------------------
```

### Major UI Elements

- Intro
- Theme filters
- Evidence level filters
- Project cards
- Evidence labels
- Disclosure labels

### Major Components

- ProjectGrid
- ProjectCard
- ThemeFilter
- EvidenceLevelBadge
- DisclosureBadge

### Error and Empty States

- No projects match the selected filters.
- Project classification is incomplete.
- This project is listed as summary-only.

## Screen 5: Project Detail

### User Purpose

The user should inspect the depth of a project, including the problem, data surface, design decisions, workflow coverage, outcomes, and artifacts.

### Wireframe

```text
------------------------------------------------
Project Hero
Title
Primary Theme / Secondary Themes
Evidence Level / Disclosure Level
------------------------------------------------
Summary
Business Signal
------------------------------------------------
Problem
What was the problem?
------------------------------------------------
Data Surface
Structured / Text / Image / Graph / Hybrid
------------------------------------------------
System Decisions
[Decision 1]
Rationale
[Decision 2]
Rationale
------------------------------------------------
Workflow / Architecture
[Simple diagram or node list]
------------------------------------------------
AI-DLC Coverage
[Data] [Experiment] [Training] [Evaluation] ...
------------------------------------------------
Outcome / Metrics
[Metric Card] [Metric Card]
------------------------------------------------
Artifacts
[Repo] [Paper] [Demo] [Docs]
------------------------------------------------
Related Research
[Research Card]
------------------------------------------------
```

### Major UI Elements

- Theme badges
- Evidence level badge
- Disclosure level badge
- Business signal
- Data surface section
- Decision blocks
- Architecture or workflow summary
- AI-DLC coverage
- Metric cards
- Artifact links
- Related research

### Major Components

- ProjectDetailHero
- ThemeBadgeGroup
- DecisionList
- ArchitectureBlock
- AIDLCCoverage
- MetricGrid
- ArtifactLinks
- RelatedResearch

### Error and Empty States

- This artifact is not public.
- No public metric is available for this evidence.
- Details are summarized due to disclosure constraints.
- Related research is not linked yet.

## Screen 6: Research Index

### User Purpose

The user should understand research as support for modeling, evaluation, alignment, and system decisions rather than as a standalone publication archive.

### Wireframe

```text
------------------------------------------------
Research
Research that supports modeling, evaluation, and system decisions.
------------------------------------------------
Research Themes
[NLP / LLM] [Evaluation] [Alignment] [Medical Text] [Recommendation]
------------------------------------------------
Research List
[Research Card]
Title
Venue / Year
Theme
Linked Evidence
[Read]
------------------------------------------------
```

### Major UI Elements

- Research intro
- Research theme tags
- Research cards
- Publication metadata
- Linked evidence labels

### Major Components

- ResearchList
- ResearchCard
- ResearchThemeFilter
- LinkedEvidenceList

### Error and Empty States

- No linked evidence yet.
- Publication link is not available.
- No research items match the selected theme.

## Screen 7: Research Detail

### User Purpose

The user should understand the contribution of a research item and how it supports the broader portfolio themes.

### Wireframe

```text
------------------------------------------------
Research Hero
Title
Venue / Year / Research Theme
------------------------------------------------
Abstract / Summary
------------------------------------------------
Why It Matters
Connection to portfolio role themes
------------------------------------------------
Method / Contribution
------------------------------------------------
Evidence Connection
Linked Projects / Case Studies
------------------------------------------------
Artifacts
[Paper] [DOI] [Slides] [Code if public]
------------------------------------------------
```

### Major UI Elements

- Research hero
- Abstract
- Why it matters
- Contribution summary
- Linked evidence
- Artifact links

### Major Components

- ResearchDetailHero
- AbstractBlock
- ContributionBlock
- ResearchEvidenceBridge
- ArtifactLinks

### Error and Empty States

- External publication link is unavailable.
- This research is currently listed without a linked project.
- Artifact link is not currently public.

## Screen 8: Resume

### User Purpose

The user should quickly review official career, skills, project, and research information in a concise format.

### Wireframe

```text
------------------------------------------------
Resume Header
Name
AI Systems Engineer
Contact / Links
[Download PDF] [Open Portfolio]
------------------------------------------------
Profile Summary
------------------------------------------------
Core Competencies
[Data + Graph] [AI-DLC MLOps] [NLP / LLM]
------------------------------------------------
Experience
[Role / Organization / Period]
Bullets
------------------------------------------------
Selected Projects
Compact project entries
------------------------------------------------
Research
Compact publication entries
------------------------------------------------
Education / Recognition
------------------------------------------------
```

### Major UI Elements

- Resume header
- Contact block
- Profile summary
- Core competencies
- Compact experience entries
- Compact project entries
- Compact research entries
- Print or PDF call to action

### Major Components

- ResumeHeader
- ResumeSection
- CompetencySummary
- CompactProjectEntry
- CompactResearchEntry

### Error and Empty States

- Contact information is incomplete.
- Printable resume view is not available.
- Selected project summary is missing.

## Screen 9: Contact

### User Purpose

The user should find the right follow-up channel for company screening, technical review, or interview discussion.

### Wireframe

```text
------------------------------------------------
Contact
For company review, technical discussion, or interview follow-up.
------------------------------------------------
Contact Cards
[Email]
[GitHub]
[LinkedIn]
[Portfolio PDF]
[Resume]
------------------------------------------------
Preferred Review Path
1. Resume for official screening
2. Portfolio for technical evidence
3. GitHub for implementation review
------------------------------------------------
```

### Major UI Elements

- Contact intro
- Contact cards
- Preferred review path
- External links

### Major Components

- ContactPanel
- ExternalLinks
- ReviewPath

### Error and Empty States

- This contact channel is not configured.
- Resume link is unavailable.
- Portfolio PDF route is unavailable.

## Screen 10: 404 / Not Found

### User Purpose

The user should recover from a missing or moved page and navigate back to the most important artifacts.

### Wireframe

```text
------------------------------------------------
Page not found
This page may have moved during the portfolio refactoring.
------------------------------------------------
[Go Home] [Open Portfolio] [Open Resume]
------------------------------------------------
```

### Major UI Elements

- Clear error message
- Recovery links
- Home, portfolio, and resume calls to action

### Major Components

- NotFoundPage
- RecoveryLinks

### Error Messages

- The requested page could not be found.
- The content may have moved or may not be public.

## Cross-Screen Design Rules

- Every major screen should answer: what company role signal does this content provide?
- Role, evidence, business signal, evidence level, and disclosure level should be visible where relevant.
- Web pages should support exploration.
- The printable portfolio should support submission and review.
- The resume should remain concise and conventional.
- Domain-specific work should support the story without becoming the top-level identity.
- Evidence items should be classified consistently across pages.

## Recommended Next Step

The next artifact should define the content model and evidence metadata schema.

It should specify how fields such as primaryTheme, secondaryThemes, dataSurfaces, workflowStages, evidenceLevel, disclosureLevel, and businessSignal map to these screens.

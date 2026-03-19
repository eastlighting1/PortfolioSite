# Page Wireframes

## Project Goal

Build a GitHub Pages-ready multipage portfolio site for an ML engineer with a strong data-centric identity.

The site should separate:
- branding and discovery
- project and research browsing
- long-form reading surfaces
- print-first resume and portfolio documents

Primary role positioning:
- Data Specialist

Secondary role positioning:
- AI Researcher
- Data Engineer
- MLOps Engineer

---

# 1. Home (`/`)

## Purpose
The home page should create a strong first impression, communicate role positioning, and direct users into the deeper sections of the site.

It is not meant to contain every detail. It should act as a discovery and transition surface.

## Sections

### 1. Global Header
Contents:
- site title or personal name
- global navigation
  - Home
  - Projects
  - Research
  - Resume
  - Portfolio
  - About
  - Contact
- utility links
  - GitHub
  - LinkedIn
  - Resume shortcut

Interactions:
- sticky header
- active page state
- mobile drawer navigation

Components:
- `SiteHeader`
- `PrimaryNav`
- `MobileNavDrawer`

---

### 2. Hero
Contents:
- name
- primary positioning statement
- short supporting paragraph
- role chips
  - Primary: Data Specialist
  - Secondary: AI Researcher / Data Engineer / MLOps Engineer
- CTA buttons
  - Browse Projects
  - Read Research
  - Open Resume

Interactions:
- subtle stagger reveal
- button hover/focus states
- light motion in background

Components:
- `HeroBlock`
- `RoleChipGroup`
- `CTAGroup`

---

### 3. Animated System Intro
Contents:
A visual sequence showing:
- Raw Data
- Data Processing
- Feature Layer
- Modeling
- Evaluation
- Deployment / Monitoring

Each step includes:
- icon
- label
- short description
- connector or flow line
- associated role emphasis

Interactions:
- scroll-triggered reveal
- sequential stage animation
- responsive layout shift on mobile

Components:
- `AnimatedPipeline`
- `PipelineStage`
- `PipelineConnector`

---

### 4. Selected Projects Preview
Contents:
- section title
- 3 to 4 featured projects
- each card should show:
  - title
  - role
  - type
  - one-line summary
  - 2 to 3 metric badges
  - stack tags
  - links to repo / demo / paper / slides when available
  - quick preview button
  - open full case study button

Interactions:
- animated entry
- optional modal quick preview
- clear separation between external links and internal detail link

Components:
- `FeaturedProjects`
- `ProjectCard`
- `ProjectQuickPreviewModal`
- `MetricBadge`
- `ExternalLinks`

---

### 5. Selected Research Preview
Contents:
- 2 to 3 papers or notes
- title
- venue / year
- short abstract preview
- tags
- read more link

Interactions:
- abstract preview expand if needed
- click through to research detail page

Components:
- `ResearchPreview`
- `ResearchCardMini`

---

### 6. Experience Snapshot
Contents:
- 2 to 4 experience items
- role
- organization
- period
- short impact bullets
- link to full resume

Interactions:
- timeline reveal
- optional expand/collapse for fuller summary

Components:
- `ExperienceSnapshot`
- `ExperienceMiniCard`

---

### 7. Capability Map
Contents:
Grouped technical strengths:
- Data
- AI
- Infra / MLOps
- Research

Each group includes:
- short explanation
- skills list or tags

Interactions:
- emphasis on hover
- mobile accordion optional

Components:
- `CapabilityMap`
- `CapabilityGroupCard`
- `SkillTag`

---

### 8. Document CTA
Contents:
- Resume document card
- Portfolio document card
- short explanations
- open document page buttons

Interactions:
- card hover
- print-first emphasis

Components:
- `DocumentCTA`
- `DocumentPreviewCard`

---

### 9. Footer
Contents:
- contact links
- social links
- copyright
- optional last updated

Components:
- `SiteFooter`

---

# 2. Projects Index (`/projects/`)

## Purpose
A browseable catalogue of projects. This page should support exploration and filtering.

## Sections

### 1. Page Hero
Contents:
- title
- subtitle
- short description
- project count or selected work indicator

Components:
- `PageHero`

---

### 2. Filter and Search Bar
Contents:
- search input
- filter chips
  - role
  - domain
  - stack
  - type
- sort control
  - featured
  - recent
  - research-heavy
  - engineering-heavy

Interactions:
- immediate filter response
- reset filters
- active chip state

Components:
- `ProjectFilterBar`
- `FilterChip`
- `SearchInput`
- `SortSelect`

---

### 3. Project Grid / List
Contents for each card:
- title
- type
- year
- role
- summary
- metric badges
- tags
- external links
- quick preview button
- full detail link

Interactions:
- grid/list toggle optional
- quick preview modal optional
- separate click targets for internal vs external navigation

Components:
- `ProjectGrid`
- `ProjectCard`
- `ProjectListItem`
- `ProjectLinkGroup`

---

### 4. Featured Strip
Contents:
- 1 or 2 highlighted projects
- stronger visual treatment
- architecture or system snippet
- primary metrics

Components:
- `FeaturedProjectStrip`

---

# 3. Project Detail (`/projects/[slug]/`)

## Purpose
A long-form reading surface for serious project documentation.

## Sections

### 1. Hero
Contents:
- title
- subtitle or summary
- role
- year / duration
- organization or team
- project type
- external links
  - repo
  - demo
  - paper
  - slides

Components:
- `ProjectDetailHero`
- `ProjectMetaList`
- `ProjectExternalLinks`

---

### 2. Executive Summary
Contents:
- concise overview paragraph
- 3 key points
- 2 to 4 metric highlights

Components:
- `ExecutiveSummaryCard`
- `MetricBadgeRow`

---

### 3. Problem
Contents:
- problem statement
- why it is difficult
- why it matters

Components:
- `ContentSection`
- `CalloutBox`

---

### 4. System / Approach
Contents:
- full approach description
- architecture explanation
- design reasoning
- tradeoffs
- figure or diagram

Interactions:
- figure lightbox
- tabs:
  - system
  - data
  - modeling
  - evaluation

Components:
- `TabsBlock`
- `ArchitectureFigure`
- `FigureLightbox`

---

### 5. My Contribution
Contents:
- exact responsibilities
- ownership boundary
- collaboration notes

Components:
- `ContributionBlock`

---

### 6. Results / Outcomes
Contents:
- key results
- operational gains
- qualitative and quantitative outcomes

Components:
- `ResultMetricGrid`
- `OutcomeCard`

---

### 7. Technical Notes
Contents:
- stack
- design choices
- limitations
- lessons learned
- next steps

Interactions:
- accordion sections
- optional code snippet expansion

Components:
- `AccordionBlock`
- `TechStackList`

---

### 8. Related Navigation
Contents:
- related projects
- related research
- previous/next project

Components:
- `RelatedContentNav`

---

# 4. Research Index (`/research/`)

## Purpose
A dedicated surface for papers, notes, and technical writing.

## Sections

### 1. Page Hero
Contents:
- title
- subtitle
- short description

Components:
- `PageHero`

---

### 2. Filter Bar
Contents:
- type filter
  - paper
  - preprint
  - technical note
  - engineering note
- year filter
- topic tags
- search

Components:
- `ResearchFilterBar`

---

### 3. Research List / Grid
Contents per card:
- title
- venue
- year
- type
- abstract preview
- tags
- links
  - PDF
  - DOI
  - repo
  - slides
- open detail button

Interactions:
- abstract expand
- list/grid toggle optional

Components:
- `ResearchCard`
- `AbstractPreview`
- `ResearchLinkGroup`

---

### 4. Themes / Highlights
Contents:
Thematic grouping such as:
- Clinical AI
- Retrieval and Evaluation
- Observability / MLOps

Components:
- `ResearchThemeStrip`

---

# 5. Research Detail (`/research/[slug]/`)

## Purpose
A long-form paper or note detail page.

## Sections

### 1. Hero
Contents:
- title
- venue
- year
- type
- authors if needed
- external links

Components:
- `ResearchDetailHero`

---

### 2. Abstract
Contents:
- full abstract
- optional copy citation control

Interactions:
- collapse / expand optional

Components:
- `AbstractBlock`

---

### 3. Core Contribution
Contents:
- 2 to 4 main contributions

Components:
- `ContributionList`

---

### 4. Methods Snapshot
Contents:
- method summary
- figure or architecture
- optional linked project

Components:
- `MethodSummaryBlock`
- `FigureLightbox`

---

### 5. Results Snapshot
Contents:
- main findings
- tables or metric cards
- concise interpretation

Components:
- `ResearchResultsBlock`

---

### 6. Assets / Links
Contents:
- PDF
- code
- slides
- poster
- related project

Components:
- `AssetLinkGroup`

---

# 6. Resume (`/resume/`)

## Purpose
A print-first CV / resume page for recruiters and hiring managers.

## Requirements
- must read well on screen
- must print cleanly
- must avoid decorative clutter
- must preserve document credibility

## Sections

### 1. Print Toolbar
Screen only:
- print button
- optional last updated
- optional PDF note

Components:
- `PrintToolbar`

---

### 2. Header
Contents:
- name
- role line
- location optional
- email
- GitHub
- LinkedIn
- website

Components:
- `ResumeHeader`

---

### 3. Summary
Contents:
- 3 to 5 lines
- professional positioning
- compact and direct

Components:
- `ResumeSection`

---

### 4. Experience
Contents:
- role / org / period
- impact bullets
- achievement-oriented wording

Components:
- `ResumeExperienceItem`

---

### 5. Education
Contents:
- school
- degree
- period
- thesis optional

Components:
- `ResumeEducationItem`

---

### 6. Skills
Contents:
- grouped skills
- compact but legible

Components:
- `ResumeSkillGroup`

---

### 7. Selected Projects / Publications
Contents:
- 2 to 4 selected items
- title
- venue or type
- year
- optional link

Components:
- `ResumeProjectMini`
- `ResumePublicationItem`

---

### 8. Awards / Certifications / Links
Optional section.

## Print Design Rules
- minimal background
- no decorative shadows
- controlled page breaks
- clear typography
- links should remain legible

---

# 7. Portfolio (`/portfolio/`)

## Purpose
A dedicated printable case-study portfolio document.

It must not feel like an expanded landing page. It should feel like a standalone document.

## Sections

### 1. Print Toolbar
Screen only:
- print button
- optional PDF note

Components:
- `PrintToolbar`

---

### 2. Cover
Contents:
- portfolio title
- short intro
- name / role
- contact links

Components:
- `PortfolioCover`

---

### 3. Profile Summary
Contents:
- strengths
- type of problems solved
- intersection of data, AI, and systems

Components:
- `PortfolioIntroSection`

---

### 4. Case Study Sections
Repeated template for each selected project.

Contents:
- case label
- title
- role / year / type
- problem
- approach
- outcome
- metrics
- system flow
- external links

Interactions:
- on screen: optional collapse/expand
- on print: all expanded
- lightbox screen only

Components:
- `CaseStudySection`
- `CaseStudyMeta`
- `CaseStudyMetricRow`
- `SystemFlowStrip`
- `CaseStudyLinks`

---

### 5. Research Highlights
Contents:
- selected papers
- relation to project work

Components:
- `PortfolioResearchHighlight`

---

### 6. Capability Summary
Contents:
- data
- AI
- infra / MLOps
- research

Components:
- `CapabilitySummaryBlock`

## Print Design Rules
- case-study-based page breaks
- no broken cards across pages
- stable text flow
- one-column priority over decorative complexity

---

# 8. About (`/about/`)

## Purpose
Longer narrative page for working style, identity, and interests.

## Sections
- positioning narrative
- working philosophy
- themes and interests
- what matters in ML systems

Components:
- `AboutHero`
- `NarrativeSection`
- `ThemeCardGrid`

---

# 9. Contact (`/contact/`)

## Purpose
A simple, clean endpoint.

## Sections
- email
- GitHub
- LinkedIn
- optional Google Scholar
- short note

Components:
- `ContactCardGrid`
- `SimpleContactHero`
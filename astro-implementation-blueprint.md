# Astro Implementation Blueprint

## Goal

Implement a GitHub Pages-ready static multipage portfolio using Astro.

Primary priorities:
- stable multipage structure
- separate project and research reading surfaces
- print-first resume and portfolio pages
- lightweight interactions only where useful
- easy future replacement of placeholder content with real data

---

# 1. Technical Direction

## Recommended stack
- Astro
- static output
- GitHub Actions deployment to GitHub Pages
- minimal client-side interactivity
- markdown-based content collections for projects and research

## Why this direction
- GitHub Pages works well with static build output
- Astro supports multipage architecture naturally
- content collections are suitable for project and research detail pages
- resume and portfolio pages can have dedicated print layouts
- interactivity can be isolated rather than forcing SPA behavior

---

# 2. Route Structure

```text
src/pages/
├─ index.astro
├─ about.astro
├─ contact.astro
├─ resume.astro
├─ portfolio.astro
├─ 404.astro
├─ projects/
│  ├─ index.astro
│  └─ [slug].astro
└─ research/
   ├─ index.astro
   └─ [slug].astro
````

---

# 3. Recommended Project Structure

```text
ml-portfolio/
├─ public/
│  ├─ favicon.svg
│  ├─ social-preview.png
│  ├─ images/
│  │  ├─ projects/
│  │  ├─ research/
│  │  └─ profile/
│  └─ CNAME
├─ src/
│  ├─ components/
│  │  ├─ common/
│  │  │  ├─ SiteHeader.astro
│  │  │  ├─ SiteFooter.astro
│  │  │  ├─ PageHero.astro
│  │  │  ├─ SectionHeader.astro
│  │  │  ├─ CTAButton.astro
│  │  │  ├─ TagChip.astro
│  │  │  └─ ExternalLinks.astro
│  │  ├─ home/
│  │  │  ├─ HeroBlock.astro
│  │  │  ├─ AnimatedPipeline.astro
│  │  │  ├─ FeaturedProjects.astro
│  │  │  ├─ ResearchPreview.astro
│  │  │  ├─ ExperienceSnapshot.astro
│  │  │  ├─ CapabilityMap.astro
│  │  │  └─ DocumentCTA.astro
│  │  ├─ projects/
│  │  │  ├─ ProjectCard.astro
│  │  │  ├─ ProjectGrid.astro
│  │  │  ├─ ProjectDetailHero.astro
│  │  │  └─ ResultMetricGrid.astro
│  │  ├─ research/
│  │  │  ├─ ResearchCard.astro
│  │  │  ├─ ResearchList.astro
│  │  │  ├─ ResearchDetailHero.astro
│  │  │  └─ AbstractBlock.astro
│  │  ├─ document/
│  │  │  ├─ PrintToolbar.astro
│  │  │  ├─ ResumeHeader.astro
│  │  │  ├─ ResumeSection.astro
│  │  │  ├─ PortfolioCover.astro
│  │  │  └─ CaseStudySection.astro
│  │  └─ interactive/
│  │     ├─ ProjectFilter.ts
│  │     ├─ ScrollReveal.ts
│  │     └─ ThemeToggle.ts
│  ├─ content/
│  │  ├─ config.ts
│  │  ├─ projects/
│  │  └─ research/
│  ├─ data/
│  │  ├─ site.ts
│  │  ├─ profile.ts
│  │  ├─ experience.ts
│  │  ├─ education.ts
│  │  └─ links.ts
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  ├─ DetailLayout.astro
│  │  └─ DocumentLayout.astro
│  ├─ pages/
│  ├─ styles/
│  │  ├─ global.css
│  │  ├─ components.css
│  │  ├─ motion.css
│  │  └─ print.css
│  └─ utils/
│     ├─ routes.ts
│     └─ seo.ts
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
└─ .github/
   └─ workflows/
      └─ deploy.yml
```

---

# 4. Core Configuration

## package.json

Use Astro with a minimal setup.

Suggested scripts:

* `dev`
* `build`
* `preview`

## astro.config.mjs

Requirements:

* static output
* `site` value set
* `base` compatible with GitHub Pages repository deployment

Important:
If deployed to `username.github.io/repo-name/`, base path must be handled correctly.

---

# 5. Layout Design

## BaseLayout.astro

Use for:

* home
* projects index
* research index
* about
* contact

Responsibilities:

* global `<head>`
* shared header and footer
* default page container
* global styles
* optional lightweight scroll reveal loader

---

## DetailLayout.astro

Use for:

* project detail
* research detail

Responsibilities:

* narrower reading surface
* optional sticky side area
* better spacing for long-form content
* breadcrumb support if desired

---

## DocumentLayout.astro

Use for:

* resume
* portfolio

Responsibilities:

* print-specific classes
* no decorative background
* document-width container
* clean typography
* screen and print compatibility

---

# 6. Data Strategy

## Static data files (`src/data/`)

Use for:

* profile
* site navigation
* experience
* education
* links

Good for:

* small structured content
* values reused across pages

---

## Content collections (`src/content/`)

Use for:

* projects
* research

Each project and research item should live in its own markdown file with frontmatter.

Benefits:

* static generation of detail pages
* easy editing
* clean long-form content support

---

# 7. Content Collection Schemas

## Projects schema

Suggested fields:

* title
* slug
* year
* role
* type
* summary
* featured
* tags
* metrics
* repoUrl
* demoUrl
* paperUrl
* slidesUrl
* heroImage

Long-form sections should be written in markdown body content.

---

## Research schema

Suggested fields:

* title
* slug
* year
* venue
* type
* abstract
* tags
* pdfUrl
* repoUrl
* slidesUrl
* linkedProjects

Long-form content should be written in markdown body content.

---

# 8. Page Responsibilities

## `src/pages/index.astro`

Responsibilities:

* compose home page
* load featured projects
* load selected research
* route users into deeper pages

Uses:

* `BaseLayout`
* `HeroBlock`
* `AnimatedPipeline`
* `FeaturedProjects`
* `ResearchPreview`
* `ExperienceSnapshot`
* `CapabilityMap`
* `DocumentCTA`

---

## `src/pages/projects/index.astro`

Responsibilities:

* render all projects
* support future filtering
* act as project catalogue

Uses:

* `BaseLayout`
* `PageHero`
* `ProjectGrid`
* optional filter island later

---

## `src/pages/projects/[slug].astro`

Responsibilities:

* render one project detail page
* expose links to repo/demo/paper/slides
* render markdown body as long-form case study

Uses:

* `DetailLayout`
* `ProjectDetailHero`
* markdown content
* additional detail components over time

---

## `src/pages/research/index.astro`

Responsibilities:

* render research index
* support future filtering
* provide a serious reading gateway

Uses:

* `BaseLayout`
* `PageHero`
* `ResearchCard`
* optional filter island later

---

## `src/pages/research/[slug].astro`

Responsibilities:

* render full research detail page
* surface abstract, methods, results, and links

Uses:

* `DetailLayout`
* `ResearchDetailHero`
* `AbstractBlock`
* markdown content

---

## `src/pages/resume.astro`

Responsibilities:

* render clean CV/resume document
* print cleanly
* remain readable on screen

Uses:

* `DocumentLayout`
* `PrintToolbar`
* `ResumeHeader`
* `ResumeSection`

---

## `src/pages/portfolio.astro`

Responsibilities:

* render printable case-study portfolio
* show selected projects with more depth
* support case-study-based page breaks

Uses:

* `DocumentLayout`
* `PrintToolbar`
* `PortfolioCover`
* `CaseStudySection`

---

# 9. Component Plan

## Common

* `SiteHeader.astro`
* `SiteFooter.astro`
* `PageHero.astro`
* `SectionHeader.astro`
* `CTAButton.astro`
* `TagChip.astro`
* `ExternalLinks.astro`

## Home

* `HeroBlock.astro`
* `AnimatedPipeline.astro`
* `FeaturedProjects.astro`
* `ResearchPreview.astro`
* `ExperienceSnapshot.astro`
* `CapabilityMap.astro`
* `DocumentCTA.astro`

## Projects

* `ProjectCard.astro`
* `ProjectGrid.astro`
* `ProjectDetailHero.astro`
* `ResultMetricGrid.astro`

## Research

* `ResearchCard.astro`
* `ResearchList.astro`
* `ResearchDetailHero.astro`
* `AbstractBlock.astro`

## Documents

* `PrintToolbar.astro`
* `ResumeHeader.astro`
* `ResumeSection.astro`
* `PortfolioCover.astro`
* `CaseStudySection.astro`

## Optional Interactive

Keep these lightweight and only introduce them when needed:

* `ProjectFilter.ts`
* `ScrollReveal.ts`
* `ThemeToggle.ts`
* later:

  * lightbox
  * tabs
  * accordion
  * modal preview

---

# 10. Styling Plan

## global.css

Should contain:

* reset
* theme tokens
* typography
* container widths
* base layout primitives

## components.css

Should contain:

* cards
* chips
* buttons
* navigation styles
* grids
* document blocks

## motion.css

Should contain:

* reveal classes
* stagger helpers
* subtle transitions only

## print.css

Should contain:

* hide header/footer/toolbar during print
* remove shadows and decorative effects
* control page breaks
* normalize colors for print
* ensure document pages print cleanly

---

# 11. Print Strategy

## Resume

* document-first layout
* minimal visual noise
* avoid broken sections across pages
* maintain a strong single-column or controlled two-column structure

## Portfolio

* each case study should be a print-aware block
* enforce page break before later case studies if necessary
* avoid splitting metric cards or section headers across pages

Important:
Resume and portfolio should not be treated as resized versions of the landing page.

---

# 12. External Links Strategy

Project cards and detail pages should support these external links when available:

* GitHub Repo
* Live Demo
* Paper
* Slides
* Blog / Note

Implementation rules:

* hide missing links
* visually separate internal detail route from external links
* avoid making the entire card ambiguous as a click target

---

# 13. GitHub Pages Deployment Plan

## Deployment method

Use GitHub Actions to:

* install dependencies
* build Astro site
* upload `dist/`
* deploy to GitHub Pages

## Requirements

* static build only
* correct `base` handling
* optional custom domain support later via `CNAME`

---

# 14. Recommended Implementation Order

## Phase 1

Set up foundation:

* Astro project
* global config
* layouts
* styles
* site data

## Phase 2

Create the 5 primary pages:

* home
* projects
* research
* resume
* portfolio

## Phase 3

Add content collections:

* projects
* research

## Phase 4

Implement detail pages:

* `/projects/[slug]`
* `/research/[slug]`

## Phase 5

Improve print behavior:

* resume print tuning
* portfolio page breaks

## Phase 6

Add lightweight interactivity:

* scroll reveal
* optional filters
* optional quick preview / lightbox

---

# 15. Initial Scope vs Expansion Scope

## Initial scope

Must have:

* multipage structure
* working navigation
* project index
* research index
* project detail
* research detail
* printable resume
* printable portfolio
* external project links

## Expansion scope

Later:

* search and filters
* quick preview modal
* figure lightbox
* theme toggle
* blog / notes section
* multilingual support
* generated PDF pipeline

---

# 16. Codex Implementation Notes

When implementing:

* prioritize structural correctness over visual polish
* keep components clean and small
* do not overuse client-side JS
* ensure GitHub Pages compatibility from the beginning
* keep placeholder content easy to replace
* make resume and portfolio print cleanly before polishing animations
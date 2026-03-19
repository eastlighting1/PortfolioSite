# Codex Handoff Summary

## What this project is

A GitHub Pages-ready multipage portfolio site for an ML engineer.

This is not a single-page landing page.
It should be a static multipage site with clear page identity.

Primary role:
- Data Specialist

Secondary roles:
- AI Researcher
- Data Engineer
- MLOps Engineer

The site should communicate a data-centric ML systems identity through both structure and UI language.

---

## Core requirements

1. Use Astro.
2. Use static multipage routing.
3. Make it compatible with GitHub Pages deployment.
4. Separate these pages clearly:
   - Home
   - Projects
   - Research
   - Resume
   - Portfolio
   - About
   - Contact
5. Resume and Portfolio must be dedicated document pages.
6. Resume and Portfolio must print cleanly.
7. Project pages must support external links such as:
   - GitHub repo
   - Demo
   - Paper
   - Slides
8. Keep interactivity lightweight and optional.
9. Prefer structural correctness before visual polish.

---

## Page roles

### Home
Branding and discovery surface.
Should preview projects and research without replacing their dedicated pages.

### Projects
Catalogue page for browsing projects.

### Project Detail
Long-form project case study page.

### Research
Catalogue page for papers, notes, and technical writing.

### Research Detail
Long-form research reading surface.

### Resume
Print-first CV / resume document.

### Portfolio
Print-first case-study document.

### About
Longer narrative and positioning page.

### Contact
Simple and clean endpoint.

---

## Build priorities

### Highest priority
- multipage structure
- layouts
- content collections
- working routes
- printable document pages

### Medium priority
- external links
- better detail page structure
- responsive layout

### Lower priority
- animation polish
- filter/search UI
- optional interactive components

---

## Technical direction

- Astro
- static output
- GitHub Actions for GitHub Pages
- markdown content collections for projects and research
- lightweight CSS and only minimal client-side JS

---

## Important implementation attitude

Do not build this like a flashy startup landing page.
Do not force SPA behavior.
Do not over-engineer interactivity too early.

The goal is:
- stronger information architecture
- serious reading surfaces
- credible document outputs
- easy future replacement of placeholder content with real material

---

## Files to read next

1. `page-wireframes.md`
2. `astro-implementation-blueprint.md`

These contain:
- page-by-page wireframe requirements
- Astro project structure
- component plan
- layout plan
- deployment direction
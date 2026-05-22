# Test Strategy

## Purpose

This document defines the test strategy for the refactored portfolio site based on the validated requirements, use cases, logical architecture, and wireframes.

Although the site is static, the primary risks are not limited to rendering. The most important risks involve professional positioning, evidence classification, disclosure safety, localization consistency, and printable portfolio quality.

## Test Goals

The test strategy should verify that:

- recruiters can understand the candidate's role fit quickly
- technical reviewers can inspect evidence and implementation depth
- the three role themes remain balanced
- evidence level and disclosure level are respected
- private or summary-only content is not exposed incorrectly
- Korean and English pages preserve the same positioning strategy
- printable portfolio output is submission-ready
- refactoring does not break existing pages, routes, or artifacts

## 1. Unit Tests

### Test Scope

Unit tests should cover isolated logic such as:

- view model builders
- evidence filtering
- role map generation
- locale path resolution
- metadata validation helpers
- disclosure filtering logic
- AI-DLC coverage mapping
- theme grouping helpers

### Risks Verified

- One of the three role themes is missing.
- Role order or balance is broken.
- Private-only evidence appears in previews.
- Low-maturity evidence is promoted incorrectly.
- Korean or English paths are generated incorrectly.
- Projects are mapped to incorrect themes.
- AI-DLC coverage is displayed differently from source metadata.

### Example Tests

- `buildRecruiterEntryView` fails unless exactly three role themes are present.
- `selectPublicEvidence` excludes `Private / Mention Only` items.
- `groupEvidenceByTheme` respects primary and secondary themes.
- `resolveLocalizedPath` returns `/portfolio/` and `/en/portfolio/` correctly.
- `getAidlCoverage` returns only supported AI-DLC stages.

## 2. Integration Tests

### Test Scope

Integration tests should verify the flow from content source to rendered data structures:

- Content Sources to Schema
- Schema to View Model
- Evidence Library grouping
- Project and Research linking
- Portfolio data assembly
- Print portfolio data assembly
- Resume data assembly

### Risks Verified

- Markdown or YAML frontmatter does not match the schema.
- A project exists but does not appear in the Evidence Library.
- Research appears without intended evidence links.
- Printable portfolio does not receive required summary data.
- Resume and Portfolio use conflicting professional identities.
- Korean content exists but English counterpart is missing.

### Example Tests

- Every project has `primaryTheme`, `evidenceLevel`, and `disclosureLevel`.
- Portfolio view model generates Role Map, Evidence Library, and Case Studies.
- Research Bridge displays linked evidence correctly.
- Print view model includes identity, roles, and selected evidence for page one.
- Resume view model uses the same top-level identity as the portfolio.

## 3. End-to-End Tests

### Test Scope

E2E tests should run against the built static site in a browser.

They should cover:

- main navigation
- recruiter first-pass review
- portfolio to resume flow
- printable portfolio route
- project detail navigation
- language switching
- contact follow-up path
- responsive behavior

### Risks Verified

- Recruiters cannot see key positioning in the first viewport.
- Calls to action route to the wrong page.
- Role Map breaks on mobile.
- Portfolio to Resume or Contact flow is broken.
- Korean and English pages do not map correctly.
- Printable portfolio layout breaks during page flow.

### Core E2E Scenarios

#### Recruiter First-Pass Review

1. Open Home.
2. Confirm `AI Systems Engineer` or localized equivalent is visible.
3. Confirm three role themes are visible.
4. Confirm Portfolio and Resume calls to action are available.

#### Printable Portfolio Submission

1. Open Portfolio.
2. Click Print Portfolio or Submission Portfolio.
3. Confirm Executive Summary is visible.
4. Confirm role summary and selected evidence are visible.

#### Technical Deep Review

1. Open Projects.
2. Open an evidence item.
3. Confirm Problem, Decision, Evidence, and Artifacts sections exist.

#### Language Switching

1. Open `/portfolio/`.
2. Switch to `/en/portfolio/`.
3. Confirm role structure remains consistent.

#### Contact Follow-Up

1. Open Contact.
2. Confirm Email, GitHub, LinkedIn, Resume, or Portfolio links are available where configured.

## 4. Security Tests

### Test Scope

Security tests should focus on static build output and content exposure.

They should inspect:

- built HTML output
- static assets
- external links
- frontmatter-derived content
- source map exposure
- sensitive string patterns
- disclosure-limited project details

### Risks Verified

- Sensitive data, secrets, tokens, institution names, or internal details are deployed.
- `Private / Mention Only` project details are included in public HTML.
- Private artifact links are exposed.
- GitHub links point to unsafe or sensitive repositories.
- Internal refactoring documents are published unintentionally.

### Example Tests

- Search `dist` for secret-like patterns.
- Search `dist` for private-only project body text.
- Validate external links against an allowed or reviewed domain list.
- Confirm internal refactoring docs are not published unless intentionally linked.
- Confirm print routes do not expose private project details.

## 5. Permission and Disclosure-Level Tests

### Test Scope

This static site does not have login-based authorization, but it does have publication-level permissions.

Tests should validate:

- `disclosureLevel`
- artifact visibility
- project detail rendering
- print rendering
- evidence preview rendering

### Disclosure Rules

- `Public`: full details and public artifacts may render.
- `Public Summary Only`: summary, business signal, and safe metadata only.
- `Sanitized`: sanitized details only.
- `Private / Mention Only`: title or mention only, no details or artifacts.

### Risks Verified

- Private projects are exposed in previews, detail pages, or print pages.
- Summary-only projects render too much detail.
- Artifact links ignore disclosure level.
- Printable portfolio includes content deeper than the disclosure level allows.

### Example Tests

- Public projects render details and artifacts.
- Public Summary Only projects hide detailed artifacts.
- Private / Mention Only projects are excluded from recruiter preview or rendered only as safe mentions.
- Print Portfolio respects disclosureLevel for every included item.

## 6. Regression Tests

### Test Scope

Regression tests should protect existing behavior while refactoring.

They should cover:

- existing routes
- existing project slugs
- existing research slugs
- portfolio pages
- resume pages
- static files
- SEO metadata
- print CSS
- locale routing

### Risks Verified

- Existing content disappears.
- Existing URLs break.
- Project or research detail pages become 404.
- Print portfolio output breaks.
- SEO metadata is lost.
- Global navigation or mobile navigation breaks.

### Example Tests

- Every known route builds successfully.
- Existing project slugs remain stable.
- Existing research routes remain stable.
- Visual snapshots detect major layout changes.
- Print preview screenshots remain readable.
- Robots and static files remain available.

## 7. Content Quality Tests

### Test Scope

Content quality tests should verify strategic consistency and required language.

They should cover:

- role labels
- business signals
- evidence metadata
- Korean and English alignment
- domain keyword placement
- AI-DLC definition
- banned or risky phrasing

### Risks Verified

- Risky labels such as `Graph-focused` reappear.
- Medical or finance language dominates top-level positioning.
- Role descriptions overlap or become vague.
- Evidence items lack business signals.
- Korean and English pages communicate different positioning.
- AI-DLC appears without definition.

### Example Tests

- Hero contains `AI Systems Engineer` or approved localized equivalent.
- AI-DLC first appearance includes `AI-Driven Development Life Cycle`.
- Exactly three role themes are present.
- Every role includes a business signal.
- Banned or risky phrases do not appear in public pages.
- Domain keywords appear in evidence context, not top-level role titles.

## 8. Accessibility Tests

### Test Scope

Accessibility tests should verify that key review flows work for keyboard and assistive technology users.

They should cover:

- heading hierarchy
- keyboard navigation
- link labels
- language switcher
- badge semantics
- contrast
- reduced motion
- print readability

### Risks Verified

- Recruiters cannot navigate calls to action with keyboard.
- Role cards are meaningless to screen readers.
- Evidence badges communicate only through color.
- Language switcher lacks clear names.
- Print output has text that is too small or overlapping.

### Example Tests

- Each page has one clear H1.
- Every CTA has an accessible name.
- Role and evidence badges include text meaning.
- Navigation, filters, and CTAs are keyboard reachable.
- Reduced-motion users can still access all information.

## 9. Performance Tests

### Test Scope

Performance tests should verify fast static delivery and avoid unnecessary JavaScript.

They should cover:

- first viewport loading
- CSS and JavaScript bundle size
- image optimization
- font loading
- print route rendering
- mobile performance

### Risks Verified

- First screen loads too slowly for reviewers.
- Evidence filtering requires excessive JavaScript.
- Images or static assets are too large.
- Mobile users cannot see key positioning quickly.

### Example Tests

- Run Lighthouse or equivalent checks.
- Enforce JavaScript bundle size budgets.
- Validate image size and format.
- Confirm first-viewport content is server-rendered and visible without unnecessary client-side work.

## 10. Visual Regression and Print Tests

### Test Scope

Visual regression should cover:

- Home
- Portfolio
- Projects
- Project Detail
- Resume
- Printable Portfolio
- mobile layout
- print layout

### Risks Verified

- Role cards become visually unbalanced.
- Evidence cards overlap on mobile.
- Print sections are cut between pages.
- PDF headers or footers repeat incorrectly.
- Long Korean or English text overflows containers.
- Executive summary does not fit on the first page.

### Example Tests

- Compare desktop and mobile screenshots.
- Compare print viewport screenshots.
- Test long role titles and business signals.
- Confirm page breaks are acceptable.
- Confirm executive summary fits on page one.

## Test Priority

The first tests to automate should be:

1. Content schema validation
2. Disclosure and publication safety tests
3. Recruiter first-pass E2E test
4. Printable portfolio E2E and visual print test
5. Project detail integration tests
6. Localization consistency tests
7. Regression route tests
8. Accessibility checks
9. Performance checks
10. Expanded visual regression tests

## Risk Mapping

| Risk | Test Types |
| --- | --- |
| Incorrect professional positioning | Content quality, E2E, visual regression |
| Private information exposure | Security, disclosure-level tests |
| Recruiter flow failure | E2E, accessibility |
| Weak technical evidence path | Integration, content quality |
| Poor printable submission quality | E2E, print tests, visual regression |
| Localization drift | Integration, content quality |
| Broken routes after refactoring | Regression |
| Missing metadata | Unit, schema validation |
| Overstated evidence maturity | Unit, disclosure tests, content quality |
| Slow first review experience | Performance, E2E |

## Recommended First Automation Pass

The first automation pass should focus on two areas:

1. Content Schema Validation
2. Disclosure Level Testing

These tests protect the most important refactoring risks: incomplete evidence metadata and incorrect public exposure.

Once those are in place, UI refactoring can proceed with stronger safety around evidence placement and publication boundaries.

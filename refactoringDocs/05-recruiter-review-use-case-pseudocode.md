# Recruiter Review Use Case Pseudocode

## Purpose

This document describes one simplified implementation flow for the refactored portfolio site.

The assumed user is a corporate recruiter. The goal is to model one likely recruiter use case and define Astro/JavaScript-style pseudocode plus unit-test pseudocode before implementation.

This is not production code. It is a design artifact that clarifies behavior, data requirements, and test expectations.

## Use Case

### Recruiter Goal

A recruiter lands on the portfolio and needs to quickly answer:

> What role family should this candidate be reviewed for?

The recruiter should be able to see:

- the top-level identity
- the three equal role themes
- a small set of safe, reviewable evidence
- direct paths to the printable portfolio and resume

### Expected User Flow

1. Recruiter opens the portfolio entry page.
2. Recruiter sees the headline: **AI Systems Engineer**.
3. Recruiter sees three equal role themes:
   - Data Specialist, with Graph as a Core Strength
   - AI-DLC and Operational MLOps Engineer
   - Applied NLP and LLM Research Engineer
4. Recruiter scans selected evidence that is safe to show.
5. Recruiter chooses either:
   - printable submission portfolio
   - resume

## Pseudocode: Astro Entry Component

```astro
---
// RecruiterReviewEntry.astro - pseudocode

import { getPortfolioProfile, getEvidenceSummary } from "../lib/portfolio";
import RoleMap from "./RoleMap.astro";
import EvidencePreview from "./EvidencePreview.astro";
import ReviewPathCTA from "./ReviewPathCTA.astro";
import { buildRecruiterEntryView } from "../lib/recruiter-entry";

const locale = Astro.props.locale ?? "ko";

const profile = await getPortfolioProfile(locale);
const evidence = await getEvidenceSummary(locale);

const recruiterViewModel = buildRecruiterEntryView({
  profile,
  evidence,
  locale
});
---

<section class="recruiter-entry">
  <p class="eyebrow">Company Review Portfolio</p>

  <h1>{recruiterViewModel.headline}</h1>
  <p>{recruiterViewModel.summary}</p>

  <RoleMap roles={recruiterViewModel.roles} />

  <EvidencePreview items={recruiterViewModel.selectedEvidence} />

  <ReviewPathCTA
    primary={recruiterViewModel.primaryAction}
    secondary={recruiterViewModel.secondaryAction}
  />
</section>
```

## Pseudocode: View Model Builder

```js
// recruiter-entry.js - pseudocode

export function buildRecruiterEntryView({ profile, evidence, locale }) {
  if (!profile?.topLevelIdentity) {
    throw new Error("Recruiter entry requires a top-level identity.");
  }

  const roles = profile.roles ?? [];

  if (roles.length !== 3) {
    throw new Error("Recruiter entry requires exactly three role themes.");
  }

  const selectedEvidence = evidence
    .filter((item) => item.disclosureLevel !== "Private / Mention Only")
    .filter((item) => ["Published", "Implemented", "Prototype"].includes(item.evidenceLevel))
    .slice(0, 3);

  return {
    headline: profile.topLevelIdentity,
    summary: profile.recruiterSummary,
    roles,
    selectedEvidence,
    primaryAction: {
      label: locale === "ko" ? "제출용 포트폴리오 보기" : "Open Submission Portfolio",
      href: locale === "ko" ? "/portfolio/print/" : "/en/portfolio/print/"
    },
    secondaryAction: {
      label: locale === "ko" ? "이력서 보기" : "Open Resume",
      href: locale === "ko" ? "/resume/" : "/en/resume/"
    }
  };
}
```

## Unit Test Pseudocode

The unit tests should focus on the view model builder rather than Astro rendering.

The key behavior is that recruiter-facing data must be complete, balanced, and safe to show.

```js
// recruiter-entry.test.js - pseudocode

import { describe, expect, it } from "vitest";
import { buildRecruiterEntryView } from "../src/features/portfolio/recruiter-entry";

describe("buildRecruiterEntryView", () => {
  it("builds a recruiter-facing entry view with three equal role themes", () => {
    const profile = {
      topLevelIdentity: "AI Systems Engineer",
      recruiterSummary:
        "Structures diverse data, builds AI-DLC workflows, and applies NLP/LLM research to reliable AI systems.",
      roles: [
        {
          id: "data-graph",
          title: "Data Specialist, with Graph as a Core Strength",
          businessSignal: "Converts diverse data surfaces into system-ready structures."
        },
        {
          id: "ai-dlc-mlops",
          title: "AI-DLC and Operational MLOps Engineer",
          businessSignal: "Makes AI workflows observable and repeatable."
        },
        {
          id: "nlp-llm",
          title: "Applied NLP and LLM Research Engineer",
          businessSignal: "Connects NLP/LLM research to evaluation and system decisions."
        }
      ]
    };

    const evidence = [
      {
        title: "Graph Infrastructure Project",
        evidenceLevel: "Implemented",
        disclosureLevel: "Public",
        primaryTheme: "data-graph"
      },
      {
        title: "ML Observability Project",
        evidenceLevel: "Prototype",
        disclosureLevel: "Public Summary Only",
        primaryTheme: "ai-dlc-mlops"
      },
      {
        title: "NLP Evaluation Research",
        evidenceLevel: "Published",
        disclosureLevel: "Public",
        primaryTheme: "nlp-llm"
      }
    ];

    const view = buildRecruiterEntryView({
      profile,
      evidence,
      locale: "en"
    });

    expect(view.headline).toBe("AI Systems Engineer");
    expect(view.roles).toHaveLength(3);
    expect(view.selectedEvidence).toHaveLength(3);
    expect(view.primaryAction.href).toBe("/en/portfolio/print/");
    expect(view.secondaryAction.href).toBe("/en/resume/");
  });

  it("excludes private-only evidence from recruiter preview", () => {
    const profile = {
      topLevelIdentity: "AI Systems Engineer",
      recruiterSummary: "Company-facing AI systems portfolio.",
      roles: [
        { id: "data-graph", title: "Data Specialist", businessSignal: "Data systems." },
        { id: "ai-dlc-mlops", title: "MLOps Engineer", businessSignal: "AI operations." },
        { id: "nlp-llm", title: "NLP Engineer", businessSignal: "NLP evaluation." }
      ]
    };

    const evidence = [
      {
        title: "Private Client Project",
        evidenceLevel: "Implemented",
        disclosureLevel: "Private / Mention Only"
      },
      {
        title: "Public Graph Project",
        evidenceLevel: "Implemented",
        disclosureLevel: "Public"
      }
    ];

    const view = buildRecruiterEntryView({
      profile,
      evidence,
      locale: "en"
    });

    expect(view.selectedEvidence).toHaveLength(1);
    expect(view.selectedEvidence[0].title).toBe("Public Graph Project");
  });

  it("fails when the top-level identity is missing", () => {
    expect(() =>
      buildRecruiterEntryView({
        profile: {
          roles: [
            { id: "data-graph" },
            { id: "ai-dlc-mlops" },
            { id: "nlp-llm" }
          ]
        },
        evidence: [],
        locale: "en"
      })
    ).toThrow("Recruiter entry requires a top-level identity.");
  });

  it("fails when exactly three role themes are not provided", () => {
    expect(() =>
      buildRecruiterEntryView({
        profile: {
          topLevelIdentity: "AI Systems Engineer",
          roles: [{ id: "data-graph" }]
        },
        evidence: [],
        locale: "en"
      })
    ).toThrow("Recruiter entry requires exactly three role themes.");
  });
});
```

## Behavioral Requirements Captured by the Tests

The tests capture four important rules:

1. The recruiter-facing entry must expose the top-level identity.
2. The entry must show exactly three equal role themes.
3. Private-only evidence must not appear in the recruiter preview.
4. The recruiter must have direct paths to the printable portfolio and resume.

## Notes for Future Implementation

- The view model builder should be implemented as plain TypeScript or JavaScript so it can be tested without rendering Astro components.
- Astro components should receive already-prepared view models where possible.
- Disclosure filtering should happen before evidence is shown in recruiter-facing previews.
- Evidence selection should later account for theme balance, not only array order.
- The production version may need localization-aware path helpers instead of hardcoded paths.

## Open Questions

- Should the selected evidence guarantee one item per role theme?
- Should "Prototype" evidence appear in the recruiter preview, or only in deeper pages?
- Should "Public Summary Only" evidence be visually marked in the preview?
- Should recruiter-facing preview selection be manually curated or generated from metadata?

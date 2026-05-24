import { defineCollection, z } from "astro:content";

const recognitionItemSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  date: z.union([z.string(), z.number()]).transform((value) => String(value)),
  description: z.string().optional(),
  bullets: z.array(z.string()).default([]),
  credentialLabel: z.string().optional(),
  credentialUrl: z.string().url().optional()
});

const portfolioMetricSchema = z.object({
  label: z.string(),
  value: z.string(),
  context: z.string().optional()
});

const portfolioArtifactSchema = z.object({
  label: z.string(),
  href: z.string().url(),
  kind: z.enum(["repo", "demo", "paper", "slides", "doc", "image", "video"]),
  description: z.string().optional()
});

const architectureNodeSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().optional(),
  kind: z.enum(["data", "model", "service", "evaluation", "storage", "interface"]).default("service")
});

const architectureLinkSchema = z.object({
  from: z.string(),
  to: z.string(),
  label: z.string().optional()
});

const portfolioProjectSchema = z.object({
  thesis: z.string(),
  value: z.string(),
  problem: z.string(),
  constraints: z.array(z.string()).default([]),
  decisions: z.array(
    z.object({
      label: z.string(),
      description: z.string(),
      rationale: z.string().optional()
    })
  ).default([]),
  architecture: z.object({
    summary: z.string(),
    nodes: z.array(architectureNodeSchema).default([]),
    links: z.array(architectureLinkSchema).default([])
  }).optional(),
  process: z.array(
    z.object({
      label: z.string(),
      description: z.string()
    })
  ).default([]),
  outcome: z.string(),
  metrics: z.array(portfolioMetricSchema).default([]),
  artifacts: z.array(portfolioArtifactSchema).default([]),
  reflection: z.string().optional(),
  relatedResearch: z.array(z.string()).default([])
});

const evidenceThemeSchema = z.enum(["data-graph", "aidlc-mlops", "nlp-llm"]);
const dataSurfaceSchema = z.enum(["structured", "text", "image", "graph", "hybrid"]);
const workflowStageSchema = z.enum([
  "data",
  "experiment",
  "training",
  "evaluation",
  "deployment",
  "inference",
  "observability",
  "feedback-recovery"
]);
const evidenceLevelSchema = z.enum(["Published", "Implemented", "Prototype", "Study", "In Progress"]);
const disclosureLevelSchema = z.enum(["Public", "Public Summary Only", "Sanitized", "Private / Mention Only"]);
const reviewerIntentWeightSchema = z.enum(["primary", "supporting", "related", "not-relevant"]);
const evidencePrioritySchema = z.object({
  global: z.number().int().default(100),
  home: z.number().int().optional(),
  portfolio: z.number().int().optional(),
  projects: z.number().int().optional(),
  resume: z.number().int().optional(),
  print: z.number().int().optional(),
  role: z.object({
    "data-graph": z.number().int().optional(),
    "aidlc-mlops": z.number().int().optional(),
    "nlp-llm": z.number().int().optional()
  }).default({})
}).default({});

const roleEvidenceSignalSchema = z.object({
  weight: z.enum(["primary", "supporting", "related", "not-relevant"]),
  rank: z.number().int().default(100),
  signal: z.string(),
  reviewerReason: z.string()
});

const evidenceMetadataSchema = z.object({
  primaryTheme: evidenceThemeSchema.optional(),
  secondaryThemes: z.array(evidenceThemeSchema).default([]),
  dataSurfaces: z.array(dataSurfaceSchema).default([]),
  workflowStages: z.array(workflowStageSchema).default([]),
  evidenceLevel: evidenceLevelSchema.default("Implemented"),
  disclosureLevel: disclosureLevelSchema.default("Public"),
  businessSignal: z.string().optional(),
  subtypes: z.array(z.string()).default([]),
  proofSentence: z.string().optional(),
  priority: evidencePrioritySchema,
  reviewerIntents: z.record(reviewerIntentWeightSchema).default({}),
  roleSignals: z.object({
    "data-graph": roleEvidenceSignalSchema.optional(),
    "aidlc-mlops": roleEvidenceSignalSchema.optional(),
    "nlp-llm": roleEvidenceSignalSchema.optional()
  }).default({})
}).default({});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    role: z.string(),
    roles: z.array(z.string()),
    type: z.string(),
    summary: z.string(),
    portfolioProblem: z.string().optional(),
    portfolioApproach: z.string().optional(),
    portfolioOutcome: z.string().optional(),
    portfolio: portfolioProjectSchema.optional(),
    evidence: evidenceMetadataSchema,
    resume: z.object({
      include: z.boolean().default(true),
      priority: z.number().int().default(100)
    }).default({}),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    metrics: z.array(z.string()).default([]),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    paperUrl: z.string().url().optional(),
    slidesUrl: z.string().url().optional()
  })
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    venue: z.string(),
    type: z.string(),
    contributionType: z.enum(["modeling", "evaluation", "alignment", "domain-nlp", "system-support", "literature-review"]).optional(),
    contributionClaim: z.string().optional(),
    methodSignal: z.string().optional(),
    portfolioRelevance: z.string().optional(),
    linkedRoles: z.array(evidenceThemeSchema).default([]),
    bibtex: z.string().optional(),
    abstract: z.string(),
    tags: z.array(z.string()),
    pdfUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    slidesUrl: z.string().url().optional(),
    linkedProjects: z.array(z.string()).default([])
  })
});

const archive = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    type: z.enum(["event", "thought", "note"]),
    summary: z.string(),
    context: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

const actionSchema = z.object({
  label: z.string(),
  href: z.string(),
  variant: z.enum(["primary", "secondary"]).default("secondary")
});

const sectionHeadingSchema = z.object({
  enabled: z.boolean().default(true),
  eyebrow: z.string(),
  title: z.string(),
  lead: z.string().optional()
});

const textCardSchema = z.object({
  title: z.string(),
  body: z.string(),
  label: z.string().optional(),
  href: z.string().optional(),
  ctaLabel: z.string().optional()
});

const pageHeroSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  description: z.string(),
  meta: z.array(z.string()).default([]),
  className: z.string().optional()
});

const pageContractSchema = z.object({
  userQuestion: z.string(),
  pageAnswer: z.string(),
  requiredEvidence: z.array(z.string()).default([]),
  nextPaths: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
      reason: z.string()
    })
  ).default([]),
  doNotRepeat: z.array(z.string()).default([])
});

const pageContractField = {
  contract: pageContractSchema.optional()
};

const globals = defineCollection({
  type: "data",
  schema: z.discriminatedUnion("globalType", [
    z.object({
      globalType: z.literal("site"),
      name: z.string(),
      shortName: z.string(),
      title: z.string(),
      description: z.string(),
      primaryRole: z.string(),
      secondaryRoles: z.array(z.string()),
      location: z.string(),
      email: z.string(),
      siteUrl: z.string(),
      nav: z.array(
        z.object({
          href: z.string(),
          label: z.string()
        })
      )
    }),
    z.object({
      globalType: z.literal("profile"),
      name: z.string(),
      headline: z.string(),
      intro: z.string(),
      summary: z.string(),
      philosophy: z.array(z.string()),
      capabilityGroups: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          skills: z.array(z.string())
        })
      ),
      pipeline: z.array(
        z.object({
          title: z.string(),
          emphasis: z.string(),
          description: z.string()
        })
      )
    }),
    z.object({
      globalType: z.literal("links"),
      externalProfiles: z.array(
        z.object({
          label: z.string(),
          href: z.string()
        })
      )
    }),
    z.object({
      globalType: z.literal("experience"),
      items: z.array(
        z.object({
          role: z.string(),
          organization: z.string(),
          period: z.string(),
          startDate: z.string().optional(),
          endDate: z.string().optional(),
          isCurrent: z.boolean().default(false),
          linkedEvidence: z.array(z.string()).default([]),
          category: z.enum(["research", "industry", "training", "leadership"]).optional(),
          bullets: z.array(z.string())
        })
      )
    }),
    z.object({
      globalType: z.literal("education"),
      items: z.array(
        z.object({
          school: z.string(),
          degree: z.string(),
          period: z.string(),
          startDate: z.string().optional(),
          endDate: z.string().optional(),
          isCurrent: z.boolean().default(false),
          linkedEvidence: z.array(z.string()).default([]),
          detail: z.string()
        })
      )
    }),
    z.object({
      globalType: z.literal("recognition"),
      certificates: z.array(recognitionItemSchema).default([]),
      awards: z.array(recognitionItemSchema).default([])
    })
  ])
});

const ui = defineCollection({
  type: "data",
  schema: z.object({
    header: z.object({
      resumeButtonLabel: z.string(),
      mobileToggleLabel: z.string()
    }),
    footer: z.object({
      summary: z.string()
    }),
    printLayout: z.object({
      mastheadLinks: z.array(
        z.object({
          href: z.string(),
          label: z.string()
        })
      )
    }),
    printToolbar: z.object({
      defaultLabel: z.string(),
      printButtonLabel: z.string()
    }),
    project: z.object({
      detailEyebrow: z.string(),
      backToListLabel: z.string(),
      quickPreviewLabel: z.string(),
      previewTitle: z.string(),
      closePreviewLabel: z.string(),
      openCaseStudyLabel: z.string(),
      openFullCaseStudyLabel: z.string(),
      readFullCaseStudyLabel: z.string(),
      caseStudyLabelPrefix: z.string(),
      fieldLabels: z.object({
        type: z.string(),
        year: z.string(),
        primaryRole: z.string(),
        roles: z.string(),
        problem: z.string(),
        approach: z.string(),
        outcome: z.string()
      }),
      linkLabels: z.object({
        repo: z.string(),
        demo: z.string(),
        paper: z.string(),
        slides: z.string()
      })
    }),
    research: z.object({
      detailEyebrow: z.string(),
      abstractEyebrow: z.string(),
      abstractPreviewLabel: z.string(),
      expandLabel: z.string(),
      openDetailLabel: z.string(),
      backToListLabel: z.string(),
      relatedProjectsEyebrow: z.string(),
      openRelatedProjectLabel: z.string(),
      fieldLabels: z.object({
        venue: z.string(),
        year: z.string(),
        type: z.string()
      }),
      linkLabels: z.object({
        pdf: z.string(),
        repo: z.string(),
        slides: z.string()
      })
    }),
    externalLinksAriaLabel: z.string()
  })
});

const pages = defineCollection({
  type: "data",
  schema: z.discriminatedUnion("pageType", [
    z.object({
      ...pageContractField,
      pageType: z.literal("home"),
      sectionOrder: z
        .array(
          z.enum([
            "hero",
            "pipeline",
            "featuredProjects",
            "researchPreview",
            "experienceSnapshot",
            "capabilityMap",
            "documents"
          ])
        )
        .default([
          "hero",
          "pipeline",
          "featuredProjects",
          "researchPreview",
          "experienceSnapshot",
          "capabilityMap",
          "documents"
        ]),
      hero: z.object({
        enabled: z.boolean().default(true),
        eyebrow: z.string(),
        summary: z.string(),
        actions: z.array(actionSchema).min(1),
        focusCard: z.object({
          label: z.string(),
          title: z.string(),
          body: z.string(),
          items: z.array(
            z.object({
              label: z.string(),
              value: z.string()
            })
          )
        })
      }),
      pipeline: sectionHeadingSchema,
      featuredProjects: sectionHeadingSchema.extend({
        count: z.number().int().positive().default(3)
      }),
      researchPreview: sectionHeadingSchema.extend({
        count: z.number().int().positive().default(3),
        ctaLabel: z.string().default("Read Research")
      }),
      experienceSnapshot: sectionHeadingSchema.extend({
        count: z.number().int().positive().default(3),
        ctaLabel: z.string().default("Open Full Resume")
      }),
      capabilityMap: sectionHeadingSchema,
      documents: sectionHeadingSchema.extend({
        cards: z.array(
          z.object({
            label: z.string(),
            title: z.string(),
            body: z.string(),
            href: z.string(),
            ctaLabel: z.string()
          })
        ).length(2)
      })
    }),
    z.object({
      ...pageContractField,
      pageType: z.literal("resume"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      printToolbarLabel: z.string(),
      printCv: z.object({
        includeProjects: z.boolean().default(false),
        keywords: z.array(z.string()).default([]),
        objective: z.string().optional(),
        additionalItems: z.array(
          z.object({
            label: z.string(),
            value: z.string()
          })
        ).default([])
      }).default({}),
      layout: z.object({
        leftColumn: z.array(z.enum(["summary", "experience", "projects"])),
        rightColumn: z.array(z.enum(["skills", "research", "education"]))
      }),
      sections: z.object({
        summary: z.object({
          enabled: z.boolean().default(true),
          title: z.string()
        }),
        experience: z.object({
          enabled: z.boolean().default(true),
          title: z.string(),
          count: z.number().int().positive().optional()
        }),
        projects: z.object({
          enabled: z.boolean().default(true),
          title: z.string(),
          count: z.number().int().positive().optional()
        }),
        skills: z.object({
          enabled: z.boolean().default(true),
          title: z.string()
        }),
        research: z.object({
          enabled: z.boolean().default(true),
          title: z.string(),
          count: z.number().int().positive().optional()
        }),
        education: z.object({
          enabled: z.boolean().default(true),
          title: z.string()
        })
      })
    }),
    z.object({
      ...pageContractField,
      pageType: z.literal("portfolio"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      printToolbarLabel: z.string(),
      hero: z.object({
        eyebrow: z.string(),
        title: z.string(),
        lead: z.string(),
        valueStatement: z.string(),
        actions: z.array(actionSchema).min(1)
      }).optional(),
      sectionHeadings: z.object({
        valueMap: sectionHeadingSchema.omit({ enabled: true }),
        aidlc: sectionHeadingSchema.omit({ enabled: true }).optional(),
        evidenceLibrary: sectionHeadingSchema.omit({ enabled: true }).optional(),
        outcomes: sectionHeadingSchema.omit({ enabled: true }),
        featuredCases: sectionHeadingSchema.omit({ enabled: true }),
        process: sectionHeadingSchema.omit({ enabled: true }),
        researchBridge: sectionHeadingSchema.omit({ enabled: true }),
        recognition: sectionHeadingSchema.omit({ enabled: true }),
        contact: sectionHeadingSchema.omit({ enabled: true })
      }).optional(),
      featuredCaseSlugs: z.array(z.string()).default([]),
      sections: z.array(
        z.enum([
          "valueMap",
          "aidlc",
          "evidenceLibrary",
          "outcomes",
          "featuredCases",
          "process",
          "researchBridge",
          "recognition",
          "contact"
        ])
      ).default([
        "valueMap",
        "outcomes",
        "featuredCases",
        "process",
        "researchBridge",
        "recognition",
        "contact"
      ]),
      print: z.object({
        enabled: z.boolean().default(true),
        label: z.string().default("Print Portfolio")
      }).default({}),
      web: z.object({
        pages: z.array(
          z.discriminatedUnion("kind", [
            z.object({
              kind: z.literal("philosophyCore"),
              eyebrow: z.string(),
              title: z.string(),
              coreDomainTitle: z.string()
            }),
            z.object({
              kind: z.literal("experience"),
              eyebrow: z.string(),
              title: z.string()
            }),
            z.object({
              kind: z.literal("projects"),
              eyebrow: z.string(),
              title: z.string()
            }),
              z.object({
                kind: z.literal("educationStudy"),
                eyebrow: z.string(),
                title: z.string(),
                educationTitle: z.string(),
                studyTitle: z.string(),
                studyItems: z.array(
                  z.object({
                    title: z.string(),
                    emphasis: z.string(),
                    description: z.string()
                  })
                ).default([])
              }),
            z.object({
              kind: z.literal("research"),
              eyebrow: z.string(),
              title: z.string()
            }),
            z.object({
              kind: z.literal("recognition"),
              eyebrow: z.string(),
              title: z.string(),
              certificateTitle: z.string(),
              awardTitle: z.string()
            })
          ])
        ).default([])
      }),
      cover: z.object({
        label: z.string(),
        title: z.string()
      }),
      overview: z.object({
        intro: z.object({
          enabled: z.boolean().default(true),
          title: z.string(),
          paragraphs: z.array(z.string()).min(1)
        }),
        capability: z.object({
          enabled: z.boolean().default(true),
          title: z.string()
        }),
        research: z.object({
          enabled: z.boolean().default(true),
          title: z.string()
        })
      }),
      recognition: z.object({
        certificates: z.array(recognitionItemSchema).default([]),
        awards: z.array(recognitionItemSchema).default([])
      }).optional(),
      selection: z.object({
        projectCount: z.number().int().nonnegative().default(2),
        caseStudyCount: z.number().int().nonnegative().default(3),
        researchCount: z.number().int().nonnegative().default(2),
        experienceCount: z.number().int().nonnegative().default(3),
        educationCount: z.number().int().nonnegative().default(1),
        studyCount: z.number().int().nonnegative().default(4),
        certificateCount: z.number().int().nonnegative().default(4),
        awardCount: z.number().int().nonnegative().default(2),
        selectedProjectSlugs: z.array(z.string()).default([])
      })
    }),
    z.object({
      ...pageContractField,
      pageType: z.literal("projects"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      hero: pageHeroSchema
    }),
    z.object({
      ...pageContractField,
      pageType: z.literal("research"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      hero: pageHeroSchema
    }),
    z.object({
      ...pageContractField,
      pageType: z.literal("about"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      sectionOrder: z.array(z.enum(["hero", "positioning", "gallery"])).default(["hero", "positioning", "gallery"]),
      hero: pageHeroSchema.omit({ meta: true, className: true }),
      positioning: sectionHeadingSchema.extend({
        cards: z.array(textCardSchema).default([])
      }).default({
        enabled: true,
        eyebrow: "Positioning",
        title: "How to read this page",
        cards: []
      }),
      gallery: z.object({
        enabled: z.boolean().default(true),
        title: z.string(),
        lead: z.string(),
        count: z.number().int().positive().default(12),
        types: z.array(z.enum(["event", "thought", "note"])).default(["event", "thought", "note"]),
        openEntryLabel: z.string().default("Open entry"),
        closeEntryLabel: z.string().default("Close")
      })
    }),
    z.object({
      ...pageContractField,
      pageType: z.literal("contact"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      sectionOrder: z.array(z.enum(["hero", "intents", "response", "links"])).default(["hero", "intents", "response", "links"]),
      hero: pageHeroSchema.omit({ meta: true, className: true }),
      intents: sectionHeadingSchema.extend({
        cards: z.array(textCardSchema).min(1)
      }),
      response: z.object({
        enabled: z.boolean().default(true),
        title: z.string(),
        body: z.string()
      }),
      cards: z.object({
        title: z.string().default("Contact Channels"),
        lead: z.string().optional(),
        emailLabel: z.string(),
        externalValueMode: z.enum(["href", "label"]).default("href")
      })
    }),
    z.object({
      ...pageContractField,
      pageType: z.literal("not-found"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      hero: z.object({
        eyebrow: z.string(),
        title: z.string(),
        description: z.string(),
        actions: z.array(actionSchema).min(1)
      })
    })
  ])
});

export const collections = { projects, research, archive, pages, globals, ui };

import { defineCollection, z } from "astro:content";

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
    abstract: z.string(),
    tags: z.array(z.string()),
    pdfUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    slidesUrl: z.string().url().optional(),
    linkedProjects: z.array(z.string()).default([])
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

const pageHeroSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  description: z.string(),
  meta: z.array(z.string()).default([]),
  className: z.string().optional()
});

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
          detail: z.string()
        })
      )
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
    documentLayout: z.object({
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
      pageType: z.literal("resume"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      printToolbarLabel: z.string(),
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
      pageType: z.literal("portfolio"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      printToolbarLabel: z.string(),
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
      selection: z.object({
        projectCount: z.number().int().positive().default(3),
        researchCount: z.number().int().positive().default(2),
        selectedProjectSlugs: z.array(z.string()).default([])
      })
    }),
    z.object({
      pageType: z.literal("projects"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      hero: pageHeroSchema
    }),
    z.object({
      pageType: z.literal("research"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      hero: pageHeroSchema
    }),
    z.object({
      pageType: z.literal("about"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      hero: pageHeroSchema.omit({ meta: true, className: true }),
      sections: z.object({
        positioningTitle: z.string(),
        philosophyTitle: z.string(),
        systemsTitle: z.string(),
        systemsBody: z.string()
      })
    }),
    z.object({
      pageType: z.literal("contact"),
      documentTitle: z.string(),
      documentDescription: z.string(),
      hero: pageHeroSchema.omit({ meta: true, className: true }),
      cards: z.object({
        emailLabel: z.string(),
        externalValueMode: z.enum(["href", "label"]).default("href")
      })
    }),
    z.object({
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

export const collections = { projects, research, pages, globals, ui };

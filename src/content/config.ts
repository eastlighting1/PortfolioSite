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
    })
  ])
});

export const collections = { projects, research, pages };

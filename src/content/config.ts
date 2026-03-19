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

export const collections = { projects, research };

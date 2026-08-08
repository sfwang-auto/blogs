import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()).default(["uncategorized"]),
    category: z.string().default("AI"),
    summary: z.string().optional(),
    lang: z.enum(["zh-CN", "en"]).default("zh-CN"),
    math: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };

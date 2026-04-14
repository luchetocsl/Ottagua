import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			summary: z.string().optional(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			slug: z.string().optional(),
			tags: z.array(z.string()).optional(),
			draft: z.union([z.string(), z.boolean()]).optional(),
		}),
});

export const collections = { blog };

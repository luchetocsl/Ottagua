// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
	storage: {
		kind: "cloud",
	},
	cloud: {
		project: "lucheto/ottagua",
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "src/content/blog/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				content: fields.document({
					label: "Content",
					formatting: true,
					dividers: true,
					links: true,
					images: true,
				}),
				description: fields.text({
					label: "Description",
					formatting: true,
				}),
				pubDate: fields.date({
					label: "pubDate",
					description: "The date of the event",
				}),
				heroImage: fields.image({
					label: "heroImage",
					directory: "public/images/heroImage/",
					publicPath: "/images/heroImage/",
				}),
			},
		}),
	},
});

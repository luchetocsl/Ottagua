import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://ottagua.com",
	adapter: cloudflare(),
	integrations: [
		lottie(),
		mdx(),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
			configFile: "./tailwind.config.js",
		}),
	],
});

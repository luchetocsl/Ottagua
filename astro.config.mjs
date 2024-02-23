import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://ottagua.com",
	output: "server",
	integrations: [lottie(), mdx(), sitemap()],
});

import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://ottagua.com",
	adapter: cloudflare(),
	integrations: [lottie(), mdx(), sitemap()],
});

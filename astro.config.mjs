import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
	site: "https://ottagua.com",
	output: "hybrid",
	integrations: [lottie(), mdx(), sitemap(), react(), markdoc(), keystatic()],
});

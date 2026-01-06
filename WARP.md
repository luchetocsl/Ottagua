# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Ottagua is a bilingual community website (Spanish/English) connecting Latino residents in the Ottawa-Gatineau region. Built with Astro 5, it features a blog system, email newsletter subscription, and event information. The site targets Spanish-speaking immigrants and is designed with a distinctive red (#f80b01) and cream (#f1f5e7) color scheme.

## Development Commands

### Core Commands

-   `npm run dev` - Start development server (alias: `npm start`)
-   `npm run build` - Build production site
-   `npm run preview` - Preview production build locally

### No Test Suite

This project does not have automated tests configured.

## Architecture

### Framework & Integrations

-   **Astro 5.16.5** with Static Site Generation (SSG)
-   **Integrations**: MDX, Lottie animations, RSS feed, Sitemap, Tailwind CSS
-   **Site URL**: https://ottagua.com

### Content Management

Blog content is managed through Astro Content Collections:

-   Content lives in `src/content/blog/` as `.mdx` files
-   Schema defined in `src/content/config.ts`
-   Required frontmatter: `title`, `description`, `pubDate`
-   Optional frontmatter: `updatedDate`, `heroImage`, `slug`, `tags`

### Routing Structure

-   `src/pages/index.astro` - Landing page (custom components from `_index/`)
-   `src/pages/blog/index.astro` - Blog listing with responsive grid (featured post spans 2 columns)
-   `src/pages/blog/[...slug].astro` - Dynamic blog post pages
-   `src/pages/rss.xml.js` - RSS feed generation

### Layout System

Three main layouts in `src/layouts/`:

-   `BaseLayout.astro` - Site wrapper with Header/Footer, cream background, max-width 2200px
-   `BlogPost.astro` - Full-width hero image (1800px), content max-width 1240px with prose styling
-   `Page.astro` - For static pages

### Styling Approach

-   **Tailwind CSS** with custom configuration (base styles disabled)
-   Global styles in `src/styles/global.css` define CSS custom properties
-   Custom colors: `red` (#f80b01), `red-accent` (#f85c4d), `cream` (var(--cream))
-   Typography: Bricolage Grotesque Variable for headings, Inter Variable for body
-   Tailwind Typography plugin with extensive prose customization in BlogPost layout
-   Root font-size: 18px, language: Spanish (es-Mx)

### Third-Party Integrations

-   **Plunk API** for newsletter subscriptions (requires `PLUNK_API_KEY` in `.env`)
-   **Google Tag Manager** (GTM-KJQQD8Z2) embedded in BaseLayout
-   **Umami Analytics** in homepage
-   Newsletter form in `SignupForm.astro` includes GSAP scroll animations

### Asset Organization

-   Images and Lottie animations in `src/assets/`
-   Lottie logo animation file: `ottagua-logo-motion.json`
-   Blog-specific images in `src/assets/blog/`

## Working with Blog Content

### Creating New Blog Posts

1. Create new `.mdx` file in `src/content/blog/`
2. Include required frontmatter (title, description, pubDate)
3. Add `heroImage` from `src/assets/blog/` for featured image
4. Use standard Markdown/MDX - all typography is styled via Tailwind Typography

### Blog Post Navigation

Posts include prev/next navigation via `BlogNavigation.astro` component, which requires `currentSlug` and `allPosts` props passed through the BlogPost layout.

## Environment Variables

Required in `.env`:

## Deployment Notes

-   Static site built to `dist/` directory
-   Site configuration in `astro.config.mjs` sets production URL
-   RSS feed auto-generated at `/rss.xml`
-   Sitemap auto-generated via @astrojs/sitemap integration

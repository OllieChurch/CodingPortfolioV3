# olliechurch.dev

Personal portfolio and blog built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and deployed on [Netlify](https://netlify.com).

## What's in here

- Home page with career timeline, tech stack, and a slot machine easter egg
- Markdown blog with optional header images and Open Graph meta tags
- Project showcase
- Contact page
- Dark theme throughout

## Tech stack

- Astro 5
- Tailwind CSS 4 (via Vite plugin)
- Netlify for hosting

## Getting started

```sh
npm install
npm run dev        # local dev server at localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview the production build locally
```

## Blog posts

Blog posts live in `src/content/blog/` as Markdown files. Frontmatter fields:

```yaml
title: "Post title"
date: 2026-01-01
description: "Short description for cards and OG tags"
tags: ["tag1", "tag2"]
published: true
image: "https://example.com/header.png"  # optional
```

Posts with an `image` will show it as a header on the post page and on post cards. It's also used as the Open Graph image when sharing links.

## Project structure

```
src/
├── components/     # Astro components (Navigation, PostCard, etc.)
├── content/        # Blog posts (Markdown) and project data (JSON)
├── data/           # Helper modules (nav links, post sorting, reading time)
├── layouts/        # BaseLayout with OG meta tags
├── pages/          # Routes (home, blog, work, contact, 404)
└── styles/         # Global CSS
```

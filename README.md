# Research Headquarters v2.0

This repository now includes a Next.js static-export platform designed as a long-horizon cybersecurity research headquarters.

## Platform Principles

- Built for depth, permanence and exploration.
- Content is relationship-first: research, technologies, projects and talks are connected through frontmatter metadata.
- Designed to scale to hundreds of entries over years, not a short-form feed.

## Stack

- Framework: Next.js App Router with static export
- Content: MDX in `content/`
- Metadata: YAML frontmatter
- Search: Pagefind (runs in `postbuild`)
- Hosting target: GitHub Pages compatible static output in `out/`

## Navigation Model

- Home
- Research
- Technologies
- Projects
- Talks
- About
- Search

## Content Structure

```
content/
	research/*.mdx
	technologies/*.mdx
	projects/*.mdx
	talks/*.mdx
```

Each MDX file should include frontmatter like:

```yaml
title: "Entry title"
summary: "One-line summary"
date: "2026-01-01"
technologies: ["oauth", "kubernetes"]
projects: ["signal-map"]
talks: ["identity-failures-2026"]
research: ["predicting-identity-boundary-collapse"]
references:
	- "RFC or paper"
evidence:
	- "Dataset or measurement"
```

## Commands

- `npm install --cache .npm-cache`
- `npm run dev`
- `npm run build`

`npm run build` will:

1. Generate static pages with Next.js
2. Export site to `out/`
3. Index search with Pagefind into `out/pagefind`

## Notes

- Legacy static HTML files remain in the repository for historical continuity.
- The new platform lives under `src/` with content in `content/`.

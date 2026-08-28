# Research articles

Drop a `.md` file into one of the category folders and it appears on the site automatically —
grouped under that category, sorted newest first, no other wiring required.

## Categories (folders)

- `infrastructure/`
- `cloud-containers/`
- `ai-security/`
- `offensive-security/`
- `scripts-tools/`

Adding a new category is just adding a new folder here and registering its display label in
`src/lib/research-content.ts`.

## Frontmatter

```
---
title: A JPEG that owns your Mac
date: 2026-05-25
summary: Optional one-line teaser; falls back to the first paragraph if omitted.
href: https://example.com/optional-external-link
hrefLabel: Optional label for the external link
---

Body in Markdown.
```

## Images

Put shared images in `assets/` and reference them in Markdown as `assets/filename.png`. Every
build copies this folder to `public/research-assets/` and rewrites the paths automatically —
no manual steps in `public/` needed.

## Scaffold a new entry

```bash
pnpm article "Title of the piece" --category cloud-containers
```

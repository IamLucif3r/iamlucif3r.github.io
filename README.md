# anmolsinghyadav.com

Personal branding website for **Anmol Singh Yadav** — Platform Security Engineer.

A premium, dark, single-narrative site: a provocative thesis, proof at production
scale, selected work, external recognition, and one calm call to get in touch.

## Stack

- **Next.js 15** (App Router) with **static export** (`output: 'export'`)
- **TypeScript**, **Tailwind CSS**
- **Framer Motion** (used only for the pinned proof + reveals)
- **Lucide** icons
- Self-hosted **Fraunces** (serif display) + **Geist** (sans / mono)
- Hosted on **GitHub Pages** at `anmolsinghyadav.com`

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static export to ./out
pnpm lint
```

## Structure

- `src/app` — routes: `/` (story), `/cv` (résumé), 404, sitemap, robots, OG image
- `src/components` — `ui` (primitives), `layout` (nav/footer), `motion`, `sections` (chapters)
- `src/content` — typed content, the single source of truth (from the CV)
- `src/config` — site metadata, nav, social links, SEO/JSON-LD
- `public` — `.nojekyll`, `CNAME`, images, favicon, résumé PDF

## Content

All copy lives in `src/content/*.ts` as typed objects. Editing the site means
editing data, not markup.

## To replace

- `public/resume/anmol-singh-yadav.pdf` — placeholder; drop in the real résumé.
- The pwnspectrum preview in the Work section is a stylised placeholder frame,
  not a screenshot.

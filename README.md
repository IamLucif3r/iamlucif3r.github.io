# anmolsinghyadav.com — v2

Personal site for **Anmol Singh Yadav** — AI Platform Security Engineer.

The site has two sides, each on its own route with its own theme:

| Side | Route | Theme | What it covers |
|---|---|---|---|
| **Work** | `/`, `/work/*`, `/cv/` | Light | The professional story: case studies from the day job (generalised, no internal numbers), expertise, experience, writing, résumé |
| **Lab** | `/lab/`, `/lab/notes/*` | Dark | The personal side: open-weight LLM research, side projects, research notes, small tools, CTF/community signals |

The **Work | Lab** switch in the nav is a real page navigation; supporting browsers animate it
with a cross-document view transition (circular wipe from the click point). `⌘K` / `Ctrl+K`
opens a command palette that searches both sides.

v1 is preserved at git tag `v1.0.3`.

## Stack

- **Next.js 15** (App Router) with **static export** (`output: 'export'`)
- **TypeScript**, **Tailwind CSS** (colour tokens as CSS variables in `src/styles/globals.css`)
- **Framer Motion** via `LazyMotion` (`m.*` components only)
- **Geist Sans / Geist Mono**, **Lucide** icons, **marked** for notes
- Hosted on **GitHub Pages** at `anmolsinghyadav.com` (deploys from `main`)

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static export to ./out
pnpm lint
pnpm article "Title" --category ai-security   # scaffold a lab note
```

## Structure

- `src/app/(work)` — work side: `/`, `/cv/`, `/work/[slug]/`
- `src/app/lab` — lab side: `/lab/`, `/lab/notes/[slug]/`, `/lab/feed.xml`
- `src/components` — `layout` (nav, footer, side switch), `work`, `lab`, `ui`, `motion`, `command-palette`
- `src/content/work` · `src/content/lab` · `src/content/resume.ts` — typed content, the single source of truth
- `content/research/<category>/*.md` — lab notes (frontmatter + Markdown)
- `src/config` — site metadata, nav, social links, SEO/JSON-LD

## Content rules

- **Work side is public-safe.** Internal figures are generalised ("fleet-wide", "hundreds of
  repositories", "thousands → hundreds"). Never paste exact internal numbers into `src/content/work`.
- **Lab notes** support `draft: true` in frontmatter to hide a note without deleting it.
- `src/content/lab/identity.ts` has a dated `/now` block — update `updated` when you change it.

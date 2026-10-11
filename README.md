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

## Run it locally

Prerequisites: **Node 22** (matches CI; see `.nvmrc`), **pnpm**, and **python3** (only for `make serve`).

```bash
make install    # pnpm install --frozen-lockfile
make dev        # hot-reload dev server → http://localhost:3000
make preview    # production static build, served → http://localhost:4173
```

Run `make` on its own to list every target:

| Target | What it does |
|---|---|
| `make dev` | Dev server with hot reload. `PORT=4000 make dev` to change port |
| `make build` | Static export to `./out` (includes lint + type check) |
| `make preview` | `build`, then serve `./out` — closest thing to production |
| `make serve` | Serve the existing `./out` without rebuilding |
| `make check` | `lint` + `typecheck` + `build` — what CI needs to pass |
| `make lint` / `make typecheck` / `make format` | Individual checks; `format` writes Prettier fixes |
| `make article TITLE="…" CATEGORY=ai-security` | Scaffold a new lab note |
| `make clean` / `make reinstall` | Remove `.next` + `out` / fresh `node_modules` |
| `make doctor` | Check Node/pnpm/python and the environment problems below |

`./dev.sh` still works and simply runs `make dev` (or `./dev.sh preview`).

### Troubleshooting

- **`TypeError: localStorage.getItem is not a function` on Node 25+.** Node 25 ships a
  half-implemented global `localStorage`. The Makefile sets
  `NODE_OPTIONS=--no-experimental-webstorage`, which fixes it; if you run `next` directly, set it
  yourself or use Node 22.
- **Build, lint, or `git` hang with almost no CPU.** The repo lives in iCloud-synced
  `~/Documents`, and iCloud has offloaded files in `node_modules` / `.pnpm-store` ("dataless").
  Every read waits for a download. `make doctor` detects this. Fix: move the repo out of
  `~/Documents` / `~/Desktop` (or turn off "Optimize Mac Storage"), then `make reinstall`.
- **`next build` stalls right at the start.** A `package-lock.json` in a parent folder (e.g.
  `~/package-lock.json`) makes Next try to patch it over the network. The Makefile sets
  `NEXT_IGNORE_INCORRECT_LOCKFILE=1`; deleting the stray file also works.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml` (Node 22, `pnpm build`, upload `./out` to
GitHub Pages). Run `make check` before pushing — it is the same build CI runs.

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

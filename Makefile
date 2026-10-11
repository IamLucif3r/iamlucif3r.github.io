# anmolsinghyadav.com — local workflow
#
#   make            list targets
#   make install    install dependencies
#   make dev        dev server with hot reload   → http://localhost:3000
#   make preview    production build, served     → http://localhost:4173
#   make check      lint + typecheck + build (what CI needs to pass)
#
# Works with GNU Make 3.81 (the macOS default).

PORT         ?= 3000
PREVIEW_PORT ?= 4173
NEXT         := ./node_modules/.bin/next

# Node 25+ exposes a half-implemented global `localStorage` (no getItem), which
# crashes `next dev` with "localStorage.getItem is not a function". Turning the
# experimental Web Storage off is harmless on Node 22 (what CI uses).
export NODE_OPTIONS := --no-experimental-webstorage $(NODE_OPTIONS)
export NEXT_TELEMETRY_DISABLED := 1
# A package-lock.json anywhere above the repo (e.g. ~/package-lock.json) makes
# `next build` try to "patch" it over the network, which can hang the build.
export NEXT_IGNORE_INCORRECT_LOCKFILE := 1

.DEFAULT_GOAL := help
.PHONY: help install dev build preview serve lint typecheck check format article clean reinstall doctor

help: ## List available targets
	@echo "Usage: make <target> [PORT=3000] [PREVIEW_PORT=4173]"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*## "}; {printf "  \033[36m%-11s\033[0m %s\n", $$1, $$2}'

node_modules: package.json pnpm-lock.yaml
	pnpm install --frozen-lockfile
	@touch node_modules

install: node_modules ## Install dependencies (frozen lockfile, same as CI)

dev: node_modules ## Dev server with hot reload (PORT, default 3000)
	$(NEXT) dev -p $(PORT)

build: node_modules ## Static export to ./out (runs lint + type check)
	$(NEXT) build

preview: build serve ## Production build, then serve ./out (PREVIEW_PORT, default 4173)

serve: ## Serve the existing ./out over HTTP (no rebuild)
	@test -d out || { echo "No ./out yet — run 'make build' first."; exit 1; }
	@lsof -tiTCP:$(PREVIEW_PORT) -sTCP:LISTEN 2>/dev/null | xargs kill 2>/dev/null || true
	@echo "Serving ./out at http://localhost:$(PREVIEW_PORT)  (Ctrl+C to stop)"
	@python3 -m http.server $(PREVIEW_PORT) --directory out

lint: node_modules ## ESLint (next lint)
	$(NEXT) lint

typecheck: node_modules ## TypeScript, no emit
	./node_modules/.bin/tsc --noEmit

check: lint typecheck build ## Everything CI needs to pass

format: node_modules ## Prettier, write in place
	./node_modules/.bin/prettier --write .

article: ## New lab note: make article TITLE="My note" CATEGORY=ai-security
	@test -n "$(TITLE)" -a -n "$(CATEGORY)" || { \
	  echo 'Usage: make article TITLE="My note" CATEGORY=<infrastructure|cloud-containers|ai-security|offensive-security|scripts-tools>'; exit 1; }
	node scripts/new-article.mjs "$(TITLE)" --category $(CATEGORY)

clean: ## Remove build output (.next, out)
	rm -rf .next out

reinstall: ## Fresh dependency install (removes node_modules)
	rm -rf node_modules
	pnpm install --frozen-lockfile

doctor: ## Check the local toolchain and common environment problems
	@echo "node   $$(node -v 2>/dev/null || echo 'missing')   (CI uses Node 22 — see .nvmrc)"
	@echo "pnpm   $$(pnpm -v 2>/dev/null || echo 'missing')"
	@echo "python $$(python3 --version 2>/dev/null | cut -d' ' -f2 || echo 'missing')   (used by 'make serve')"
	@case "$$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null)" in \
	  22) ;; \
	  *) echo "note:  CI builds with Node 22; other versions usually work but aren't what ships." ;; \
	esac
	@lockdir="$$(cd .. && pwd)"; while [ "$$lockdir" != "/" ]; do \
	  if [ -f "$$lockdir/package-lock.json" ]; then echo "warn:  stray $$lockdir/package-lock.json (handled by NEXT_IGNORE_INCORRECT_LOCKFILE; safe to delete if unused)"; fi; \
	  lockdir="$$(dirname "$$lockdir")"; done
	@if [ -n "$$(find node_modules .pnpm-store -type f -flags +dataless 2>/dev/null | head -1)" ]; then \
	  echo "warn:  dependencies are offloaded by iCloud ('dataless' files) — builds will stall."; \
	  echo "       Move the repo out of ~/Documents or ~/Desktop, then run 'make reinstall'."; \
	else echo "ok:    dependencies are on local disk"; fi

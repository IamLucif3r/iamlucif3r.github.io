#!/bin/sh
# Kept for muscle memory — the Makefile is the source of truth now.
#   ./dev.sh          → make dev      (hot reload, http://localhost:3000)
#   ./dev.sh preview  → make preview  (production build, http://localhost:4173)
set -e
cd "$(dirname "$0")"
exec make "${1:-dev}"

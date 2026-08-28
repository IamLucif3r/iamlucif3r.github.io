#!/bin/sh
# next dev is broken in this sandbox (localStorage.getItem TypeError), so the
# working dev loop is: static-export build, then serve out/ over plain HTTP.
# Re-run this script after each change to rebuild and refresh.
set -e

PORT="${PORT:-4173}"
cd "$(dirname "$0")"

# free up the port in case a previous run's server is still bound to it
lsof -tiTCP:"${PORT}" -sTCP:LISTEN 2>/dev/null | xargs kill -9 2>/dev/null || true

./node_modules/.bin/next build

echo ""
echo "Serving http://localhost:${PORT}"
cd out && python3 -m http.server "$PORT"

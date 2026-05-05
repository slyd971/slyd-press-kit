#!/usr/bin/env bash
set -euo pipefail

client="${1:-}"

case "$client" in
  djslyd)
    project="slyd-press-kit"
    ;;
  silver-dj)
    project="silver-dj"
    ;;
  arthur-chaps)
    project="arthur-chaps-presskit"
    ;;
  yoruboy-dj)
    project="yoruboy-dj-presskit"
    ;;
  *)
    echo "Usage: $0 <djslyd|silver-dj|arthur-chaps|yoruboy-dj>" >&2
    exit 2
    ;;
esac

backup="$(mktemp)"
cp .vercelignore "$backup"

restore_vercelignore() {
  cp "$backup" .vercelignore
  rm -f "$backup"
}
trap restore_vercelignore EXIT

node scripts/check-client-assets.mjs "$client" --deploy-check
node scripts/check-client-assets.mjs "$client" --print-vercelignore > .vercelignore

vercel link --yes --project "$project"
vercel deploy --prod

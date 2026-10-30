#!/bin/bash
# Generates the 1920px-wide "<name>-1920.jpg" variant for every 4K photo master in the folders below.
# The site serves the 1920px file to phones/laptops and the 4K master to large/high-DPI screens (srcset).
# Usage: npm run images   (macOS: uses the built-in `sips`; no extra tools needed)
set -e
cd "$(dirname "$0")/.."
for dir in public/images/hero public/images/facilities public/images/gallery public/images/institute; do
  [ -d "$dir" ] || continue
  for f in "$dir"/*.jpg; do
    [ -e "$f" ] || continue
    case "$f" in *-1920.jpg) continue;; esac
    out="${f%.jpg}-1920.jpg"
    w=$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth/{print $2}')
    if [ "${w:-0}" -le 1920 ]; then
      # Not a 4K master. If a stale -1920 variant exists (e.g. a placeholder replaced by a real photo), keep srcset in sync by copying.
      if [ -e "$out" ] && ! cmp -s "$f" "$out"; then cp "$f" "$out"; echo "copied $f -> $out (${w}px wide)"; else echo "skip $f (${w:-?}px wide, not a 4K master)"; fi
      continue
    fi
    if [ ! -e "$out" ] || [ "$f" -nt "$out" ]; then
      sips --resampleWidth 1920 -s format jpeg -s formatOptions 82 "$f" --out "$out" >/dev/null
      echo "made $out"
    fi
  done
done
echo "done"

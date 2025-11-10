#!/usr/bin/env bash
# Usage: chmod +x txttojson.sh
# ./txttojson.sh words.txt words-to-replace.json
set -euo pipefail

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 words.txt words-to-replace.json"
  exit 1
fi

input="$1"
output="$2"

if [ ! -f "$input" ]; then
  echo "Input file '$input' not found"
  exit 1
fi

if ! command -v jq >/dev/null 2>&1; then
  echo "Error: 'jq' is required but not installed."
  exit 1
fi

tmp_norm="$(mktemp)"

# Normalize input into a JSON array in $tmp_norm
tr '\t' '\n' < "$input" | while IFS= read -r line || [ -n "$line" ]; do
  line="${line#"${line%%[![:space:]]*}"}"
  line="${line%"${line##*[![:space:]]}"}"

  if [ -n "$line" ]; then
    line="$(printf '%s' "$line" | tr -s ' ')"
  fi

  # Skip empty after cleanup
  [ -z "$line" ] && continue

  printf '%s\n' "$line"
done | jq -R -s '
  split("\n")
  | map(select(length > 0))
' > "$tmp_norm"

# Merge with existing JSON

if [ -f "$output" ]; then
  jq -s '
    (.[0].Words // []) as $existing |
    (.[1] // [])        as $new      |
    { Words: ($existing + $new | unique) }
  ' "$output" "$tmp_norm" > "${output}.tmp"

  mv "${output}.tmp" "$output"
else
  jq -s '
    (.[0] // []) as $new |
    { Words: ($new | unique) }
  ' "$tmp_norm" > "$output"
fi

rm -f "$tmp_norm"

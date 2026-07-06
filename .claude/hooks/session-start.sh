#!/bin/bash
# SessionStart hook: install the ui-ux-pro-max skill bundle at user level
# (~/.claude/skills) so it's available to Claude in every web session on this
# repo. Runs only in Claude Code on the web (ephemeral container). Idempotent.
set -euo pipefail

# Only run in the remote (web) environment; local machines install skills their
# own way and we don't want to touch a developer's ~/.claude.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

SKILLS_DIR="${HOME}/.claude/skills"
SENTINEL="${SKILLS_DIR}/ui-ux-pro-max/SKILL.md"
REPO_URL="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git"

# Already installed in this container? Nothing to do.
if [ -f "$SENTINEL" ]; then
  echo "ui-ux-pro-max: already installed at ${SKILLS_DIR}" >&2
  exit 0
fi

mkdir -p "$SKILLS_DIR"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "ui-ux-pro-max: installing skill bundle into ${SKILLS_DIR} ..." >&2
git clone --depth 1 "$REPO_URL" "$TMP" >&2

# Copy every skill the plugin bundles (ui-ux-pro-max, ui-styling, design,
# design-system, brand, slides, banner-design).
cp -a "$TMP"/.claude/skills/. "$SKILLS_DIR"/

# Strip build/cache/coverage junk so it stays lean.
find "$SKILLS_DIR" -type d -name '__pycache__'   -prune -exec rm -rf {} + 2>/dev/null || true
find "$SKILLS_DIR" -type d -name '.pytest_cache'  -prune -exec rm -rf {} + 2>/dev/null || true
find "$SKILLS_DIR" -type f \( -name '*.pyc' -o -name '.coverage' \) -delete 2>/dev/null || true

echo "ui-ux-pro-max: install complete." >&2

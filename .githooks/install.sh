#!/bin/bash
#
# Install bd git hooks for this repository
#
# This configures git to use .githooks/ instead of .git/hooks/
# (local to this repository only)

set -e

cd "$(git rev-parse --show-toplevel)"

echo "Installing bd git hooks..."

# Set hooks path to .githooks (local to this repo)
git config --local core.hooksPath .githooks

echo "✓ Git hooks installed"
echo ""
echo "Hooks configured:"
echo "  pre-commit  - Flushes bd changes to JSONL before commit"
echo "  post-merge  - Imports JSONL changes after git pull/merge"

# Git Hooks for bd (beads)

These hooks ensure bd issue changes are always synced with your git commits.

## Setup

After cloning this repo on a new machine, run:

```bash
.githooks/install.sh
```

This configures git to use these hooks (local to this repository only).

## What the hooks do

- **pre-commit** - Automatically flushes pending bd changes to `.beads/issues.jsonl` before each commit
- **post-merge** - Automatically imports JSONL changes after `git pull` or merge

## Manual installation

If you prefer to do it manually:

```bash
git config --local core.hooksPath .githooks
```

## Uninstall

To stop using these hooks:

```bash
git config --unset core.hooksPath
```

# Melbourne Disc Golf Club website rebuild

## Project Overview

This project involves building a new modern website for the Melbourne Disc Golf Club (MDGC) to replace their existing WordPress site.

## Project Structure
```
website/
├── src/
│   ├── components/
│   │   ├── Navigation.astro    # Main navigation with dropdowns
│   │   ├── BoardMember.astro   # Board member profile component
│   │   ├── Course.astro        # Course information component
│   │   └── Welcome.astro       # Welcome section component
│   ├── layouts/
│   │   └── Layout.astro        # Base layout template
│   ├── pages/
│   │   ├── index.astro         # Homepage with hero section
│   │   ├── disc-golf/
│   │   │   ├── index.astro     # What is Disc Golf?
│   │   │   └── new-players.astro # New Player Essentials
│   │   ├── courses/
│   │   │   ├── index.astro     # Melbourne courses
│   │   │   ├── victoria.astro  # Other Victorian courses
│   │   │   └── australia.astro # Australia & overseas
│   │   ├── club/
│   │   │   ├── index.astro     # About MDGC
│   │   │   ├── membership.astro # Membership information
│   │   │   ├── contact.astro   # Contact details
│   │   │   └── board.astro     # Board member profiles
│   │   ├── events/
│   │   │   └── index.astro     # Social days and events
│   │   └── shop.astro          # Equipment and merchandise
│   └── styles/
│       └── global.css
└── existing-site/              # Documentation of original site (reference)
    ├── _navbar.md              # Original navigation structure
    ├── index.md                # Original homepage content
    ├── about/, melbourne-courses/, events/, media/
```

## Existing site

The existing (Wordpress-based) website is hosted at https://www.melbournediscgolf.com/.

The [`existing-site/`](existing-site/) directory contains a "sketch" of that existing site, including key content.

## Approach

- Use a static site, for runtime simplicity and performance.
- Design should be responsive, mobile-first.
- Use clean, accessible, semantic HTML.
- Make it as easy as possible for non-technical club members to manage content.
  - use Astro components and/or "content collections" for consistency

## Writing style

- In headings, use sentence case, not title case.
  - e.g. "What you get" rather than "What You Get"

## Tech stack

- manage website source in Git (on GitHub)
- use [Astro](https://astro.build/) as a static site generator
- use [Tailwind CSS](https://tailwindcss.com/) for styling
- deploy to [Netlify](https://www.netlify.com/)
- use Decap CMS to manage content of some pages (courses, events)

## Site structure

We have structured the new site into these sections:

- **Disc Golf**: information about the sport of disc golf
- **Club**: information about the club, and how it operates
- **Courses**: information on where to play, in Melbourne
- **Events**: information about when to play with others - social days and tournaments
- **Shop**: buying discs etc (link to external shop site)

## Working on this project

Dear agent: when working with humans on this project, please:

- Explain the changes you make: why you decided to do them, and how they work.
- Don't commit changes to Git without checking first.

## Status

To determine (or update) current status, see

- the "Project Status" section in the README.md
- "bd" issues (see below)

## Issue Tracking with bd (beads)

**IMPORTANT**: This project uses **bd (beads)** for ALL issue tracking. Do NOT use markdown TODOs, task lists, or other tracking methods.

### Why bd?

- Dependency-aware: Track blockers and relationships between issues
- Git-friendly: Auto-syncs to JSONL for version control
- Agent-optimized: JSON output, ready work detection, discovered-from links
- Prevents duplicate tracking systems and confusion

### Quick Start

**Check for ready work:**
```bash
bd ready --json
```

**Create new issues:**
```bash
bd create "Issue title" -t bug|feature|task -p 0-4 --json
bd create "Issue title" -p 1 --deps discovered-from:bd-123 --json
```

**Claim and update:**
```bash
bd update bd-42 --status in_progress --json
bd update bd-42 --priority 1 --json
```

**Complete work:**
```bash
bd close bd-42 --reason "Completed" --json
```

### Issue Types

- `bug` - Something broken
- `feature` - New functionality
- `task` - Work item (tests, docs, refactoring)
- `epic` - Large feature with subtasks
- `chore` - Maintenance (dependencies, tooling)

### Priorities

- `0` - Critical (security, data loss, broken builds)
- `1` - High (major features, important bugs)
- `2` - Medium (default, nice-to-have)
- `3` - Low (polish, optimization)
- `4` - Backlog (future ideas)

### Workflow for AI Agents

1. **Check ready work**: `bd ready` shows unblocked issues
2. **Claim your task**: `bd update <id> --status in_progress`
3. **Work on it**: Implement, test, document
4. **Discover new work?** Create linked issue:
   - `bd create "Found bug" -p 1 --deps discovered-from:<parent-id>`
5. **Complete**: `bd close <id> --reason "Done"`

### Auto-Sync

bd automatically syncs with git:
- Exports to `.beads/issues.jsonl` after changes (5s debounce)
- Imports from JSONL when newer (e.g., after `git pull`)
- No manual export/import needed!

### MCP Server (Recommended)

If using Claude or MCP-compatible clients, install the beads MCP server:

```bash
pip install beads-mcp
```

Add to MCP config (e.g., `~/.config/claude/config.json`):
```json
{
  "beads": {
    "command": "beads-mcp",
    "args": []
  }
}
```

Then use `mcp__beads__*` functions instead of CLI commands.

### Important Rules

- ✅ Use bd for ALL task tracking
- ✅ Always use `--json` flag for programmatic use
- ✅ Link discovered work with `discovered-from` dependencies
- ✅ Check `bd ready` before asking "what should I work on?"
- ❌ Do NOT create markdown TODO lists
- ❌ Do NOT use external issue trackers
- ❌ Do NOT duplicate tracking systems

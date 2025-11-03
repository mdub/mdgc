# Issue tracking

**IMPORTANT**: This project tracks issues in markdown files in the `docs/issues/` directory.

## Format

Each issue is stored in `docs/issues/issue-{nnn}.md` (zero-padded 3-digit number) with this format:

```markdown
# issue-016: Support announcement banners on homepage 🔲

```yaml
status: open
priority: medium
type: feature
created: 2025-10-27
updated: 2025-10-27
depends_on: issue-005  # optional: single dependency
# or for multiple dependencies:
# depends_on:
#   - issue-003
#   - issue-008
```

Description of the issue...

## Design

Design notes (optional)...

## Acceptance criteria

Acceptance criteria (optional)...

## Notes

Additional notes (optional)...
```

## Status values and emoji

- `open` 🔲 - Not started
- `in_progress` 🚧 - Currently being worked on
- `closed` ✅ - Completed

## Priority values

- `critical` - Security, data loss, broken builds
- `high` - Major features, important bugs
- `medium` - Default, nice-to-have
- `low` - Polish, optimization
- `backlog` - Future ideas

## Type values

- `bug` - Something broken
- `feature` - New functionality
- `task` - Work item (tests, docs, refactoring)
- `epic` - Large feature with subtasks
- `chore` - Maintenance (dependencies, tooling)

## Finding issues

**List all open issues:**
```bash
rg "^# issue-.*🔲" docs/issues/
```

**List in-progress issues:**
```bash
rg "^# issue-.*🚧" docs/issues/
```

**Search by keyword:**
```bash
rg -i "announcement" docs/issues/
```

## Working with issues

1. **Find work**: Browse `docs/issues/` or search with `rg`
2. **Claim a task**: Edit the file, change status to `in_progress`, add 🚧 emoji
3. **Work on it**: Implement, test, document
4. **Add notes**: Add a `## Notes` section with progress updates
5. **Complete**: Change status to `closed`, add ✅ emoji, update `updated` date

## Creating new issues

Create a new file `docs/issues/issue-{nnn}.md` following the format above. Use the next available number (zero-padded to 3 digits).

## Handling Git conflicts

Since each issue is a separate file, conflicts are rare. When they do occur:

**Most common conflict**: Two people update the same issue (e.g., both add notes or change status)
- **Resolution**: Review both versions and merge the changes manually
- The YAML frontmatter is small and easy to reconcile
- Notes sections can usually be combined

**Numbering conflicts**: Two people create issues with the same number
- **Resolution**: Rename one of the conflicting files to the next available number
- Update the heading in the renamed file to match the new number
- This is rare and easy to fix when merging

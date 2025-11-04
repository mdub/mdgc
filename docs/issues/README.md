# Issue tracking

**IMPORTANT**: This project tracks issues in markdown files in the `docs/issues/` directory.

## Format

Each issue is stored in `docs/issues/issue-{nnn}.md` (zero-padded 3-digit number) with this format:

```markdown
# issue-016: Support announcement banners on homepage 🔲

Description of the issue...
```

If the issue has dependencies, include a YAML frontmatter block:

```markdown
# issue-007: Document contributor workflow 🔲

```yaml
depends_on:
  - issue-005
  - issue-031
```

Description...
```

Optional sections:
- `## Design` - Design notes
- `## Acceptance criteria` - What "done" looks like
- `## Notes` - Progress updates, findings

## Status (emoji in heading)

- 🔲 `open` - Not started
- 🚧 `in_progress` - Currently being worked on
- ✅ `closed` - Completed

The emoji in the heading is the single source of truth for status.

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
2. **Claim a task**: Change emoji in heading from 🔲 to 🚧
3. **Work on it**: Implement, test, document
4. **Add notes**: Add a `## Notes` section with progress updates
5. **Complete**: Change emoji in heading from 🚧 to ✅

**Note**: Git commit history provides all dates (creation, updates, closing).

## Creating new issues

Create a new file `docs/issues/issue-{nnn}.md` following the format above. Use the next available number (zero-padded to 3 digits).

## Handling Git conflicts

Since each issue is a separate file, conflicts are rare. When they do occur:

**Duelling changes**: Two people update the same issue (e.g., both add notes or change status)
- **Resolution**: Review both versions and merge the changes manually
- The YAML frontmatter is small and easy to reconcile
- Notes sections can usually be combined

**Numbering conflicts**: Two people create issues with the same number
- **Resolution**: Rename one of the conflicting files to the next available number
- Update the heading in the renamed file to match the new number
- This is rare and easy to fix when merging

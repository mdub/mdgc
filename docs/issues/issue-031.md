# issue-031: Explore Sveltia CMS as alternative to Decap CMS 🚧

```yaml
status: in_progress
priority: low
type: task
created: 2025-10-31
updated: 2025-11-01
```

Investigate Sveltia CMS (https://sveltia.com) as a potential replacement for Decap CMS. Initial approach: deploy Sveltia alongside Decap to evaluate it without disrupting existing setup. Compare features, performance, and user experience.

## Notes

Implementation complete. Changes made:
1. Created Sveltia CMS setup at public/admin/sveltia.html (main admin stays as Decap)
2. Cleaned up Netlify Identity scripts (using GitHub OAuth via Cloudflare)
3. Created evaluation doc at docs/sveltia-cms-evaluation.md
4. Build verified successfully

Sveltia CMS is now available at /admin/sveltia.html for evaluation alongside the existing Decap CMS at /admin/. This allows testing without disrupting the main CMS workflow.

Next step: Deploy and test Sveltia via /admin/sveltia.html to evaluate before making it the default.

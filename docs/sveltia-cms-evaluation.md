# Sveltia CMS evaluation

## What is Sveltia CMS?

Sveltia CMS is a modern, lightweight Git-based headless CMS built as a complete rewrite of Netlify/Decap CMS. It's designed as a drop-in replacement with significant improvements in performance, user experience, and features.

## Key advantages over Decap CMS

### Performance & Architecture
- Built with Svelte instead of React (no virtual DOM overhead)
- Bundle size under 500 KB (vs 1.5 MB for Decap CMS)
- Uses GraphQL APIs for faster content fetching and instant search

### User Experience
- Modern interface with full viewport utilization
- Immersive dark mode support
- Mobile and tablet optimization with touch-friendly features
- Drag-and-drop file uploads

### Internationalization
- First-class i18n support built into the core
- One-click field translation using integrated services
- Localized entry slug support

### Developer Experience
- Works with local Git repositories without proxy servers
- No npm dependencies when installed
- Comprehensive TypeScript support
- JSON schema for configuration validation

### Security
- Automatic GPG signing of GitHub commits
- Regular dependency updates and vulnerability scanning

### Bug Fixes
- Has already solved over 265 issues reported in the Netlify/Decap CMS repository

## Implementation

Sveltia CMS is a true drop-in replacement - we only need to change the script tag in the admin page.

### Changes made

1. **Backed up Decap CMS**: Created `public/admin/decap.html` with the original Decap CMS setup
2. **Updated main admin**: Changed `public/admin/index.html` to load Sveltia CMS instead
3. **Created dedicated Sveltia page**: Added `public/admin/sveltia.html` for testing

### Configuration

The existing `public/admin/config.yml` works without any changes. Sveltia CMS uses the same configuration format as Decap CMS.

### Access URLs (after deployment)

- **Sveltia CMS (new default)**: https://mdgc.pages.dev/admin/ or https://mdgc.pages.dev/cms
- **Sveltia CMS (explicit)**: https://mdgc.pages.dev/admin/sveltia.html
- **Decap CMS (fallback)**: https://mdgc.pages.dev/admin/decap.html

## Testing plan

To properly evaluate Sveltia CMS, we should test:

1. **Authentication**: Verify GitHub OAuth login works
2. **Content editing**: Edit an existing course or board member
3. **Image management**: Upload and manage images
4. **Content creation**: Create a new course entry
5. **User experience**: Evaluate the interface, especially on mobile
6. **Performance**: Compare load times and responsiveness vs Decap CMS

## Limitations

- **Subfolder navigation**: Media library subfolder browsing not available until Sveltia CMS 2.0 (early 2026)
- **Beta status**: Currently in public beta, v1.0 planned for early 2026
- **Tilde path prefix issue**: When `public_folder` is set to `~/assets/images`, Sveltia CMS prepends an extra `/` when replacing images, resulting in `/~/assets/images/...` instead of `~/assets/images/...`. This breaks Astro's image imports which expect the `~` prefix to resolve relative to src/.

## Recommendation

Sveltia CMS appears to be a significant upgrade over Decap CMS with:
- Better performance
- More modern UI
- Active development and bug fixes
- Generally good compatibility

### Current Issues

**Image path handling**: There's a bug where Sveltia CMS doesn't properly handle the `~/` prefix in `public_folder`. When replacing images, it writes `/~/assets/images/...` instead of `~/assets/images/...`, which breaks Astro's image imports.

**Workarounds**:
1. **Use Decap CMS for image uploads/replacements** (at `/admin/`) and Sveltia for other editing
2. **Manually fix paths** after replacing images in Sveltia (remove the leading `/`)
3. **Report the bug** to Sveltia CMS and wait for a fix
4. **Restructure the project** to not use the `~` prefix (significant refactoring required)

### Testing Outcome

✅ Authentication works perfectly
✅ Content editing works well
✅ Media library displays correctly
❌ Image replacement adds incorrect path prefix

For now, **continue using Decap CMS** at `/admin/` for production content management. Sveltia CMS is available at `/admin/sveltia.html` for evaluation and can be used for text-only edits, but avoid replacing images until the path issue is resolved.

# issue-016: Support announcement banners on homepage ✅

**Moved to GitHub:** https://github.com/mdub/mdgc/issues/8


Add support for displaying dismissible announcement banners on the homepage (under the title bar). Store dismissed announcement state in cookies so users don't see the same announcement repeatedly after dismissing it.

## Design

Implementation should include:
- Data structure/content collection for announcements (with ID, message, type/priority, date range)
- Banner component that displays under the navigation bar
- Dismiss button functionality
- Cookie-based persistence to track dismissed announcements
- Support for multiple active announcements (show highest priority first)
- Styling that matches site design (possibly using Tailwind alert classes)

## Acceptance criteria

- Announcements can be defined in content collection or config
- Banner displays on homepage under navigation
- Users can dismiss banners with X button
- Dismissed state persists via cookies across sessions
- Previously dismissed announcements don't reappear
- Multiple announcements show in priority order
- Responsive design works on mobile and desktop

# Melbourne Disc Golf Club Website Project

## Project Overview
This project involves building a new modern website for the Melbourne Disc Golf Club (MDGC) using Astro and Tailwind CSS to replace their existing WordPress site.

## Existing Site Analysis
- **Current Site**: https://www.melbournediscgolf.com/
- **Documentation**: See `existing-site/` directory for structured content mapping
- **Key Sections**: About, Courses, Events, Media (Shop excluded for now)

## Technology Stack
- **Framework**: Astro 5.12.8
- **Styling**: Tailwind CSS 4.1.11
- **Deployment**: Static site generation

## Project Structure
```
website/
├── src/
│   ├── components/
│   │   └── Navigation.astro    # Main navigation with dropdowns
│   ├── layouts/
│   │   └── Layout.astro        # Base layout template
│   ├── pages/
│   │   ├── index.astro         # Homepage with hero section
│   │   ├── about.astro         # Club information
│   │   ├── courses.astro       # Melbourne disc golf courses
│   │   └── events.astro        # Social days and events
│   └── styles/
│       └── global.css
└── existing-site/              # Documentation of current site structure
    ├── _navbar.md              # Navigation structure reference
    ├── index.md                # Homepage content
    ├── about/
    ├── melbourne-courses/
    ├── events/
    └── media/
```

## Development Commands
- **Start dev server**: `npm run dev` (runs on http://localhost:4321)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Site Features
- Responsive design with mobile navigation
- Modern green color scheme reflecting disc golf/outdoor theme
- Navigation dropdowns matching original site structure
- Hero sections on all pages
- Card-based layouts for courses and events
- Accessible markup and semantic HTML

## Content Migration Status
- ✅ Homepage hero and welcome content
- ✅ About section (club history, mission, demographics)
- ✅ Course information (Bicentennial Park, Ruffey Lake Park)
- ✅ Events structure (social days, competitive opportunities)
- 🔄 Media section (basic structure created)
- ❌ Shop section (excluded per requirements)
- ❌ Blog/news content (structure planned)

## Next Steps
- Add remaining pages (What is Disc Golf, Membership, Contact, etc.)
- Implement media gallery functionality
- Add more course details and photos
- Create blog/news section
- Add contact forms and membership signup
- Optimize for SEO and performance
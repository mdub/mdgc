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

## Status

- We have a nagivation structure in place.
- We have a content collection for courses, (see src/content/courses).

### TODO

- Reduce the amount of markup required in "pages".
  - Convert to MDX?
  - Define better components?

# Melbourne Disc Golf Club website (WIP)

[![Deployment Status](https://img.shields.io/github/check-runs/mdub/mdgc/HEAD)](https://github.com/mdub/mdgc/commits/main)

A modern website for the Melbourne Disc Golf Club.

## 🌐 Live Site

A preview of new site is available at:

- https://mdgc.pages.dev/

Once development is complete, we will change the existing site URL to refer to the new one.

## 📋 Project Status

Mike Williams is currently in the midst of porting the existing WordPress site to a modern static website. The plan is to prove viability by end of Oct 2025, and complete migration by the end of Nov.

So far, I have:

  - [X] selected and set up a static website framework - [Astro](https://astro.build)
  - [X] set up site "builds" and hosting on [Cloudflare Pages](https://pages.cloudflare.com)
  - [X] set up high-level site structure
    - **Disc Golf** - about the sport
    - **Club** - about the club
    - **Courses** - where to play
    - **Events** - when to play
  - [X] sketched content across all sections
  - [X] integrated [Decap CMS](https://decapcms.org) for easier content editing
  - [X] created reusable page components (Panel, Prose, LinkPanel, Grid, HeroImage)
  - [X] converted key pages to MDX format for easier editing
  - [X] added custom font (Inter) and refined typography
  - [X] added hero images to major pages with proper optimization

Recent progress:
  - **Club** section
    - [X] converted all Club pages to MDX (board, contact, membership, index)
    - [X] simplified styling and component structure
  - **Events** section
    - [X] revised and converted Social Days page to MDX
    - [X] converted Tournaments page to MDX
    - [X] added hero images for social days and tournaments
  - **Courses** section
    - [X] created content collection for courses with MDX support
    - [X] added course pages with maps and details

Still todo:
  - **Disc Golf** section
    - [ ] build out content, e.g. "what it is", "how to play", and links to other relevant sites
  - **Courses** section
    - [ ] add an overview map to the main "Courses" page
    - [ ] make course map images easier to open in new tab/window
  - **Events** section
    - [ ] pull upcoming social days information from Disc Golf Metrix
    - [ ] embed club's Google calendar on events page
  - **General**
    - [ ] revisit component composition and whitespace handling
  - Support for other editors
    - [ ] configure Decap CMS with a "github" backend
    - [ ] add relevant folks as "contributors" on GitHub
    - [ ] document the contribution process

## 🚀 Development

### 🏗️ Tech Stack
- **Type**: Static (generated) site
- **Framework**: [Astro](https://astro.build) 5.12.8
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.1.11
- **CMS**: [Decap CMS](https://decapcms.org) (backed by Git)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com)

### Running locally

Run `pnpm run dev` to start the development server.

Visit http://localhost:4321 to view the site locally.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

### 🚀 Project Structure

```text
/
├── public/
│   └── images/
├── src
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── package.json
├── existing-site/
└── existing-site/    # Original site files (reference only)
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 📝 Content Migration

As of Oct 2025, the existing WordPress site is hosted at:

- https://www.melbournediscgolf.com/

The `existing-site/` directory contains a summary of the contents and structure of the WordPress site.

## Comparison to existing site

### WordPress vs static site

MDGC's existing website is based on WordPress. WordPress is a "dynamic" platform, which generate web-pages on-the-fly, as users browse.

In constrast, this rebuild is a "static website", meaning that the web-pages are pre-built, meaning much less work needs to be done on the "server" when people use the site.  Because of this, it should be:

  - **Faster**. A static site loads almost instantly, even on mobile or low-bandwidth connections.
  - **Cheaper**. Static sites can be hosted very cheaply - often for free. No ongoing fees for WordPress hosting, security plugins, or maintenance work.
  - **Much more reliable**. Static websites don’t crash or break after software updates. Once it’s live, it just works — no background software to maintain.
  - **Much more secure**. WordPress sites are one of the most common targets for hackers. A static site, by contrast, has no login system or database for attackers to get into. That means no security headaches, no emergency fixes, and no risk of losing content.

### Moving parts

#### Code hosting = GitHub (free)

The website code needs to be hosted somewhere. [GitHub](https://github.com) is a great option, and their Free plan support hosting of Git repositories with multiple collaborators. Anyone who needs to edit the website would need to register for a (free) GitHub account.

#### Site build and hosting = Cloudflare Pages (free)

[Cloudflare Pages](https://pages.cloudflare.com) is a platform for static websites. We have things configured such that any change to the website code (on GitHub) triggers a "build" and update of the site, which is then "served" by Cloudflare.

On their Free [plan](https://developers.cloudflare.com/pages/platform/limits/), Cloudflare Pages provides unlimited bandwidth and 500 builds per month. This should be more than sufficient for MDGC's needs.

#### Editing experience

The experience of people _editing_ the website will be quite different, for those used to WordPress. In particular, the new solution
will not provide a WYSIWYG ("what you see is what you get") editing experience, and it will be harder to change site _styling_, without some technical knowledge. However - though a combination of Decap CMS and the GitHub UI - we should be able to make it pretty easy for non-technical folks to edit and add _content_.

# Melbourne Disc Golf Club website (WIP)

[![Netlify Status](https://api.netlify.com/api/v1/badges/4ca6a827-5291-4c5a-8308-db2f705f8dbd/deploy-status)](https://app.netlify.com/projects/mdgc/deploys)

A modern website for the Melbourne Disc Golf Club.

## 🌐 Live Site

A preview of new site is available at:

- https://mdgc.netlify.app/ 

Once development is complete, we will change the existing site URL to refer to the new one.

## 📋 Project Status

Mike Williams is currently in the midst of porting the existing WordPress site to a modern static website. The plan is to prove viablity by end of Oct 2025, and complete migration by the end of Nov.

So far, I have:

  - [X] selected and set up a static website framework - [Astro](https://astro.build)
  - [X] set up site "builds" and hosting on [Netlify](https://www.netlify.com)
  - [X] set up high-level site structure
    - **Disc Golf** - about the sport
    - **Club** - about the club
    - **Courses** - where to play
    - **Events** - when to play
  - [X] sketched some of the content (including course photos and some details)
  - [X] integrated [Decap CMS](https://decapcms.org) for easier content editing

still todo:
  - **Disc Golf** section
    - [ ] build out content, e.g. "what it is", "how to play", and links to other relevent sites
  - **Club** section
    - [ ] _lots_ of content revision ... borrowing material from the existing site where appropriate
  - **Courses** section
    - [ ] review course pages, and add detail
    - [ ] add an overview map to the main "Courses" page
  - **Events** section
    - [ ] revise material on Social Days
    - [ ] create a "content collection" and CMS support for "Tournaments" to make them easy to add
  - support for other editors
    - [ ] configure Decap CMS with a "github" backend
    - [ ] add relevant folks as "contributors" on GitHub
    - [ ] document the contribution process


## 🚀 Development

### 🏗️ Tech Stack
- **Type**: Static (generated) site
- **Framework**: Astro 5.12.8
- **Styling**: Tailwind CSS 4.1.11
- **CMS**: Decap CMS (backed by Git)
- **Deployment**: Netlify

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


# Melbourne Disc Golf Club website (WIP)

[![Netlify Status](https://api.netlify.com/api/v1/badges/4ca6a827-5291-4c5a-8308-db2f705f8dbd/deploy-status)](https://app.netlify.com/projects/mdgc/deploys)

A modern website for the Melbourne Disc Golf Club, built with Astro and Tailwind CSS.

## 🌐 Live Site
**New Site**: https://mdgc.netlify.app/
**Original Site**: https://www.melbournediscgolf.com/

## 📋 Project Status
Currently porting the existing WordPress site to a modern Astro-based website.

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
The `existing-site/` directory contains structured documentation of the original website content, organized by section with working internal links for easy navigation in VS Code.

## 🤝 Contributing
This is an active migration project. See `CLAUDE.md` for detailed development notes and progress tracking.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

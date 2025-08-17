# Melbourne Disc Golf Club website (WIP)

[![Netlify Status](https://api.netlify.com/api/v1/badges/4ca6a827-5291-4c5a-8308-db2f705f8dbd/deploy-status)](https://app.netlify.com/projects/mdgc/deploys)

A modern website for the Melbourne Disc Golf Club, built with Astro and Tailwind CSS.

## 🌐 Live Site
**New Site**: https://mdgc.netlify.app/  
**Original Site**: https://www.melbournediscgolf.com/

## 📋 Project Status
Currently porting the existing WordPress site to a modern Astro-based website. 

## 🚀 Development

### Prerequisites
- Node.js (latest LTS recommended)
- npm

### Getting Started
```bash
cd website
npm install
npm run dev
```

Visit http://localhost:4321 to view the site locally.

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🏗️ Tech Stack
- **Framework**: Astro 5.12.8
- **Styling**: Tailwind CSS 4.1.11
- **Deployment**: Netlify
- **Type**: Static site generation

## 📁 Project Structure
```
├── website/                    # New Astro website
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── styles/
│   └── package.json
├── existing-site/              # Documentation of original site structure
│   ├── _navbar.md             # Navigation reference
│   ├── about/
│   ├── melbourne-courses/
│   ├── events/
│   └── media/
└── woollyams/existing-site/    # Original site files (reference only)
```

## 🎯 About Melbourne Disc Golf Club
Founded in 2008, MDGC is a non-profit organisation dedicated to building a local disc golf community in Melbourne. The club welcomes players aged 9-70+ of all skill levels, from casual social players to competitive athletes.

## 📝 Content Migration
The `existing-site/` directory contains structured documentation of the original website content, organized by section with working internal links for easy navigation in VS Code.

## 🤝 Contributing
This is an active migration project. See `CLAUDE.md` for detailed development notes and progress tracking.
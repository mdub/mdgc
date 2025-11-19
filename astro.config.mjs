// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import path from 'path';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import { rehypeSectionize } from './src/lib/rehype-sectionize.js';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  markdown: {
    rehypePlugins: [rehypeSectionize],
  },
  integrations: [
    mdx({
      rehypePlugins: [rehypeSectionize],
    }),
    icon()
  ],
  image: {
    layout: 'constrained'
  },
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'cms-extensionless-urls',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/cms/sveltia') {
              req.url = '/cms/sveltia.html';
            } else if (req.url === '/cms/decap') {
              req.url = '/cms/decap.html';
            }
            next();
          });
        }
      }
    ],
    resolve: {
      alias: {
        '~': path.resolve('./src'),
      }
    },
    server: {
      watch: {
        ignored: ['**/.beads/**']
      }
    }
  }
});
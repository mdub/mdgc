// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import path from 'path';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  integrations: [mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve('./src'),
      }
    }
  }
});
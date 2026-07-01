// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

// The adapter is only needed to build/deploy on-demand routes. During
// `astro dev`, Astro's dev server renders them directly, so we skip the
// adapter locally to avoid Netlify's dev emulation downloading and running
// Deno (which fails with EBUSY on some Windows setups, e.g. antivirus locks).
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: 'https://olliechurch.co.uk',
  adapter: isDev ? undefined : netlify(),
  vite: {
    plugins: [tailwindcss()]
  }
});
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import node from '@astrojs/node';

// An adapter is always required: the on-demand blog post route and the deferred
// comments island both need one, including under `astro dev`.
//
// Locally we use the Node adapter instead of Netlify's. The Netlify adapter
// emulates Edge Functions in dev, which downloads and runs Deno — that fails
// with EBUSY on some Windows setups (antivirus locking the freshly written
// deno.exe), and the emulation buys us nothing here. Netlify is still the
// adapter for every real build and deploy.
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: 'https://olliechurch.co.uk',
  // Every page opts into `prerender = true`, so the whole site is still built
  // statically. `output: 'server'` only keeps the serverless function in the
  // deploy — the deferred comments island is served from it. Under the default
  // static output the Netlify adapter skips that function entirely and every
  // /_server-islands/* request 404s.
  output: 'server',
  adapter: isDev ? node({ mode: 'standalone' }) : netlify(),
  vite: {
    plugins: [tailwindcss()]
  }
});

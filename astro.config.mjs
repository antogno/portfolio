import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://antogno.dev',
	integrations: [react(), tailwind(), sitemap()],
	output: 'server',
	adapter: netlify(),
});

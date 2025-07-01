import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://antogno.dev',
	integrations: [react(), sitemap()],
	output: 'server',
	adapter: netlify(),
	vite: {
		plugins: [tailwindcss()],
	},
});

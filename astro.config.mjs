// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://roadbookofcycling-git-main-gareths-projects-a83bc018.vercel.app',
	integrations: [mdx(), sitemap()],
});

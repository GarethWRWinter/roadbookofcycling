// @ts-check

import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.roadbookofcycling.com',
	integrations: [
		mdx(),
		sitemap(),
		partytown({
			config: {
				// Forward GA4 dataLayer events from the main thread to the Partytown worker
				forward: ['dataLayer.push'],
			},
		}),
	],
});

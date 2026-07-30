// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://astronaut.github.io',
	integrations: [
		starlight({
      title: '',
      logo: {
        src: './src/assets/logo.svg',
      },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/BLinkseq' }],
			sidebar: [
				{
					label: 'Linked Reads',
					items: [{ autogenerate: { directory: 'info' } }],
					//items: [
						// Each item here is one entry in the navigation menu.
						//{ label: 'What they are', slug: 'info/linked-reads' },
					//],
				},
				{
					label: 'Protocols',
					items: [{ autogenerate: { directory: 'protocols' } }],
				},
			],
		}),
	],
});

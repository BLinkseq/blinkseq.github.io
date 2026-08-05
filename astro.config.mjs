// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUiTweaks from 'starlight-ui-tweaks'
import starlightScrollToTop from 'starlight-scroll-to-top'

// https://astro.build/config
export default defineConfig({
	site: 'https://blinkseq.github.io',
	integrations: [
		starlight({
      title: '',
      logo: { src: '/src/assets/logo.svg'},
      favicon: '/favicon.png',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/BLinkseq' }],
      plugins: [starlightUiTweaks({
        navbarLinks: [
          { label: "Genomics Innovation", href: "https://www.biotech.cornell.edu/about-us/people/400"},
          { label: "Linked-Read Standard", href: "https://blinkseq.github.io/lastq" },
          { label: "Harpy", href: "https://pdimens.github.io/harpy" },
        ],
      }),
        starlightScrollToTop({
          showProgressRing: true,
          progressRingColor: '#b288f5',
          borderRadius: '50',
        })
      ],
      sidebar: [
        {
          label: 'About',
          items: [{ autogenerate: { directory: 'about' } }],
        },
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

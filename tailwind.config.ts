import type { Config } from 'tailwindcss'
const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['Raleway'],
				montserrat: ['Montserrat'],
				noto: ['Noto Sans JP'],
				notosans: ['Noto Sans'],
				poppins: ['Poppins']
			},
			colors: {
				'brand-keppel': 'var(--clr-keppel)',
				'brand-opaleppel': 'var(--clr-opaleppel)',
				'brand-opakeppel': 'var(--clr-opakeppel)',
				'brand-shamrock-green': 'var(--clr-shamrock-green)',
				'brand-sapphire': 'var(--clr-sapphire)',
				'brand-deep': 'var(--clr-deep)',
				'brand-navy': 'var(--clr-navy)',
				'brand-ultra-violet': 'var(--clr-ultra-violet)',
				'brand-gold': 'var(--clr-gold)',
				'brand-seasalt': 'var(--clr-seasalt)',
				'brand-sand': 'var(--clr-sand)'
			}
		}
	},
	plugins: []
}

export default config

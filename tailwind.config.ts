import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#FF0000',
				secondary: '#00FF00',
				accent: '#0000FF',
			},
			screens: {
				'max-tablet': { raw: '(max-width: 1024px)' },
				'max-tablet-m': { raw: '(max-width: 765px)' },
				'max-mobile-l': { raw: '(max-width: 425px)' },
				'max-mobile-m': { raw: '(max-width: 375px)' },
			},
		},
	},
	plugins: [],
}
export default config

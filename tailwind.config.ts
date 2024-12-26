// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindAnimate from 'tailwindcss-animate';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				desktop: '1024px',
			},
		},
		extend: {
			colors: {
				background: '#0A0A0A',
				surface: '#111111',
				elevated: '#171717',

				primary: '#FFFFFF',
				secondary: '#888888',

				success: '#52C93E',
				danger: '#FF2727',
				warning: '#F5A623',
				info: '#1D4ED8',

				border: '#888888',

				hover: 'rgba(255, 255, 255, 0.1)',
				pressed: 'rgba(255, 255, 255, 0.15)',
				overlay: 'rgba(0, 0, 0, 0.5)',
			},

			borderRadius: {
				none: '0px',
				sm: '4px',
				md: '6px',
				lg: '8px',
				xl: '12px',
				'2xl': '16px',
				full: '9999px',
			},

			boxShadow: {
				card: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
				'card-hover': '0 4px 12px 0 rgba(0, 0, 0, 0.2)',
				float: '0 8px 16px rgba(0, 0, 0, 0.25)',
				button: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				'button-hover': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
				inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
				content: '0 0 1px rgba(255,255,255,0.1)',
			},

			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
				mono: ['var(--font-jetbrains-mono)', 'monospace'],
				'space-grotesk': ['var(--font-space-grotesk)'],
			},

			transitionDuration: {
				'250': '250ms',
			},

			opacity: {
				'15': '0.15',
				'35': '0.35',
				'85': '0.85',
			},

			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'fade-top': 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))',
				'fade-bottom':
					'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))',
			},
		},
	},
	plugins: [tailwindAnimate],
};

export default config;

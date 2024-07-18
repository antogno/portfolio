import defaultTheme from 'tailwindcss/defaultTheme';

const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Archivo Variable', ...defaultTheme.fontFamily.sans],
				mono: ['Fira Code Variable', ...defaultTheme.fontFamily.mono],
			},
			animation: {
				'fade-in': 'fadeIn 700ms ease-in forwards',
				levitate: 'levitate 3s ease-in-out infinite',
				wave: 'wave 3s linear infinite',
			},
			keyframes: (theme) => ({
				fadeIn: {
					'0%': {
						opacity: 0,
					},
					'100%': {
						opacity: 1,
					},
				},
				levitate: {
					'0%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(1rem)',
					},
					'100%': {
						transform: 'translateY(0)',
					},
				},
				wave: {
					'0%': {
						transform: 'rotate(0.0deg)',
					},
					'10%': {
						transform: 'rotate(14.0deg)',
					},
					'20%': {
						transform: 'rotate(-8.0deg)',
					},
					'30%': {
						transform: 'rotate(14.0deg)',
					},
					'40%': {
						transform: 'rotate(-4.0deg)',
					},
					'50%': {
						transform: 'rotate(10.0deg)',
					},
					'60%': {
						transform: 'rotate(0.0deg)',
					},
					'100%': {
						transform: 'rotate(0.0deg)',
					},
				},
			}),
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						focus: '#eb622d',
						primary: {
							50: '#ffebe0',
							100: '#fdcab5',
							200: '#f6a788',
							300: '#f1855b',
							400: '#eb622d',
							500: '#d24814',
							600: '#a4370e',
							700: '#762709',
							800: '#491602',
							900: '#1e0400',
							foreground: '#ffffff',
							DEFAULT: '#eb622d',
						},
						secondary: {
							50: '#e0fbff',
							100: '#bbedf4',
							200: '#94dfea',
							300: '#6cd2e1',
							400: '#49c4d8',
							500: '#32aabe',
							600: '#238595',
							700: '#155f6b',
							800: '#033941',
							900: '#001518',
							foreground: '#ffffff',
							DEFAULT: '#155f6b',
						},
					},
				},
				dark: {
					colors: {
						focus: '#eb622d',
						primary: {
							50: '#1e0400',
							100: '#491602',
							200: '#762709',
							300: '#a4370e',
							400: '#d24814',
							500: '#eb622d',
							600: '#f1855b',
							700: '#f6a788',
							800: '#fdcab5',
							900: '#ffebe0',
							foreground: '#ffffff',
							DEFAULT: '#eb622d',
						},
						secondary: {
							50: '#001518',
							100: '#033941',
							200: '#155f6b',
							300: '#238595',
							400: '#32aabe',
							500: '#49c4d8',
							600: '#6cd2e1',
							700: '#94dfea',
							800: '#bbedf4',
							900: '#e0fbff',
							foreground: '#ffffff',
							DEFAULT: '#155f6b',
						},
					},
				},
			},
		}),
	],
};

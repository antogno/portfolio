import { persistentAtom } from '@nanostores/persistent';
import { atom } from 'nanostores';

export const darkTheme = 'dark';
export const lightTheme = 'light';

type Theme = typeof darkTheme | typeof lightTheme;

export const defaultTheme: Theme =
	typeof window !== 'undefined' &&
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
		? darkTheme
		: lightTheme;

export const theme = persistentAtom<Theme>('theme', defaultTheme);

export const isThemeReady = atom(false);

export const setTheme = () => {
	if (typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
		document.documentElement.classList.add(theme.get());
		document.documentElement.classList.remove(
			theme.get() === darkTheme ? lightTheme : darkTheme
		);

		isThemeReady.set(true);
	}
};

export const toggleTheme = () => {
	theme.set(theme.get() === darkTheme ? lightTheme : darkTheme);
	setTheme();
};

if (typeof window !== 'undefined' && window.matchMedia) {
	const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

	darkThemeMediaQuery.addEventListener('change', (e) => {
		const newTheme = e.matches ? darkTheme : lightTheme;
		theme.set(newTheme);
		setTheme();
	});
}

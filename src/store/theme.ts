import { persistentAtom } from '@nanostores/persistent';
import { atom } from 'nanostores';

export const darkTheme = 'dark';

export const lightTheme = 'light';

type Theme = typeof darkTheme | typeof lightTheme;

export const defaultTheme: Theme = lightTheme;

export const theme = persistentAtom<Theme>('theme', defaultTheme);

export const isThemeReady = atom(false);

export const setTheme = () => {
	if (document !== undefined && localStorage !== undefined) {
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

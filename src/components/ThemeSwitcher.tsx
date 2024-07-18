import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStore } from '@nanostores/react';
import { Button } from '@nextui-org/react';
import { darkTheme, isThemeReady, theme, toggleTheme } from '@store/theme';
import { useEffect, useState } from 'react';

export default () => {
	const $theme = useStore(theme);
	const $isThemeReady = useStore(isThemeReady);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<Button isIconOnly variant="light" onPress={toggleTheme}>
			{isMounted && $isThemeReady && (
				<FontAwesomeIcon icon={$theme === darkTheme ? faSun : faMoon} />
			)}
		</Button>
	);
};

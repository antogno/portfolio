import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStore } from '@nanostores/react';
import { Button, Link } from '@nextui-org/react';
import { darkTheme, isThemeReady, theme, toggleTheme } from '@store/theme';
import { useEffect, useState } from 'react';

interface Props {
	asLink?: boolean;
}

export default (props: Props) => {
	const $theme = useStore(theme);
	const $isThemeReady = useStore(isThemeReady);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const icon = isMounted && $isThemeReady && (
		<FontAwesomeIcon icon={$theme === darkTheme ? faSun : faMoon} />
	);

	return props.asLink === true ? (
		<Link role="button" color="foreground" onPress={toggleTheme}>
			{icon}
		</Link>
	) : (
		<Button isIconOnly variant="light" onPress={toggleTheme}>
			{icon}
		</Button>
	);
};

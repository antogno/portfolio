import { ThemeSwitcher } from '@components/ThemeSwitcher';
import socials from '@data/socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Link,
	NavbarContent,
	Navbar as NavbarHeroUI,
	NavbarItem,
} from '@heroui/react';

const links = [
	{ label: 'Skills', url: '#skills' },
	{ label: 'Projects', url: '#projects' },
];

export function Navbar() {
	return (
		<NavbarHeroUI className="container mx-auto max-w-6xl" maxWidth="full">
			<NavbarContent as="div" justify="start">
				{links.map((link, index) => (
					<NavbarItem key={`${link.label}-${index}`}>
						<Link color="foreground" href={link.url}>
							{link.label}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent as="div" justify="end">
				{socials.map((social, index) => (
					<NavbarItem key={`${social.label}-${index}`}>
						<Link isExternal color="foreground" href={social.url}>
							<FontAwesomeIcon icon={social.icon} />
						</Link>
					</NavbarItem>
				))}
				<NavbarItem>
					<ThemeSwitcher asLink />
				</NavbarItem>
			</NavbarContent>
		</NavbarHeroUI>
	);
}

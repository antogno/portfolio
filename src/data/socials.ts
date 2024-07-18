import {
	type IconDefinition,
	faGithub,
	faLinkedin,
	faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

type Social = {
	label: string;
	icon: IconDefinition;
	url: string;
};

const socials: Social[] = [
	{ label: 'X', icon: faXTwitter, url: 'https://twitter.com/agranaldi' },
	{
		label: 'LinkedIn',
		icon: faLinkedin,
		url: 'https://linkedin.com/in/antonio-granaldi',
	},
	{ label: 'GitHub', icon: faGithub, url: 'https://github.com/antogno' },
];

export default socials;

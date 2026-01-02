export type Project = {
	label: string;
	description: string;
	highlight: boolean;
	tags: string[];
	url?: string;
	repoUrl?: string;
	stars?: number;
	highlightColor?: string;
};

export const projects: Project[] = [
	{
		label: 'Drippie Laboratory',
		description: "Drippie is dripping... And it's almost finished.",
		highlight: true,
		tags: ['???'],
		url: 'https://drippielab.com',
		highlightColor: '#b281fd',
	},
	{
		label: 'Portfolio',
		description: "You're looking at it!",
		highlight: true,
		tags: ['Astro', 'React', 'Tailwind CSS'],
		repoUrl: 'https://github.com/antogno/portfolio',
		stars: 2,
	},
	{
		label: 'Omninext',
		description: 'Simple AWS Lambda REST API in Node.js with Serverless.',
		highlight: false,
		tags: ['TypeScript', 'Serverless', 'AWS', 'DynamoDB'],
		repoUrl: 'https://github.com/antogno/omninext',
		stars: 0,
	},
	{
		label: 'PES API',
		description: 'A GraphQL Pro Evolution Soccer 6 API.',
		highlight: false,
		tags: ['TypeScript', 'Docker', 'GraphQL', 'API'],
		repoUrl: 'https://github.com/antogno/pesapi',
		stars: 1,
	},
	{
		label: 'GitInfo',
		description:
			'GitInfo is a tool that lets you get information about the current Git repository.',
		highlight: false,
		tags: ['PHP', 'Git', 'Composer'],
		url: 'https://packagist.org/packages/antogno/gitinfo',
		repoUrl: 'https://github.com/antogno/gitinfo',
		stars: 0,
	},
	{
		label: 'EasyBlackjack',
		description:
			'EasyBlackjack is a Single-Deck Blackjack hand generator and calculator.',
		highlight: false,
		tags: ['Python', 'PyPI'],
		url: 'https://pypi.org/project/easyblackjack',
		repoUrl: 'https://github.com/antogno/easyblackjack',
		stars: 0,
	},
	{
		label: 'Blogsonic',
		description: 'Blogsonic is a simple CRUD Web Application in PHP.',
		highlight: false,
		tags: ['PHP', 'MySQL', 'CodeIgniter'],
		repoUrl: 'https://github.com/antogno/blogsonic',
		stars: 1,
	},
];

type Project = {
	label: string;
	url?: string;
	repoUrl: string;
	description: string;
	stars: number;
	tags: string[];
};

const projects: Project[] = [
	{
		label: 'Omninext',
		url: 'https://g5x6nvsdj3.execute-api.us-east-1.amazonaws.com',
		repoUrl: 'https://github.com/antogno/omninext',
		description: 'Simple AWS Lambda REST API in Node.js with Serverless.',
		stars: 0,
		tags: ['TypeScript', 'Serverless', 'AWS', 'DynamoDB'],
	},
	{
		label: 'PES API',
		repoUrl: 'https://github.com/antogno/pesapi',
		description: 'A GraphQL Pro Evolution Soccer 6 API.',
		stars: 0,
		tags: ['TypeScript', 'Docker', 'GraphQL', 'API'],
	},
	{
		label: 'GitInfo',
		url: 'https://packagist.org/packages/antogno/gitinfo',
		repoUrl: 'https://github.com/antogno/gitinfo',
		description:
			'GitInfo is a tool that lets you get information about the current Git repository.',
		stars: 0,
		tags: ['PHP', 'Git', 'Composer'],
	},
	{
		label: 'EasyBlackjack',
		url: 'https://pypi.org/project/easyblackjack',
		repoUrl: 'https://github.com/antogno/easyblackjack',
		description:
			'EasyBlackjack is a Single-Deck Blackjack hand generator and calculator.',
		stars: 0,
		tags: ['Python', 'PyPI'],
	},
	{
		label: 'Blogsonic',
		repoUrl: 'https://github.com/antogno/blogsonic',
		description: 'Blogsonic is a simple CRUD Web Application in PHP.',
		stars: 1,
		tags: ['PHP', 'MySQL', 'CodeIgniter'],
	},
];

export default projects;

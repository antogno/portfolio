type Skill = {
	label: string;
	extra?: string;
	type: 'language' | 'framework' | 'database' | 'tool';
};

const skills: Skill[] = [
	{ label: 'PHP', type: 'language' },
	{ label: 'JavaScript', type: 'language' },
	{ label: 'TypeScript', type: 'language' },
	{ label: 'Python', type: 'language' },
	{ label: 'SQL', type: 'language' },
	{ label: 'HTML', type: 'language' },
	{ label: 'CSS', type: 'language' },
	{ label: 'Sass', type: 'language' },
	{ label: 'React', type: 'framework' },
	{ label: 'Vue.js', type: 'framework' },
	{ label: 'Angular', type: 'framework' },
	{ label: 'Astro', type: 'framework' },
	{ label: 'Ionic', type: 'framework' },
	{ label: 'Tailwind CSS', type: 'framework' },
	{ label: 'Bootstrap', type: 'framework' },
	{ label: 'CodeIgniter', type: 'framework' },
	{ label: 'CakePHP', type: 'framework' },
	{ label: 'Serverless Framework', type: 'framework' },
	{ label: 'MySQL', type: 'database' },
	{ label: 'MongoDB', type: 'database' },
	{ label: 'PostgreSQL', type: 'database' },
	{ label: 'SQLite', type: 'database' },
	{ label: 'DynamoDB', type: 'database' },
	{ label: 'Git', type: 'tool' },
	{ label: 'Docker', type: 'tool' },
	{ label: 'GraphQL', type: 'tool' },
	{ label: 'AWS', type: 'tool' },
	{ label: 'Google Cloud', type: 'tool' },
	{ label: 'Jenkins', type: 'tool' },
	{ label: 'Vercel', type: 'tool' },
];

export default skills;

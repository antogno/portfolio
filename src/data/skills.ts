type Skill = {
	label: string;
	type: 'languages' | 'frameworks' | 'databases' | 'tools';
};

const skills: Skill[] = [
	{ label: 'PHP', type: 'languages' },
	{ label: 'JavaScript', type: 'languages' },
	{ label: 'TypeScript', type: 'languages' },
	{ label: 'Python', type: 'languages' },
	{ label: 'SQL', type: 'languages' },
	{ label: 'HTML', type: 'languages' },
	{ label: 'CSS', type: 'languages' },
	{ label: 'Sass', type: 'languages' },
	{ label: 'React', type: 'frameworks' },
	{ label: 'Vue.js', type: 'frameworks' },
	{ label: 'Angular', type: 'frameworks' },
	{ label: 'Astro', type: 'frameworks' },
	{ label: 'Ionic', type: 'frameworks' },
	{ label: 'Tailwind CSS', type: 'frameworks' },
	{ label: 'Bootstrap', type: 'frameworks' },
	{ label: 'CodeIgniter', type: 'frameworks' },
	{ label: 'CakePHP', type: 'frameworks' },
	{ label: 'Serverless Framework', type: 'frameworks' },
	{ label: 'MySQL', type: 'databases' },
	{ label: 'MongoDB', type: 'databases' },
	{ label: 'PostgreSQL', type: 'databases' },
	{ label: 'SQLite', type: 'databases' },
	{ label: 'DynamoDB', type: 'databases' },
	{ label: 'Git', type: 'tools' },
	{ label: 'Docker', type: 'tools' },
	{ label: 'GraphQL', type: 'tools' },
	{ label: 'AWS', type: 'tools' },
	{ label: 'Google Cloud', type: 'tools' },
	{ label: 'Jenkins', type: 'tools' },
	{ label: 'Vercel', type: 'tools' },
];

export default skills;

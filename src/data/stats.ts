type Stat = {
	label: string;
	emoji: string;
	hidden: boolean;
	unit?: string;
	prefix?: '~' | '$' | '€';
	suffix?: '+';
	perDay: number;
	perYear?: number;
	sinceStartOfTheYear?: number;
};

const smokedCigarettes: Stat = {
	label: 'Smoked cigarettes',
	emoji: ':smoking:',
	hidden: false,
	suffix: '+',
	perDay: 54 / 7,
};

const drunkCoffees: Stat = {
	label: 'Drunk coffees',
	emoji: ':coffee:',
	hidden: false,
	suffix: '+',
	perDay: 11 / 7,
};

const moneyEarned: Stat = {
	label: 'Money earned',
	emoji: ':money_mouth_face:',
	hidden: true,
	prefix: '€',
	suffix: '+',
	perDay: 1000,
};

const distanceTraveled: Stat = {
	label: 'Distance traveled by car',
	emoji: ':red_car:',
	hidden: false,
	unit: 'km',
	suffix: '+',
	perDay: 550 / 7,
};

const musicListened: Stat = {
	label: 'Music listened',
	emoji: ':headphones:',
	hidden: false,
	unit: 'mins',
	suffix: '+',
	perDay: 130,
};

const numberOfWorkouts: Stat = {
	label: 'Number of workouts',
	emoji: ':weight_lifting_man:',
	hidden: false,
	prefix: '~',
	perDay: 3 / 7,
};

const timeSpentCoding: Stat = {
	label: 'Time spent coding',
	emoji: ':man_technologist:',
	hidden: false,
	unit: 'hrs',
	suffix: '+',
	perDay: 48 / 7,
};

const stats = {
	smokedCigarettes,
	drunkCoffees,
	moneyEarned,
	distanceTraveled,
	musicListened,
	numberOfWorkouts,
	timeSpentCoding,
};

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
Object.entries(stats).forEach(([key, stat]) => {
	stat.perYear = Math.floor(stat.perDay * 365);

	const currentDate = new Date();

	const daysSinceStartOfTheYear = Math.floor(
		(Number(currentDate) - Number(new Date(currentDate.getFullYear(), 0, 0))) /
			(1000 * 60 * 60 * 24)
	);

	stat.sinceStartOfTheYear = Math.floor(stat.perDay * daysSinceStartOfTheYear);
});

export default stats;

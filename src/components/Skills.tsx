import skills from '@data/skills';
import { useIsVisible } from '@hooks/useIsVisible';
import { Spacer } from '@nextui-org/react';
import { useRef, useState } from 'react';

const languages = skills.filter((skill) => skill.type === 'languages');
const frameworks = skills.filter((skill) => skill.type === 'frameworks');
const databases = skills.filter((skill) => skill.type === 'databases');
const tools = skills.filter((skill) => skill.type === 'tools');

const skillsByType = [languages, frameworks, databases, tools];

export default () => {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useIsVisible(ref, () => {
		setIsVisible(true);
	});

	return (
		<div
			ref={ref}
			className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
		>
			<div className="grid justify-between grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
				{skillsByType.map(
					(skills, index) =>
						skills.length > 0 && (
							<div key={`${skills[0].type}-${index}`}>
								<div className="capitalize text-lg font-semibold from-secondary-400 to-secondary-700 bg-clip-text text-transparent bg-gradient-to-b">
									{skills[0].type}
								</div>
								<Spacer y={2} />
								<ul>
									{skills.map((skill, index) => (
										<li
											key={`${skill.label}-${index}`}
											className="flex flex-nowrap gap-1 items-center"
										>
											<span>{skill.label}</span>
										</li>
									))}
								</ul>
							</div>
						)
				)}
			</div>
		</div>
	);
};

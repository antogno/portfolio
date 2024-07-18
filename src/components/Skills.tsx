import skills from '@data/skills';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsVisible } from '@hooks/useIsVisible';
import { Spacer, Tooltip } from '@nextui-org/react';
import * as emoji from 'node-emoji';
import { useRef, useState } from 'react';

const languages = skills.filter((skill) => skill.type === 'language');
const frameworks = skills.filter((skill) => skill.type === 'framework');
const databases = skills.filter((skill) => skill.type === 'database');
const tools = skills.filter((skill) => skill.type === 'tool');

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
									{skills[0].type}s
								</div>
								<Spacer y={2} />
								<ul>
									{skills.map((skill, index) => (
										<li
											key={`${skill.label}-${index}`}
											className="flex flex-nowrap gap-1 items-center"
										>
											<span>{skill.label}</span>
											{skill.extra && (
												<Tooltip
													delay={500}
													placement="bottom"
													content={emoji.emojify(skill.extra)}
												>
													<FontAwesomeIcon icon={faCircleQuestion} />
												</Tooltip>
											)}
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

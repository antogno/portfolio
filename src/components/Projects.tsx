import projects from '@data/projects';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsVisible } from '@hooks/useIsVisible';
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Chip,
	Link,
} from '@nextui-org/react';
import { useRef, useState } from 'react';

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
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<Card isHoverable key={`${project.label}-${index}`}>
						<CardHeader className="p-4">
							<div className="flex justify-between items-center w-full">
								<div>
									{project?.url ? (
										<Link
											isExternal
											showAnchorIcon
											color="foreground"
											href={project.url}
										>
											<span className="text-lg md:text-xl font-bold">
												{project.label}
											</span>
										</Link>
									) : (
										<span className="text-lg md:text-xl font-bold">
											{project.label}
										</span>
									)}
								</div>
								<div>
									<Link
										isExternal
										size="sm"
										color="foreground"
										href={project.repoUrl}
									>
										<FontAwesomeIcon icon={faGithub} />
									</Link>
								</div>
							</div>
						</CardHeader>
						<CardBody className="px-4">
							<p className="text-xs md:text-sm">{project.description}</p>
						</CardBody>
						<CardFooter className="p-4 flex gap-2 flex-wrap">
							{project.tags.map((tag, index) => (
								<Chip
									key={`${project.label}-${tag}-${index}`}
									color="default"
									size="sm"
								>
									{tag}
								</Chip>
							))}
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

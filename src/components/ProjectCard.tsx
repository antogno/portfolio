import { TagMarquee } from '@components/TagMarquee';
import type { Project } from '@data/projects';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, CardFooter, CardHeader, Link } from '@heroui/react';
import { hexToRgba, isValidHexColor } from '@lib/utils';
import React from 'react';

interface Props {
	project: Project;
	index: number;
	tagScrollDurationMs: number;
	highlightShadowAlpha: number;
}

export function ProjectCard(props: Props) {
	const hasCustomColor =
		props.project.highlight &&
		props.project.highlightColor &&
		isValidHexColor(props.project.highlightColor);

	const style =
		props.project.highlight && hasCustomColor
			? ({
					'--tw-ring-color': props.project.highlightColor,
					'--tw-shadow-color': hexToRgba(
						props.project.highlightColor as string,
						props.highlightShadowAlpha
					),
				} as React.CSSProperties)
			: undefined;

	const className = props.project.highlight
		? hasCustomColor
			? 'ring-2 ring-inset shadow-lg shadow-[color:var(--tw-shadow-color)]'
			: 'ring-2 ring-inset ring-primary shadow-lg shadow-primary/30'
		: '';

	const title = props.project.url ? (
		<Link isExternal showAnchorIcon color="foreground" href={props.project.url}>
			<span className="text-lg md:text-xl font-bold">
				{props.project.label}
			</span>
		</Link>
	) : (
		<span className="text-lg md:text-xl font-bold">{props.project.label}</span>
	);

	return (
		<Card isHoverable style={style} classNames={{ base: className }}>
			<CardHeader className="p-4">
				<div className="flex justify-between items-center w-full">
					<div>{title}</div>
					{props.project.repoUrl && (
						<div>
							<Link
								isExternal
								size="sm"
								color="foreground"
								href={props.project.repoUrl}
							>
								<FontAwesomeIcon icon={faGithub} />
							</Link>
						</div>
					)}
				</div>
			</CardHeader>
			<CardBody className="px-4">
				<p className="text-xs md:text-sm">{props.project.description}</p>
			</CardBody>
			<CardFooter className="p-4">
				<TagMarquee
					id={`${props.project.label.replace(/\s+/g, '-')}-${props.index}`}
					tags={props.project.tags}
					projectLabel={props.project.label}
					durationMs={props.tagScrollDurationMs}
				/>
			</CardFooter>
		</Card>
	);
}

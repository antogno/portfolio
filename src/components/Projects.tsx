import { ProjectCard } from '@components/ProjectCard';
import { projects } from '@data/projects';
import { Pagination } from '@heroui/react';
import { useBreakpointCols } from '@hooks/useBreakpointCols';
import { useIsVisible } from '@hooks/useIsVisible';
import { useEffect, useMemo, useRef, useState } from 'react';

export function Projects() {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [page, setPage] = useState(1);

	useIsVisible(ref, () => {
		setIsVisible(true);
	});

	const cols = useBreakpointCols(1, 2, 3);

	const itemsPerPage = Math.max(2, cols);
	const totalPages = Math.max(1, Math.ceil(projects.length / itemsPerPage));

	useEffect(() => {
		setPage((prev) => Math.min(Math.max(prev, 1), totalPages));
	}, [totalPages]);

	const paginatedProjects = useMemo(() => {
		const start = (page - 1) * itemsPerPage;

		return projects.slice(start, start + itemsPerPage);
	}, [page, itemsPerPage]);

	const gridClassName = useMemo(() => {
		const count = paginatedProjects.length;
		const isLastPage = page === totalPages;

		if (!isLastPage) {
			return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8';
		}

		const smCols = Math.min(2, Math.max(1, count));
		const lgCols = Math.min(3, Math.max(1, count));

		const smClass =
			smCols === 1 ? 'sm:grid-cols-1' : smCols === 2 ? 'sm:grid-cols-2' : '';

		const lgClass =
			lgCols === 1
				? 'lg:grid-cols-1'
				: lgCols === 2
					? 'lg:grid-cols-2'
					: 'lg:grid-cols-3';

		return `grid grid-cols-1 gap-8 ${smClass} ${lgClass}`.trim();
	}, [page, totalPages, paginatedProjects.length]);

	return (
		<div
			ref={ref}
			className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
		>
			<div className={gridClassName}>
				{paginatedProjects.map((project, index) => (
					<ProjectCard
						key={`${project.label}-${index}`}
						project={project}
						index={index}
						tagScrollDurationMs={2000}
						highlightShadowAlpha={0.3}
					/>
				))}
			</div>
			{totalPages > 1 && (
				<div className="flex justify-center mt-8 md:mt-10 lg:mt-12">
					<Pagination
						page={page}
						total={totalPages}
						onChange={setPage}
						showControls
						color="primary"
						siblings={1}
						boundaries={1}
					/>
				</div>
			)}
		</div>
	);
}

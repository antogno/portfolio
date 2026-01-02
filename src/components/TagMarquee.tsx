import { Chip } from '@heroui/react';
import { useResizeObserver } from '@hooks/useResizeObserver';
import React, {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';

interface Props {
	id: string;
	tags: string[];
	projectLabel: string;
	durationMs: number;
}

export function TagMarquee(props: Props) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const measureRef = useRef<HTMLDivElement | null>(null);
	const trackRef = useRef<HTMLDivElement | null>(null);

	const [shouldAnimate, setShouldAnimate] = useState(false);
	const [distancePx, setDistancePx] = useState(0);

	const measure = useCallback(() => {
		const container = containerRef.current;
		const measureEl = measureRef.current;

		if (!container || !measureEl) {
			return;
		}

		const overflow = measureEl.scrollWidth - container.clientWidth;

		if (overflow > 1) {
			setShouldAnimate(true);
			setDistancePx(Math.ceil(overflow));
		} else {
			setShouldAnimate(false);
			setDistancePx(0);
		}
	}, []);

	useLayoutEffect(() => {
		measure();
	}, [measure, props.tags.join('|')]);

	useResizeObserver(containerRef, measure);

	useEffect(() => {
		const onWindowResize = () => measure();
		window.addEventListener('resize', onWindowResize);

		return () => window.removeEventListener('resize', onWindowResize);
	}, [measure]);

	useEffect(() => {
		const el = trackRef.current;

		if (!el) {
			return;
		}

		el.style.setProperty('--tm-distance', `${distancePx}px`);
	}, [distancePx]);

	const wrapperStyle: React.CSSProperties = {
		position: 'relative',
		overflow: 'hidden',
		width: '100%',
	};

	const rowStyle: React.CSSProperties = {
		display: 'inline-flex',
		alignItems: 'center',
		gap: '0.5rem',
		whiteSpace: 'nowrap',
	};

	const animatedRowStyle: React.CSSProperties = shouldAnimate
		? {
				...rowStyle,
				willChange: 'transform',
				transform: 'translateX(0px)',
				animation: `tagbounce-${props.id} ${props.durationMs}ms ease-in-out infinite alternate`,
			}
		: {
				display: 'flex',
				alignItems: 'center',
				gap: '0.5rem',
				flexWrap: 'wrap',
			};

	const overlayStyle: React.CSSProperties = shouldAnimate
		? {
				position: 'absolute',
				inset: 0,
				pointerEvents: 'none',
			}
		: { display: 'none' };

	return (
		<div ref={containerRef} style={wrapperStyle}>
			<style>{`
				@keyframes tagbounce-${props.id} {
					0% {
						transform: translateX(0px);
					}
					100% {
						transform: translateX(calc(-1 * var(--tm-distance, 0px)));
					}
				}

				@media (prefers-reduced-motion: reduce) {
					[data-tagmarquee-id='${props.id}'] {
						animation: none !important;
						transform: none !important;
					}
				}
			`}</style>
			<div
				ref={trackRef}
				data-tagmarquee-id={props.id}
				style={animatedRowStyle}
			>
				{props.tags.map((tag, index) => (
					<Chip
						key={`${props.projectLabel}-${tag}-${index}`}
						color="default"
						size="sm"
						style={{ flex: '0 0 auto' }}
					>
						{tag}
					</Chip>
				))}
			</div>
			<div style={overlayStyle} />
			<div
				ref={measureRef}
				style={{
					position: 'absolute',
					visibility: 'hidden',
					pointerEvents: 'none',
					height: 0,
					overflow: 'hidden',
					whiteSpace: 'nowrap',
				}}
				aria-hidden="true"
			>
				<div style={rowStyle}>
					{props.tags.map((tag, index) => (
						<Chip
							key={`${props.projectLabel}-${tag}-measure-${index}`}
							color="default"
							size="sm"
							style={{ flex: '0 0 auto' }}
						>
							{tag}
						</Chip>
					))}
				</div>
			</div>
		</div>
	);
}

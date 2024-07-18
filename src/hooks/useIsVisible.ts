import { useEffect, useState } from 'react';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const useIsVisible = (ref: any, callback: () => void) => {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				callback();
				setIntersecting(true);
			}
		});

		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref, callback]);

	return isIntersecting;
};

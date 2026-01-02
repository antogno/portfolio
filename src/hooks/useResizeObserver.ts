import { useEffect } from 'react';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const useResizeObserver = (ref: any, callback: () => void) => {
	useEffect(() => {
		if (!ref.current) {
			return;
		}

		const el = ref.current;

		if (!el || ResizeObserver === undefined) {
			return;
		}

		const observer = new ResizeObserver(() => {
			callback();
		});

		observer.observe(el);

		return () => {
			observer.disconnect();
		};
	}, [ref, callback]);
};

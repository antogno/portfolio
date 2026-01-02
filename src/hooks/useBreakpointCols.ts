import { useEffect, useState } from 'react';

export const useBreakpointCols = (base: number, sm: number, lg: number) => {
	const [currentCols, setCurrentCols] = useState(base);

	useEffect(() => {
		if (window === undefined) {
			return;
		}

		const mqLg = window.matchMedia('(min-width: 1024px)');
		const mqSm = window.matchMedia('(min-width: 640px)');

		const compute = () => {
			if (mqLg.matches) {
				return lg;
			}

			if (mqSm.matches) {
				return sm;
			}

			return base;
		};

		const update = () => setCurrentCols(compute());

		update();

		const add = (mq: MediaQueryList) => {
			if (typeof mq.addEventListener === 'function') {
				mq.addEventListener('change', update);
			} else if (typeof mq.addListener === 'function') {
				mq.addListener(update);
			}
		};

		const remove = (mq: MediaQueryList) => {
			if (typeof mq.removeEventListener === 'function') {
				mq.removeEventListener('change', update);
			} else if (typeof mq.removeListener === 'function') {
				mq.removeListener(update);
			}
		};

		add(mqLg);
		add(mqSm);

		return () => {
			remove(mqLg);
			remove(mqSm);
		};
	}, [base, sm, lg]);

	return currentCols;
};

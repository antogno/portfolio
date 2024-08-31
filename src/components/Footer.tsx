import stats from '@data/stats';
import * as emoji from 'node-emoji';
import CatModal from './CatModal';
import StatsModal from './StatsModal';

export default () => {
	return (
		<footer className="w-full bg-content2 dark:bg-content1 relative z-50">
			<div className="container mx-auto p-10 max-w-6xl">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col sm:flex-row gap-4 justify-between">
						<div className="flex flex-col gap-2">
							<div className="text-xs text-default-500">
								Since the start of the year. <StatsModal />
							</div>
							<div className="flex flex-row gap-4">
								<div className="font-semibold text-lg sm:text-xl">
									{emoji.emojify(stats.smokedCigarettes.emoji)}{' '}
									<span className="ml-1 text-primary">
										{stats.smokedCigarettes.prefix}
										{stats.smokedCigarettes.sinceStartOfTheYear?.toLocaleString()}
										{stats.smokedCigarettes.suffix}
									</span>
								</div>
								<div className="font-semibold text-lg sm:text-xl">
									{emoji.emojify(stats.drunkCoffees.emoji)}{' '}
									<span className="ml-1 text-primary">
										{stats.drunkCoffees.prefix}
										{stats.drunkCoffees.sinceStartOfTheYear?.toLocaleString()}
										{stats.drunkCoffees.suffix}
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col sm:w-1/2 sm:text-right gap-2">
							<p className="text-xs w-full text-balance">
								Made by myself with Astro, React, NextUI & Tailwind CSS in
								TypeScript.
							</p>
							<p className="text-xs w-full text-balance">
								All of this wouldn't be possible without the support and
								unconditional love of my cats <CatModal cat="axl" /> and{' '}
								<CatModal cat="lilli" /> {emoji.emojify(':heart:')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

import stats from '@data/stats';
import {
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Tooltip,
	useDisclosure,
} from '@nextui-org/react';
import * as emoji from 'node-emoji';

export default () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Link
				href="javascript:;"
				size="sm"
				color="primary"
				underline="always"
				onPress={() => onOpen()}
			>
				<span className="text-xs">See all my stats!</span>
			</Link>
			<Modal size="md" isOpen={isOpen} onClose={onClose}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Since the start of the year
							</ModalHeader>
							<ModalBody>
								<div className="grid grid-rows-3 grid-flow-col gap-2">
									{Object.entries(stats).map(([key, stat], index) => (
										<Tooltip
											delay={500}
											placement="bottom"
											content={stat.label}
										>
											<div
												className="flex flex-row gap-2 w-fit"
												key={`${stat.label}-${index}`}
											>
												<div>{emoji.emojify(stat.emoji)}</div>
												<div
													className={`${stat.hidden ? 'blur-sm select-none' : ''}`}
												>
													<span className="font-semibold">
														{stat.prefix}
														{stat.hidden
															? '******'
															: stat.sinceStartOfTheYear
																? stat.sinceStartOfTheYear.toLocaleString()
																: ''}
														{!stat.hidden && stat.suffix}
													</span>
													{stat.unit && <span> {stat.unit}</span>}
												</div>
											</div>
										</Tooltip>
									))}
								</div>
							</ModalBody>
							<ModalFooter></ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

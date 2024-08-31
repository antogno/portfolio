import {
	Image,
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react';
import * as emoji from 'node-emoji';

interface Props {
	cat: 'axl' | 'lilli';
}

export default (props: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Link
				role="button"
				className="capitalize"
				size="sm"
				color="foreground"
				underline="always"
				onPress={() => onOpen()}
			>
				<span className="text-xs">{props.cat}</span>
			</Link>
			<Modal size="md" isOpen={isOpen} onClose={onClose}>
				<ModalContent>
					{() => (
						<>
							<ModalHeader className="flex flex-col gap-1 capitalize">
								{props.cat} {emoji.emojify(':heart:')}
							</ModalHeader>
							<ModalBody>
								<Image
									isBlurred
									height={1024}
									width={768}
									alt={props.cat.charAt(0).toUpperCase() + props.cat.slice(1)}
									src={`/images/${props.cat}.jpeg`}
								/>
							</ModalBody>
							<ModalFooter></ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

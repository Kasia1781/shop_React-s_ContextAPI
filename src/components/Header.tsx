import { useRef } from 'react';
import Modal, { ModalHandle } from './Modal';

type HeaderProps = {
	image: {
		src: string;
		alt: string;
	};
};

export default function Header({ image }: HeaderProps) {
	const modal = useRef<ModalHandle>(null);

	function handleOpenCartClick() {
		modal.current?.open();
	}

	return (
		<>
			<Modal ref={modal} />
			<header id='main-header'>
				<div id='main-title'>
					<img {...image} />
					<h1>Elegant Context</h1>
				</div>
				<div>
					<button onClick={handleOpenCartClick}>Cart(0)</button>
				</div>
			</header>
		</>
	);
}

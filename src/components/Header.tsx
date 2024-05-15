import { type ReactNode, useRef } from 'react';
import Modal, { ModalHandle } from './Modal';
import { useCartContext } from '../store/shopping-cart-context';

type HeaderProps = {
	image: {
		src: string;
		alt: string;
	};
};

export default function Header({ image }: HeaderProps) {
	const modal = useRef<ModalHandle>(null);

	const { items } = useCartContext();

	const cartQuantity = items.length;

	function handleOpenCartClick() {
		modal.current?.open();
	}

	let modalAction: ReactNode = <button>Close</button>;

	if (cartQuantity > 0) {
		modalAction = (
			<>
				<button>Close</button>
				<button>Checkout</button>
			</>
		);
	}

	return (
		<>
			<Modal ref={modal} actions={modalAction} />
			<header id='main-header'>
				<div id='main-title'>
					<img {...image} />
					<h1>Elegant Context</h1>
				</div>
				<div>
					<button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
				</div>
			</header>
		</>
	);
}

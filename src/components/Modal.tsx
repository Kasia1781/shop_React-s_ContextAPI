import { forwardRef, type ReactNode, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';
import { useCartContext } from '../store/shopping-cart-context';

export type ModalHandle = {
	actions?: ReactNode;
	open: () => void;
};

const Modal = forwardRef<ModalHandle>(function Modal({ actions }, ref) {
	const dialog = useRef<HTMLDialogElement>(null);

	useImperativeHandle(ref, () => {
		return {
			open: () => {
				if (dialog.current) {
					dialog.current.showModal();
				}
			},
		};
	});

	return createPortal(
		<dialog ref={dialog} id='modal'>
			<h2>Your cart</h2>
			<Cart />
			<form method='dialog' id='modal-actions'>
				{actions}
			</form>
		</dialog>,
		document.getElementById('modal')!
	);
});

export default Modal;

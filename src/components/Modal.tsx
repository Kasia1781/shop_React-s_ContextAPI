import { forwardRef, type ReactNode, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

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
			<h2>TYTUŁ</h2>
			DANE PRODUKTU
			<form method='dialog' id='modal-actions'>
				{actions}
			</form>
		</dialog>,
		document.getElementById('modal')!
	);
});

export default Modal;

import { useCartContext } from '../store/shopping-cart-context';

export default function Cart() {
	const cartCtx = useCartContext();
	console.log(cartCtx?.items);

	return (
		<div id='cart'>
			<ul id='cart-items'>
				<li>
					<div>
						<span>NAME</span>
						<span> PRICE</span>
					</div>
					<div className='cart-item-actions'>
						<button>-</button>
						<span>QUANTITY</span>
						<button>+</button>
					</div>
				</li>
			</ul>
			<p id='cart-total-price'>
				Cart Total: <strong>PRICE</strong>
			</p>
		</div>
	);
}

import { useCartContext } from '../store/shopping-cart-context';

export default function Cart() {
	const { items } = useCartContext();
	console.log(items);

	const totalPrice = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

	return (
		<div id='cart'>
			{items.length === 0 && <p>No items in cart!</p>}
			{items.length > 0 && (
				<ul id='cart-items'>
					{items.map((item) => {
						const formattedPrice = `$${item.price.toFixed(2)}`;

						return (
							<li key={item.id}>
								<div>
									<span>{item.name}</span>
									<span> ({formattedPrice})</span>
								</div>
								<div className='cart-item-actions'>
									<button>-</button>
									<span>{item.quantity}</span>
									<button>+</button>
								</div>
							</li>
						);
					})}
				</ul>
			)}
			<p id='cart-total-price'>
				Cart Total: <strong>{formattedTotalPrice}</strong>
			</p>
		</div>
	);
}

type ProductProps = {
	product: {
		id: string;
		image: string;
		title: string;
		price: number;
		description: string;
	};
};

export default function Product({ product }: ProductProps) {
	return (
		<article className='product'>
			<img src={product.image} alt={product.title} />
			<div className='product-content'>
				<div>
					<h3>{product.title}</h3>
					<p className='product-price'>${product.price}</p>
					<p>{product.description}</p>
				</div>
				<div className='product-actions'>
					<button>Add To Card</button>
				</div>
			</div>
		</article>
	);
}

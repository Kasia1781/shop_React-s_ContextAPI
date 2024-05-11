import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Shop from './components/Shop';
import logoImg from '/logo.png';
import { DUMMY_PRODUCTS } from './dummy-products.js';

console.log(DUMMY_PRODUCTS);

function App() {
	type Product = {
		id: string;
		image: string;
		title: string;
		price: number;
		description: string;
	};

	return (
		<>
			<Header image={{ src: logoImg, alt: 'A women' }} />
			<Shop>
				{DUMMY_PRODUCTS.map((product: Product) => (
					<li key={product.id}>
						<Product product={product} />
					</li>
				))}
			</Shop>
		</>
	);
}

export default App;

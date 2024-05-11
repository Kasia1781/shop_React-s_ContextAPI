import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Shop from './components/Shop';
import logoImg from '/logo.png';

function App() {
	return (
		<>
			<Header image={{ src: logoImg, alt: 'A women' }} />
			<Shop>
				<Product />
			</Shop>
		</>
	);
}

export default App;

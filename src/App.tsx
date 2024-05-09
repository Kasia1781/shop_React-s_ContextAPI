import './App.css';
import Header from './components/Header';
import logoImg from '../public/logo.png';

function App() {
	return (
		<>
			<Header image={{ src: logoImg, alt: 'A women' }} />
		</>
	);
}

export default App;

type HeaderProps = {
	image: {
		src: string;
		alt: string;
	};
};

export default function Header({ image }: HeaderProps) {
	return (
		<header id='main-header'>
			<div id='main-title'>
				<img {...image} />
				<h1>Elegant Context</h1>
			</div>
			<div>
				<button>Cart(0)</button>
			</div>
		</header>
	);
}

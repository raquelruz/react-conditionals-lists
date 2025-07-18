import "./ProductList.css";

const INITIAL_PRODUCTS = [
	{ name: "Camiseta", price: 19.99 },
	{ name: "Pantalón", price: 29.99 },
	{ name: "Zapatillas", price: 49.99 },
];

export const ProductList = () => {
	return (
		<div className="container">
			<h2>Productos</h2>

			<div className="product-grid">
				{INITIAL_PRODUCTS.map((product, index) => (
					<div className="product-card" key={`${product.name}-${index}`}>
						<h3>{product.name}</h3>
						<p>{product.price.toFixed(2)} €</p>
					</div>
				))}
			</div>
		</div>
	);
};

import { useState } from "react";
import "./DynamicShoppingList.css";

export const DynamicShoppingList = () => {
	const [products, setProducts] = useState([]);
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!name.trim() || !quantity.trim()) return;
		setProducts([...products, { name: name.trim(), quantity: quantity.trim() }]);
		setName("");
		setQuantity("");
	};

	return (
		<div className="shoppinglist-container">
			<h2>Lista de compra</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Nombre producto"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<input
					type="number"
					placeholder="Cantidad"
					value={quantity}
					onChange={(event) => setQuantity(event.target.value)}
					min="1"
				/>
				<button type="submit">Añadir</button>
			</form>

			<ul>
				{products.map((product, index) => (
					<li key={`${product}-${index}`}>
						{product.name} — {product.quantity}
					</li>
				))}
			</ul>
		</div>
	);
};

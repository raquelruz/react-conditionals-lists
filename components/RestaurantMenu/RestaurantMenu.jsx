import { useState } from "react";
import "./RestaurantMenu.css";

const menu = [
	{ name: "Tortilla de patatas", price: 6.5, category: "Entrante" },
	{ name: "Paella", price: 12.9, category: "Principal" },
	{ name: "Tarta de queso", price: 4.5, category: "Postre" },
];

const categories = ["Entrante", "Principal", "Postre"];

export const RestaurantMenu = () => {
	const [selectedCategory, setSelectedCategory] = useState("Entrante");

	const filteredMenu = menu.filter((item) => item.category === selectedCategory);

	return (
		<div className="menu-container">
			<h2>Carta del Restaurante</h2>

			<select
				value={selectedCategory}
				onChange={(event) => setSelectedCategory(event.target.value)}
				aria-label="Seleccionar categoría"
			>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>

			<ul>
				{filteredMenu.map((dish, index) => (
					<li key={index} className="dish-item">
						<span className="dish-name">{dish.name}</span>
						<span className="dish-price">{dish.price.toFixed(2)} €</span>
					</li>
				))}
			</ul>
		</div>
	);
};

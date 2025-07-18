import { useState } from "react";
import "./ToggleItemsLists.css";

const INITIAL_TOGGLES = [
	{ id: 1, label: "Notificaciones" },
	{ id: 2, label: "Modo oscuro" },
	{ id: 3, label: "Sonido" },
];

export const ToggleItemsList = () => {
	const [activeItems, setActiveItems] = useState([]);

	const toggle = (id) => {
		setActiveItems((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]));
	};

	return (
		<div className="toggle-container">
			<h2>Ajustes</h2>
			<ul>
				{INITIAL_TOGGLES.map((item) => (
					<li key={item.id} className={activeItems.includes(item.id) ? "active" : "inactive"}>
						<span>{item.label}</span>
						<button onClick={() => toggle(item.id)}>
							{activeItems.includes(item.id) ? "Activo" : "Inactivo"}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

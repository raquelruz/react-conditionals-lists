import { useState } from "react";
import "./PizzaOrdersAdvanced.css";

const INITIAL_ORDERS = [
	{ id: 1, orderName: "Pizza Margarita", price: 9.9 },
	{ id: 2, orderName: "Pizza Atún", price: 11.5 },
	{ id: 3, orderName: "Pizza Calzone de Trufa", price: 15.5 },
	{ id: 4, orderName: "Pizza Jamón y Rúcula", price: 13.5 },
];

const INITIAL_FORM_VALUES = {
	orderName: "",
	price: "",
};

export const PizzaOrdersAdvanced = () => {
	const [orders, setOrders] = useState(INITIAL_ORDERS);
	const [completed, setCompleted] = useState([]);
	const [newOrder, setNewOrder] = useState(INITIAL_FORM_VALUES);

	const onComplete = (id) => {
		const order = orders.find((o) => o.id === id);
		if (!order) return;

		setOrders(orders.filter((o) => o.id !== id));
		setCompleted([...completed, order]);
	};

	const onNewOrderSubmit = (e) => {
		e.preventDefault();
		if (!newOrder.orderName.trim() || !newOrder.price.trim()) {
			alert("Por favor, completa todos los campos");
			return;
		}

		const priceNum = Number(newOrder.price);
		if (isNaN(priceNum) || priceNum <= 0) {
			alert("Introduce un precio válido");
			return;
		}

		const order = {
			id: Date.now(),
			orderName: newOrder.orderName.trim(),
			price: priceNum.toFixed(2),
		};

		setOrders([...orders, order]);
		setNewOrder(INITIAL_FORM_VALUES);
	};

	const onInputChange = (e) => {
		const { name, value } = e.target;
		setNewOrder((prev) => ({ ...prev, [name]: value }));
	};

	const totalFacturado = completed.reduce((acc, order) => acc + Number(order.price), 0).toFixed(2);

	return (
		<div className="pizza-container">
			<h2 className="title">🍕 Pizzería React Avanzada</h2>

			<form onSubmit={onNewOrderSubmit} className="form">
				<input
					type="text"
					name="orderName"
					value={newOrder.orderName}
					placeholder="Nombre del pedido"
					onChange={onInputChange}
					className="input"
				/>
				<input
					type="number"
					name="price"
					value={newOrder.price}
					placeholder="Precio (€)"
					onChange={onInputChange}
					className="input"
					step="0.01"
					min="0"
				/>
				<button type="submit" className="main-button">
					✚ Añadir pedido
				</button>
			</form>

			<section>
				<h3 className="subtitle">📦 Pedidos pendientes</h3>
				{orders.length === 0 && <p className="message">No hay pedidos pendientes</p>}
				<ul>
					{orders.map((order) => (
						<li key={order.id} className="item">
							<span>
								{order.orderName} - {order.price} €
							</span>
							<button onClick={() => onComplete(order.id)} className="action-button">
								✅ Completar
							</button>
						</li>
					))}
				</ul>
			</section>

			<hr className="divider" />

			<section>
				<h3 className="subtitle">✅ Pedidos completados</h3>
				{completed.length === 0 && <p className="message">No hay pedidos completados</p>}
				<ul>
					{completed.map((order) => (
						<li key={order.id} className="item completed">
							{order.orderName} - {order.price} €
						</li>
					))}
				</ul>
			</section>

			<section>
				<h3 className="title">💶 Total Facturado</h3>
				<p className="total">{totalFacturado} €</p>
			</section>
		</div>
	);
};

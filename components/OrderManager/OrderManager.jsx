import { useState } from "react";
import "./OrderManager.css";

export const OrderManager = () => {
	const [orders, setOrders] = useState([]);
	const [completed, setCompleted] = useState([]);
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");

	const addOrder = (event) => {
		event.preventDefault();
		if (!name || !price) return;
		setOrders([...orders, { name, price }]);
		setName("");
		setPrice("");
	};

	const completeOrder = (index) => {
		const done = orders[index];
		setCompleted([...completed, done]);
		setOrders(orders.filter((_, index) => index !== index));
	};

	return (
		<div className="ordermanager-container">
			<h2>Pedidos</h2>
			<form onSubmit={addOrder}>
				<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Nombre" />
				<input value={price} onChange={(event) => setPrice(event.target.value)} placeholder="Precio" />
				<button>Añadir</button>
			</form>

			<h3>Pendientes</h3>
			<ul>
				{orders.map((order, index) => (
					<li key={index}>
						{order.name} - {order.price} €<button onClick={() => completeOrder(index)}>Completar</button>
					</li>
				))}
			</ul>

			<h3>Completados</h3>
			<ul>
				{completed.map((order, index) => (
					<li key={index}>
						{order.name} - {order.price} €
					</li>
				))}
			</ul>
		</div>
	);
};

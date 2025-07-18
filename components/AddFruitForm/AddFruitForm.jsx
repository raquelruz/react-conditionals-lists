import { useState } from "react";
import "./AddFruitForm.css";

export const AddFruitForm = () => {
	const [fruits, setFruits] = useState([]);
	const [newFruit, setNewFruit] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setFruits([...fruits, newFruit]);
		setNewFruit("");
	};

	return (
		<div className="fruitform-container">
			<form onSubmit={handleSubmit}>
				<input value={newFruit} onChange={(element) => setNewFruit(element.target.value)} />
				<button type="submit">Añadir</button>
			</form>

			<ul>
				{fruits.map((fruit, index) => (
					<li key={index}>{fruit}</li>
				))}
			</ul>
		</div>
	);
};

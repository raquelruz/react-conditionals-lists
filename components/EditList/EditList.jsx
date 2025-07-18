import { useState } from "react";
import './EditList.css'

const INITIAL_NAMES = ["Laura", "Pedro", "Isabel"];

export const EditList = () => {
	const [names, setNames] = useState(INITIAL_NAMES);
	const [editingIndex, setEditingIndex] = useState(null);
	const [newName, setNewName] = useState("");

	const startEditing = (index) => {
		setEditingIndex(index);
		setNewName(names[index]);
	};

	const saveName = (index) => {
		const updated = [...names];
		updated[index] = newName.trim();
		setNames(updated);
		setEditingIndex(null);
		setNewName("");
	};

	return (
		<div className="editlist-container">
			<h2>Lista editable</h2>
			<ul>
				{names.map((name, index) => (
					<li key={index}>
						{editingIndex === index ? (
							<>
								<input
									value={newName}
									onChange={(event) => setNewName(event.target.value)}
								/>
								<button onClick={() => saveName(index)}>Guardar</button>
							</>
						) : (
							<>
								{name}
								<button onClick={() => startEditing(index)}>Editar</button>
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
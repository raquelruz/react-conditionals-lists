import { useState } from "react";
import "./UserFilterList.css";

const users = [
	{ id: 1, name: "Antonio" },
	{ id: 2, name: "Beatriz" },
	{ id: 3, name: "Carmen" },
];

export const UserFilterList = () => {
	const [search, setSearch] = useState("");

	const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

	return (
		<div className="userfilter-container">
			<h2>Buscar usuario</h2>
			<input
				type="text"
				placeholder="Buscar por nombre"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
			<ul>
				{filteredUsers.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
				{filteredUsers.length === 0 && <li>No se encontraron usuarios</li>}
			</ul>
		</div>
	);
};

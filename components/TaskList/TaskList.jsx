import { useState } from "react";
import "./TaskList.css";
const INITIAL_TASKS = [
	{ id: 1, title: "Hacer la compra" },
	{ id: 2, title: "Llamar al médico" },
	{ id: 3, title: "Estudiar React" },
];

export const TaskList = () => {
	return (
		<div className="tasklist-container">
			<h2 className="title">Lista de tareas</h2>

			<ul>
				{INITIAL_TASKS.map((task) => {
					return (
						<li key={task.id}>
							{task.title} {" "}
							<label>
								<input type="checkbox" name="task" id="task" />
							</label>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

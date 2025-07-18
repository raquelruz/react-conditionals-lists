import { useState } from "react";
import "./ScoreBoard.css";

const initialPlayers = [
	{ id: 1, name: "Mario", score: 10 },
	{ id: 2, name: "Lucía", score: 15 },
	{ id: 3, name: "David", score: 8 },
];

export const ScoreBoard = () => {
	const [players, setPlayers] = useState(initialPlayers);

	const increaseScore = (id) => {
		const updated = players.map((player) => (player.id === id ? { ...player, score: player.score + 1 } : player));
		setPlayers(updated);
	};

	return (
		<div className="scoreboard-container">
			<h2>Marcador</h2>
			<ul>
				{players.map((player) => (
					<li key={player.id}>
						<span>{player.name}</span>
						<span className="score">{player.score} puntos</span>
						<button onClick={() => increaseScore(player.id)}>+1</button>
					</li>
				))}
			</ul>
		</div>
	);
};

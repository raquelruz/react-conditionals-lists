import { useState } from "react";
import "./MovieFavorites.css";

const initialMovies = [
	{ id: 1, title: "El laberinto del fauno" },
	{ id: 2, title: "Mar adentro" },
	{ id: 3, title: "Ocho apellidos vascos" },
];

export const MovieFavorites = () => {
	const [movies, setMovies] = useState(initialMovies);

	const removeMovie = (id) => {
		setMovies(movies.filter((movie) => movie.id !== id));
	};

	return (
		<div className="movies-container">
			<h2>Películas favoritas</h2>
			<ul>
				{movies.map((movie) => (
					<li key={`${movie.title}-${movie.id}`}>
						<span>{movie.title}</span>
						<button onClick={() => removeMovie(movie.id)}>Quitar</button>
					</li>
				))}
				{movies.length === 0 && <p>No tienes películas favoritas.</p>}
			</ul>
		</div>
	);
};

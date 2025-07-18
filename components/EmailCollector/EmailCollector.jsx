import { useState } from "react";
import "./EmailCollector.css";

export const EmailCollector = () => {
	const [email, setEmail] = useState("");
	const [emails, setEmails] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const trimmedEmail = email.trim();
		if (!trimmedEmail) return;
		if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
			alert("Por favor, introduce un email válido.");
			return;
		}
		setEmails([...emails, trimmedEmail]);
		setEmail("");
	};

	return (
		<div className="emailcollector-container">
			<h2>Recoger Emails</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Introduce tu email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					required
				/>
				<button type="submit">Añadir</button>
			</form>

			<ul>
				{emails.map((event, index) => (
					<li key={index}>{event}</li>
				))}
				{emails.length === 0 && <p>No hay emails registrados.</p>}
			</ul>
		</div>
	);
};

import React from "react";
import Button from "../components/ui/Button";
import buildHamster from "../assets/build-hamster.png";
import "../styles/pages/buildPage.scss";

export default function BuildPage() {
	return (
		<main className="buildpage">
			<div className="buildpage-inner">
				<div className="buildpage-png">
					<img
						src={buildHamster}
						alt="Śmieszny Chomik architekt w ochronnym kasku i projektem budowy"
					/>
				</div>
				<header className="buildpage-header">
					<h1 className="buildpage-h">Strona w budowie</h1>
					<p>
						Właśnie rozbudowujemy naszą norkę. Nasi mali architekci pracują nad
						tą sekcją, aby dostarczyć Ci jeszcze więcej wiedzy i
						funkcjonalności.
					</p>
					<strong>Zajrzyj do nas ponownie wkrótce.</strong>
				</header>

				<Button to="/" variant="primary">
					Wróć na stronę główną
				</Button>
			</div>
		</main>
	);
}

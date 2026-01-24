import React from "react";
import "../styles/pages/contactPage.scss";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
export default function ContactPage() {
	return (
		<main className="page-contact">
			<div className="page-contact-inner">
				<header className="header-contact">
					<div className="hero-contact">Jesteśmy tu dla Ciebie</div>
					<h1 className="contact-heading">Skontaktuj się z nami</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
						recusandae doloribus molestias beatae eius rem sed ducimus eaque
						natus. Aliquam reiciendis nemo reprehenderit quos cumque dolore
						aliquid tempora aspernatur minima.
					</p>
				</header>
				<section className="contact-fonts">
					<div className="contact-container">
						<div className="contact-row">
							<div className="contact-icon">
								<Mail />
							</div>
							<div className="contact-text">
								<div className="contact-label">e-mail</div>
								<div clasNames="contact-value">chrum@kwik.pl</div>
							</div>
						</div>

						<div className="contact-row">
							<div className="contact-icon">
								<Phone />
							</div>
							<div className="contact-text">
								<div className="contact-label">Telefon</div>
								<div className="contact-value">+48 123 456 789</div>
							</div>
						</div>

						<div className="contact-row">
							<div className="contact-icon">
								<MapPin />
							</div>
							<div className="contact-text">
								<div className="contact-label">Miejscowsość</div>
								<div className="contact-value">Chrumianki, Polska</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

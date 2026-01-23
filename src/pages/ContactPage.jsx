import React from "react";
import "../styles/pages/contactPage.scss";

export default function ContactPage() {
	return (
		<main className="page-contact">
			<header className="header-contact">
				<h1 className="contact">Kontakt</h1>
				<p>Masz pytania? Napisz do nas lub zadzwoń- chętnie pomożemy.</p>
			</header>
			<section className="contact-grid">
				<div className="contact-grid_left">
					<div className="card">
						<h2>Napisz do nas</h2>
						<form className="form" noValidate>
							<div className="form-row form-row_two">
								<div className="form-field">
									<label for="name">Imię i nazwisko</label>
									<input
										id="name"
										name="name"
										class="input "
										autocomplete="name"
										required=""
										value=""></input>
									<span class="form__error">&nbsp;</span>
								</div>
								<div className="form-field">
									<label for="phone">Telefon</label>
									<input
										id="phone"
										name="phone"
										class="input "
										type="tel"
										inputmode="tel"
										maxlength="15"
										autocomplete="tel"
										required=""
										value=""></input>
									<span class="form-error">&nbsp;</span>
								</div>
							</div>
							<div className="form-field">
								<label for="email">E-mail</label>
								<input
									id="email"
									name="email"
									type="email"
									class="input "
									autocomplete="email"
									required=""
									value=""></input>
							</div>
							<div class="form-field">
								<label for="subject">Temat</label>
								<input
									id="subject"
									name="subject"
									class="input "
									required=""
									value=""></input>
								<span class="form-error">&nbsp;</span>
							</div>
							<div class="form-field">
								<label for="message">Wiadomość</label>
								<textarea
									id="message"
									name="message"
									class="textarea "
									rows="6"
									required=""></textarea>
								<span class="form-error">&nbsp;</span>
							</div>
							<div class="form-field">
								<div className="check">
									<input
										id="consent"
										name="consent"
										type="checkbox"
										required=""></input>
									<label for="consent" class="check__label">
										Zapoznałem/am się i akceptuję{" "}
										<a
											href="/polityka-prywatnosci.pdf"
											target="_blank"
											rel="noopener noreferrer">
											politykę prywatności
										</a>
										.
									</label>
								</div>
								<span class="form-error">&nbsp;</span>
							</div>
							<div class="form-actions">
								<button class="btn-primary" type="submit">
									Wyślij
								</button>
							</div>
						</form>
					</div>
				</div>
				<aside className="contact-grid_right">
					<div className="card">
						<h2>Dane organizacji</h2>
						<ul class="contact-list">
							<li>
								<strong>Polish XHamster Club</strong>
							</li>
							<li>ul. Chrumska 3, 98-400 Chrumków</li>
							<li>NIP: 3333333333</li>
							<li>REGON: 333333333</li>
						</ul>
						<h3>Kontakt</h3>
						<ul class="contact-list">
							<li>
								Tel: <a href="tel:+48620000000">+48 62 000 00 00</a> lub{" "}
								<a href="tel:+48000000000">+48 000 000 000</a>
							</li>
							<li>
								E-mail: <a href="mailto:chrum@kwikkwik.pl">chrum@kwikkwik.pl</a>
							</li>
						</ul>
					</div>
				</aside>
			</section>
		</main>
	);
}

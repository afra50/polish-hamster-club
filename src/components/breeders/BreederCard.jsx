import React from "react";
import { Globe, Facebook, Instagram, Mail } from "lucide-react"; // Usunąłem Phone
import "../../styles/components/breeders/breederCard.scss";

export default function BreederCard({ data }) {
  // Dodajemy 'owners' do destrukturyzacji
  const { name, owners, city, specialization, logo, socials } = data;

  const hasSocials = socials.website || socials.facebook || socials.instagram;
  // Teraz kontakt to tylko mail (chyba że dodasz coś innego w przyszłości)
  const hasContact = socials.mail;

  return (
    <article className="breeder-card">
      {/* Logo Wrapper */}
      <div className="breeder-card__logo-wrapper">
        <img src={logo} alt={`Logo ${name}`} className="breeder-card__logo" />
      </div>

      {/* Treść */}
      <div className="breeder-card__content">
        <h3 className="breeder-card__name">{name}</h3>

        {/* --- NOWE: Imię i nazwisko hodowcy --- */}
        <p className="breeder-card__owners">{owners}</p>

        <p className="breeder-card__city">{city}</p>

        <div className="breeder-card__details">
          <span className="label">Gatunki:</span>
          <span className="value">{specialization}</span>
        </div>

        {/* --- Pasek Akcji --- */}
        <div className="breeder-card__actions">
          {/* GRUPA 1: Social Media */}
          {hasSocials && (
            <div className="breeder-card__actions-group social-group">
              {socials.website && (
                <a
                  href={socials.website}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Strona www"
                >
                  <Globe size={20} />
                </a>
              )}
              {socials.facebook && (
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socials.instagram && (
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
            </div>
          )}

          {/* Separator (tylko jeśli mamy i sociale, i kontakt) */}
          {hasSocials && hasContact && (
            <div className="breeder-card__separator"></div>
          )}

          {/* GRUPA 2: Kontakt (Tylko mail) */}
          {hasContact && (
            <div className="breeder-card__actions-group contact-group">
              {socials.mail && (
                <a href={socials.mail} aria-label="Email" title="Napisz email">
                  <Mail size={20} />
                </a>
              )}
              {/* Telefon usunięty */}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

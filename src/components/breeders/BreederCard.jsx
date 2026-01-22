import React from "react";
import { Globe, Facebook, Instagram, Mail, Phone } from "lucide-react";
import "../../styles/components/breeders/breederCard.scss";

export default function BreederCard({ data }) {
  const { name, city, specialization, logo, socials } = data;

  // Sprawdzamy, czy istnieją poszczególne grupy linków
  const hasSocials = socials.website || socials.facebook || socials.instagram;
  const hasContact = socials.mail || socials.phone;

  return (
    <article className="breeder-card">
      {/* Logo Wrapper */}
      <div className="breeder-card__logo-wrapper">
        <img src={logo} alt={`Logo ${name}`} className="breeder-card__logo" />
      </div>

      {/* Treść */}
      <div className="breeder-card__content">
        <h3 className="breeder-card__name">{name}</h3>
        <p className="breeder-card__city">{city}</p>

        <div className="breeder-card__details">
          <span className="label">Gatunki:</span>
          <span className="value">{specialization}</span>
        </div>

        {/* --- Pasek Akcji (Footer karty) --- */}
        <div className="breeder-card__actions">
          {/* GRUPA 1: Social Media (Lewa strona) */}
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

          {/* Separator (widoczny tylko jeśli mamy obie grupy) */}
          {hasSocials && hasContact && (
            <div className="breeder-card__separator"></div>
          )}

          {/* GRUPA 2: Kontakt Bezpośredni (Prawa strona) */}
          {hasContact && (
            <div className="breeder-card__actions-group contact-group">
              {socials.mail && (
                <a href={socials.mail} aria-label="Email" title="Napisz email">
                  <Mail size={20} />
                </a>
              )}
              {socials.phone && (
                // Usuwamy spacje z numeru dla linku "tel:"
                <a
                  href={`tel:${socials.phone.replace(/\s/g, "")}`}
                  aria-label="Telefon"
                  title="Zadzwoń"
                >
                  <Phone size={20} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

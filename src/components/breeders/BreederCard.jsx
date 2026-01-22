import React from "react";
import { Globe, Facebook, Instagram, Mail } from "lucide-react";
import "../../styles/components/breeders/breederCard.scss";

export default function BreederCard({ data }) {
  const { name, city, specialization, logo, socials } = data;

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
          <span className="label">Specjalizacja:</span>
          <span className="value">{specialization}</span>
          <span className="sub-text">Etyczna hodowla domowa.</span>
        </div>

        {/* Ikony Social Media */}
        <div className="breeder-card__socials">
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
          {socials.mail && (
            <a href={socials.mail} aria-label="Email">
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

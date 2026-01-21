import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "../../assets/hero-hamster.jpg";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        {/* LEWA STRONA: Zdjęcie (szerokie) */}
        <div className="hero-section__image-box">
          <img src={heroImg} alt="Chomik syryjski" className="hero-img" />
        </div>

        {/* PRAWA STRONA: Tekst (wjeżdża na zdjęcie) */}
        <div className="hero-section__content-box">
          <div className="hero-card">
            {/* Zmiana nadtytułu na nazwę organizacji */}
            <span className="accent-surtitle">Polish Hamster Club</span>

            {/* Nowy, wymyślony nagłówek pasujący do kontekstu */}
            <h1>Rozwijamy standardy etycznej hodowli.</h1>

            {/* Tekst Lorem Ipsum zgodnie z życzeniem */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sed diam eget risus varius blandit sit amet non magna. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum
              nulla sed consectetur.
            </p>

            <div className="hero-actions">
              <Link to="/breeders" className="btn btn--primary">
                Zobacz hodowle <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FALA DOLNA: Bez zmian */}
      <div className="hero-wave">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L60,245.3C120,235,240,213,360,218.7C480,224,600,256,720,266.7C840,277,960,267,1080,234.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

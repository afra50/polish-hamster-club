import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Award, Calendar } from "lucide-react";

export default function PillarsSection() {
  const pillars = [
    {
      icon: <BookOpen size={40} />,
      title: "Genetyka",
      desc: "Rzetelna wiedza",
      link: "/knowledge",
    },
    {
      icon: <Award size={40} />,
      title: "Żywienie",
      desc: "Zdrowa dieta",
      link: "/knowledge",
    },
    {
      icon: <Calendar size={40} />,
      title: "Lokum",
      desc: "Odpowiednie warunki",
      link: "/knowledge",
    },
  ];

  return (
    <section className="pillars-section">
      {/* FALA GÓRNA (BIAŁA) - Bez zmian */}
      <div className="pillars-wave-top">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/*
             Ta ścieżka rysuje BIAŁE tło. Aby uzyskać efekt niebieskiej sekcji
             idącej "Góra -> Dół -> Góra", biała ścieżka musi wykonać:
             "Głęboki w dół -> Płytki w górę -> Głęboki w dół".
          */}
          <path
            fill="#ffffff"
            fillOpacity="1"
            // Start góra-lewo, linia do góra-prawo, zejście w dół na prawo.
            // Pierwszy łuk (C): mocne wygięcie w dół (y=280), potem w górę (y=100) do środka.
            // Drugi łuk (C): znów mocne wygięcie w dół (y=280), potem w górę (y=100) do lewej krawędzi.
            d="M0,0 L1440,0 L1440,160 C1200,280 960,100 720,180 C480,280 240,100 0,160 Z"
          ></path>
        </svg>
      </div>

      <div className="pillars-section__container">
        <div className="pillars-section__header">
          <h2>Edukacja to podstawa.</h2>
        </div>
        <div className="pillars-section__grid">
          {pillars.map((pillar, index) => (
            <Link to={pillar.link} key={index} className="pillar-item">
              <div className="pillar-item__icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </Link>
          ))}
        </div>
        <div className="pillars-section__cta">
          <Link to="/knowledge" className="btn btn--outline-white">
            Baza wiedzy →
          </Link>
        </div>
      </div>

      {/* FALA DOLNA (BIAŁA) - GŁĘBOKI ASYMETRYCZNY DOŁEK Z PRAWEJ */}
      <div className="pillars-wave-bottom">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Logika kształtu (patrząc na sekcję niebieską):
            M0,60 -> Zaczynamy dość "płytko" z lewej.
            C550,60 -> Przez pierwszą połowę ekranu fala jest spokojna.
            1100,380 -> Potem następuje GWAŁTOWNE zejście w dół po prawej stronie (x=1100),
                        tworząc głęboki "dołek" niebieskiego tła.
            1440,100 -> Na samym końcu fala wraca w górę.
          */}
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,60 C550,60 1100,380 1440,100 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Award, Calendar } from "lucide-react";
import WaveDoubleCurve from "../ui/WaveDoubleCurve";
import WaveAsymmetricDip from "../ui/WaveAsymmetricDip";
import Button from "../ui/Button";

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
      {/* Przekazujemy tylko klasę pozycjonującą "--top" */}
      <WaveDoubleCurve className="ui-wave--top" />

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
          <Button to="/knowledge" variant="outline-white">
            Baza wiedzy →
          </Button>
        </div>
      </div>

      {/* Przekazujemy tylko klasę pozycjonującą "--bottom" */}
      <WaveAsymmetricDip className="ui-wave--bottom" />
    </section>
  );
}

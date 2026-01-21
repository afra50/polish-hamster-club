import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "../../assets/hero-hamster.jpg";
import DoubleWave from "../ui/DoubleWave";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        {/* LEWA STRONA: Zdjęcie */}
        <div className="hero-section__image-box">
          <img src={heroImg} alt="Chomik syryjski" className="hero-img" />
        </div>

        {/* PRAWA STRONA: Tekst */}
        <div className="hero-section__content-box">
          <div className="hero-card">
            <span className="accent-surtitle">Polish Hamster Club</span>
            <h1>Rozwijamy standardy etycznej hodowli.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sed diam eget risus varius blandit sit amet non magna. Cras mattis
              consectetur purus sit amet fermentum.
            </p>

            <div className="hero-actions">
              <Button to="/breeders" variant="primary">
                Zobacz hodowle <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <DoubleWave className="ui-wave--bottom" />
    </section>
  );
}

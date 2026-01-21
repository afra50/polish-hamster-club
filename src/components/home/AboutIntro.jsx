import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import aboutImg from "../../assets/about-breeder.jpg";

export default function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="about-intro__container">
        {/* Kolumna 1: Tekst */}
        <div className="about-intro__content">
          <h2>
            Odpowiedzialna hodowla
            <br />
            to nasza wspólna misja.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla
            tellus elit, varius non commodo eget, mattis vel eros. In sed ornare
            nulla.
          </p>
          <Button to="/about" variant="outline">
            O klubie <ArrowRight size={18} />
          </Button>
        </div>

        {/* Kolumna 2: Zdjęcie */}
        <div className="about-intro__image">
          <img src={aboutImg} alt="Hodowcy z chomikami" />
        </div>
      </div>
    </section>
  );
}

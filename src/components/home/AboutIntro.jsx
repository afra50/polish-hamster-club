import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import aboutImg from "../../assets/about-breeder.webp";

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
            Stawiamy na najwyższe standardy. Nasze hodowle działają w oparciu o
            jasno określone cele hodowlane, rzetelną wiedzę z zakresu genetyki
            oraz wzajemne wsparcie i współpracę. Dążymy do tego, aby członkostwo
            w naszym Klubie było wyraźnym znakiem jakości i zaufania - zarówno
            dla hodowców, jak i dla miłośników chomików.
          </p>
          <Button to="/o-nas" variant="outline">
            O klubie <ArrowRight size={18} />
          </Button>
        </div>

        {/* Kolumna 2: Zdjęcie */}
        <div className="about-intro__image">
          <img src={aboutImg} alt="Chomik dżungarski" />
        </div>
      </div>
    </section>
  );
}

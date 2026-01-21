import React from "react";
import { Link } from "react-router-dom";
import joinHamsterImg from "../../assets/join-hamster-floating.png";
import DecorativeCircles from "../ui/DecorativeCircles";

export default function JoinCta() {
  return (
    <section className="join-cta">
      <div className="join-cta__container">
        {/* Lewa: Zdjęcie chomika + TŁO */}
        <div className="join-cta__image">
          {/* Tu wstawiamy nasz nowy komponent z tłami */}
          <DecorativeCircles />

          {/* Zdjęcie chomika */}
          <img
            src={joinHamsterImg}
            alt="Chomik stojący"
            className="hamster-img"
          />
        </div>

        {/* Prawa: Tekst */}
        <div className="join-cta__content">
          <h2>
            Twórz z nami
            <br />
            przyszłość
            <br />
            etycznej hodowli.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <Link to="/join" className="btn btn--primary">
            Dołącz do nas →
          </Link>
        </div>
      </div>
    </section>
  );
}

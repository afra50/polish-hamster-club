import React from "react";
import { Link } from "react-router-dom";
import joinHamsterImg from "../../assets/join-hamster-floating.png";
import DecorativeCircles from "../ui/DecorativeCircles";
import Button from "../ui/Button";

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
            Dołącz do nas i twórz razem z nami społeczność ludzi, którym
            naprawdę zależy na zdrowiu, dobrostanie i przyszłości zwierząt.
            Razem możemy więcej - wymieniaj się doświadczeniem, zdobywaj wiedzę
            i rozwijaj swoją pasję wśród osób z podobnymi aspiracjami.
          </p>
          <Button to="/dolacz" variant="primary">
            Dołącz do nas →
          </Button>
        </div>
      </div>
    </section>
  );
}

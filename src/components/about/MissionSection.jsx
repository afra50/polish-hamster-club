import React from "react";
import missionImg from "../../assets/about-mission.jpg";

export default function MissionSection() {
  return (
    <section className="mission-section">
      <div className="mission-section__container">
        {/* LEWA: TEKST */}
        <div className="mission-section__content">
          <h2>Nasza Misja</h2>
          <p>
            Klub powstał z myślą o rozwoju odpowiedzialnej hodowli chomików w
            Polsce. Kilkoro doświadczonych hodowców, dotychczas zrzeszonych w
            czeskim i niemieckim klubie chomika, postanowiło stworzyć podobne
            miejsce także w swoim kraju. Naszym celem jest budowanie
            przestrzeni, w której nowi hodowcy mogą znaleźć rzetelne informacje,
            wsparcie oraz pomoc na każdym etapie swojej drogi. Chcemy, aby osoby
            zainteresowane hodowlą miały jedno, jasne miejsce, do którego mogą
            zwrócić się po porady, edukację i praktyczne wskazówki.
          </p>
          <p>
            Promujemy najwyższe standardy opieki nad chomikami, odpowiedzialne
            podejście do hodowli oraz stawianie dobra zwierząt i ich potrzeb na
            pierwszym miejscu. Istotną częścią działalności założycieli Klubu
            jest również realna pomoc zwierzętom w potrzebie. Członkowie Klubu
            angażują się - lub angażowali się w przeszłości - w działania
            związane z ratowaniem, leczeniem oraz adopcją chomików wymagających
            wsparcia. Wierzymy, że odpowiedzialna hodowla to nie tylko rozwój
            gatunku, ale także troska o każde zwierzę i budowanie świadomej,
            wrażliwej społeczności.
          </p>
        </div>

        {/* PRAWA: ZDJĘCIE */}
        <div className="mission-section__image">
          <img src={missionImg} alt="Nasza misja – etyczna hodowla" />
        </div>
      </div>
    </section>
  );
}

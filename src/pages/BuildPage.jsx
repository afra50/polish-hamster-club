import React from "react";
import Button from "../components/ui/Button";
import buildHamster from "../assets/build-hamster.png";
import WaveAsymmetricDip from "../components/ui/WaveAsymmetricDip";
import WaveBigCurve from "../components/ui/WaveBigCurve";
import OrganicBackground from "../components/ui/OrganicBackground";
import "../styles/pages/buildPage.scss";

export default function BuildPage() {
  return (
    <main className="buildpage">
      <div className="buildpage-inner">
        {/* Wrapper na obrazek i tło */}
        <div className="buildpage-image-wrapper">
          {/* Tutaj wstawiamy nasz nowy komponent */}
          <OrganicBackground />

          <img
            className="hamster-img"
            src={buildHamster}
            alt="Chomik budowniczy"
          />
        </div>

        <header className="buildpage-header">
          <h1 className="buildpage-h">Strona w budowie</h1>
          <p>
            Nasi mali architekci pracują nad tą sekcją, aby dostarczyć Ci
            jeszcze więcej wiedzy i funkcjonalności.
          </p>
          <strong>Zajrzyj tutaj ponownie wkrótce.</strong>
        </header>

        <Button to="/" variant="primary">
          Wróć na stronę główną
        </Button>
      </div>

      <div className="buildpage-wave-bottom">
        <WaveBigCurve className="ui-wave--teal" />
      </div>
    </main>
  );
}

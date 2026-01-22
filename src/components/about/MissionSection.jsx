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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed diam eget risus varius blandit sit amet non magna. Cras mattis
            consectetur purus sit amet fermentum.
          </p>
          <p>
            Curabitur blandit tempus porttitor. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet.
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

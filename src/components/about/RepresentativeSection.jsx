import React from "react";
import DecorativeCircles from "../ui/DecorativeCircles";
import kamilPhoto from "../../assets/kamil_about.jpg";
import "../../styles/components/about/representativeSection.scss";

export default function RepresentativeSection() {
  return (
    <section className="representative-section">
      <div className="representative-section__container">
        <h2>Przedstawiciel Klubu</h2>

        <div className="representative-visual">
          {/* dekoracyjne koła */}
          <DecorativeCircles />

          {/* zdjecie */}
          <div className="representative-visual__icon">
            <img src={kamilPhoto} alt="Kamil Pokorski – Przedstawiciel Klubu" />
          </div>
        </div>

        <div className="representative-meta">
          <h3>Kamil Pokorski</h3>
          <p>Przedstawiciel Stowarzyszenia</p>
        </div>
      </div>
    </section>
  );
}

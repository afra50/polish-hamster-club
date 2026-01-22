import React from "react";
import heroAbout from "../../assets/hero-about.jpg";
import WaveAsymmetricDip from "../ui/WaveAsymmetricDip";

export default function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${heroAbout})` }}
    >
      <div className="about-hero__overlay"></div>

      <div className="about-hero__container">
        <h1>O naszym klubie</h1>
        <p>Pasja, wiedza i etyczna hodowla.</p>
      </div>

      {/* Biała fala na dole */}
      <WaveAsymmetricDip className="ui-wave--bottom" />
    </section>
  );
}

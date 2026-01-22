import React from "react";
import heroBreeders from "../../assets/hero-breeders.jpg";
import WaveBigCurve from "../ui/WaveBigCurve";

export default function BreedersHero() {
  return (
    <section
      className="breeders-hero"
      style={{ backgroundImage: `url(${heroBreeders})` }}
    >
      <div className="breeders-hero__container">
        <div className="breeders-hero__text">
          <h1>Nasze Hodowle</h1>
        </div>
      </div>

      {/* TRIK NA POFALOWANY DÓŁ:
         Mamy dwie fale. 
         1. Morska (--hero-bottom) jest przesunięta do góry.
         2. Biała (--hero-mask) jest na samym dole i przykrywa prostą krawędź morskiej.
      */}

      {/* Warstwa 1: Morska fala (przesunięta w górę w SCSS) */}
      <WaveBigCurve className="ui-wave--hero-bottom" />

      {/* Warstwa 2: Biała fala maskująca (przycina dół morskiej) */}
      <WaveBigCurve className="ui-wave--hero-mask" />
    </section>
  );
}

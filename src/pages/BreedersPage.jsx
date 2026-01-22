import React from "react";
import BreedersHero from "../components/breeders/BreedersHero";
import BreederCard from "../components/breeders/BreederCard";
import { breedersData } from "../data/breeders";
import WaveBigCurve from "../components/ui/WaveBigCurve";
import "../styles/pages/breedersPage.scss";

export default function BreedersPage() {
  return (
    <main className="breeders-page">
      {/* 1. Hero z zieloną falą na dole */}
      <BreedersHero />

      {/* 2. Grid z białym tłem */}
      <section className="breeders-list">
        <div className="breeders-list__container">
          {breedersData.map((breeder) => (
            <BreederCard key={breeder.id} data={breeder} />
          ))}
        </div>

        {/* 3. Czarna fala na dole (przejście w stopkę) */}
        {/* Przekazujemy klasę, która w SCSS ustawi kolor fill i dużą wysokość */}
        <WaveBigCurve className="ui-wave--bottom-footer" />
      </section>
    </main>
  );
}

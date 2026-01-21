import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutIntro from "../components/home/AboutIntro";
import PillarsSection from "../components/home/PillarsSection";
import JoinCta from "../components/home/JoinCta";
import "../styles/pages/home.scss";

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <AboutIntro />
      <PillarsSection />
      <JoinCta />
    </main>
  );
}

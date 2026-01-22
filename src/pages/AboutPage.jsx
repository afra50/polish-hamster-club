import React from "react";
import AboutHero from "../components/about/AboutHero";
import MissionSection from "../components/about/MissionSection";
import GoalsSection from "../components/about/GoalsSection";
import BoardSection from "../components/about/BoardSection";
import "../styles/pages/aboutPage.scss";

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutHero />
      <MissionSection />
      <GoalsSection />
      <BoardSection />
    </main>
  );
}

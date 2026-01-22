import React from "react";
import AboutHero from "../components/about/AboutHero";
import MissionSection from "../components/about/MissionSection";
import GoalsSection from "../components/about/GoalsSection";
import RepresentativeSection from "../components/about/RepresentativeSection";
import "../styles/pages/aboutPage.scss";

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutHero />
      <MissionSection />
      <GoalsSection />
      <RepresentativeSection />
    </main>
  );
}

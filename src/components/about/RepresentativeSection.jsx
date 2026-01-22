import React from "react";
import { User } from "lucide-react";
import DecorativeCircles from "../ui/DecorativeCircles";
import "../../styles/components/about/representativeSection.scss";

export default function RepresentativeSection() {
  return (
    <section className="representative-section">
      <div className="representative-section__container">
        <h2>Przedstawiciel Klubu</h2>

        <div className="representative-visual">
          {/* dekoracyjne koła */}
          <DecorativeCircles />

          {/* ikona */}
          <div className="representative-visual__icon">
            <User size={64} />
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

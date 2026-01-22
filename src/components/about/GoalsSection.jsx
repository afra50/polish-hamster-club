import React from "react";
import { Check } from "lucide-react";
import WaveAsymmetricDip from "../ui/WaveAsymmetricDip";

export default function GoalsSection() {
  return (
    <section className="goals-section">
      {/* --- FALE GÓRNE (Tworzą górną wstęgę) --- */}
      <div className="goals-section__waves-top">
        {/* Warstwa 1: Zielona (pod spodem) */}
        <WaveAsymmetricDip className="ui-wave--goal-green" />
        {/* Warstwa 2: Biała (maska na wierzchu) */}
        <WaveAsymmetricDip className="ui-wave--goal-white" />
      </div>

      <div className="goals-section__container">
        <h2>Nasze Cele</h2>

        <div className="goals-section__grid">
          <div className="goals-section__column">
            <div className="goal-item">
              <span className="goal-item__icon">
                <Check size={16} />
              </span>
              <div className="goal-item__content">
                <h3>Stworzenie standardu hodowli</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="goal-item">
              <span className="goal-item__icon">
                <Check size={16} />
              </span>
              <div className="goal-item__content">
                <h3>Edukacja nowych właścicieli</h3>
                <p>
                  Integer posuere erat a ante venenatis dapibus posuere velit.
                </p>
              </div>
            </div>
          </div>

          <div className="goals-section__column">
            <div className="goal-item">
              <span className="goal-item__icon">
                <Check size={16} />
              </span>
              <div className="goal-item__content">
                <h3>Wsparcie i rozwój hodowców</h3>
                <p>Aenean lacinia bibendum nulla sed consectetur.</p>
              </div>
            </div>
            <div className="goal-item">
              <span className="goal-item__icon">
                <Check size={16} />
              </span>
              <div className="goal-item__content">
                <h3>Organizacja spotkań i wystaw</h3>
                <p>Cras mattis consectetur purus sit amet fermentum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FALE DOLNE (Tworzą dolną wstęgę) --- */}
      <div className="goals-section__waves-bottom">
        {/* Warstwa 1: Zielona (pod spodem) */}
        <WaveAsymmetricDip className="ui-wave--goal-green" />
        {/* Warstwa 2: Biała (maska na wierzchu) */}
        <WaveAsymmetricDip className="ui-wave--goal-white" />
      </div>
    </section>
  );
}

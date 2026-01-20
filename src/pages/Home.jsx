import React from "react";
import { Link } from "react-router-dom";
import hamsterImg from "../assets/chomik.jpg"; // Upewnij się, że masz tu zdjęcie
import "../styles/pages/_home.scss"; // <--- IMPORT STYLU

export default function Home() {
  return (
    <div className="page-home">
      <h2>
        Witaj w <span>Polish Hamster Club</span>
      </h2>

      <p className="intro-text">
        Najlepsze miejsce dla miłośników chomików w Polsce.
        <br />
        Dołącz do naszej społeczności i dziel się pasją!
      </p>

      {/* Wyświetlanie zdjęcia (jeśli plik istnieje) */}
      <img src={hamsterImg} alt="Szczęśliwy chomik" />

      <div className="actions">
        <Link to="/about" className="cta-button">
          Dowiedz się więcej
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Kolumna 1: Brand (Zmieniona ikona na obrazek) */}
        <div className="footer__col footer__brand">
          <Link to="/" className="footer__logo">
            {/* ZMIANA: Dodajemy tag img zamiast emoji */}
            <img
              src="/logo.png"
              alt="Logo Polish Hamster Club"
              className="footer__logo-img"
            />
            <span>Polish Hamster Club</span>
          </Link>
          <p>
            © {currentYear} Polish Hamster Club.
            <br />
            Wszelkie prawa zastrzeżone.
          </p>
        </div>

        {/* Kolumna 2: Menu (Bez zmian) */}
        <div className="footer__col">
          <h4>Menu</h4>
          <ul>
            <li>
              <Link to="/o-nas">O klubie</Link>
            </li>
            <li>
              <Link to="/hodowcy">Hodowle</Link>
            </li>
            <li>
              <Link to="/wiedza">Baza wiedzy</Link>
            </li>
            <li>
              <Link to="/wydarzenia">Wystawy i Wydarzenia</Link>
            </li>
            <li>
              <Link to="/dolacz">Dołącz do nas</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>

        {/* Kolumna 3: Pliki / Dokumenty (Bez zmian) */}
        <div className="footer__col">
          <h4>Dokumenty</h4>
          <ul>
            <li>
              <a
                href="/pliki/statut.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Statut Związku
              </a>
            </li>
            <li>
              <a
                href="/pliki/regulamin.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Regulamin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

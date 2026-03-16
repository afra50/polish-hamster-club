import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Kolumna 1: Brand (Bez zmian) */}
        <div className="footer__col footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon">🐹</span>
            <span>Polish Hamster Club</span>
          </Link>
          <p>
            © {currentYear} Polish Hamster Club.
            <br />
            Wszelkie prawa zastrzeżone.
          </p>
        </div>

        {/* Kolumna 2: Menu (Jak w headerze) */}
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
              {/* Kontakt przeniesiony tutaj, bo zazwyczaj jest w menu */}
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>

        {/* Kolumna 3: Pliki / Dokumenty */}
        <div className="footer__col">
          {/* Nazwałem to "Dokumenty", brzmi lepiej w stopce niż "Pliki" */}
          <h4>Dokumenty</h4>
          <ul>
            <li>
              <Link to="/status">Statut Związku</Link>
            </li>
            <li>
              <Link to="/regulamin">Regulamin</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

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
              <Link to="/about">O klubie</Link>
            </li>
            <li>
              <Link to="/breeders">Hodowle</Link>
            </li>
            <li>
              <Link to="/knowledge">Baza wiedzy</Link>
            </li>
            <li>
              <Link to="/events">Wystawy i Wydarzenia</Link>
            </li>
            <li>
              {/* Kontakt przeniesiony tutaj, bo zazwyczaj jest w menu */}
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>

        {/* Kolumna 3: Pliki / Dokumenty */}
        <div className="footer__col">
          {/* Nazwałem to "Dokumenty", brzmi lepiej w stopce niż "Pliki" */}
          <h4>Dokumenty</h4>
          <ul>
            <li>
              <Link to="/statute">Statut Związku</Link>
            </li>
            <li>
              <Link to="/regulations">Regulamin</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

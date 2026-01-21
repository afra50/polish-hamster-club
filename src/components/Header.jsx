import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importujemy ikony
import Button from "./ui/Button";
import "../styles/components/header.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Funkcja do przełączania menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Funkcja zamykająca menu po kliknięciu w link (ważne dla UX)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-icon">🐹</span>
          <div className="header__logo-text">
            <span>Polish</span>
            <span>Hamster Club</span>
          </div>
        </Link>

        {/* Przycisk Burgera (widoczny tylko na mobile) */}
        <button
          className="header__burger"
          onClick={toggleMenu}
          aria-label="Przełącz menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Wrapper dla menu i CTA. 
            Na desktopie to zwykły flex. 
            Na mobile to wysuwany panel.
        */}
        <div className={`header__menu-wrapper ${isOpen ? "open" : ""}`}>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li>
                <NavLink to="/about" onClick={closeMenu}>
                  O klubie
                </NavLink>
              </li>
              <li>
                <NavLink to="/knowledge" onClick={closeMenu}>
                  Baza wiedzy
                </NavLink>
              </li>
              <li>
                <NavLink to="/breeders" onClick={closeMenu}>
                  Nasi hodowcy
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" onClick={closeMenu}>
                  Wystawy i Wydarzenia
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu}>
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header__cta">
            <Button to="/join" variant="primary" onClick={closeMenu}>
              Dołącz do nas
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

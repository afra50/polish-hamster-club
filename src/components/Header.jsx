import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/components/header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">🐹</span>
          <div className="header__logo-text">
            <span>Polish</span>
            <span>Hamster Club</span>
          </div>
        </Link>

        {/* Nawigacja */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <NavLink to="/about">O klubie</NavLink>
            </li>
            <li>
              <NavLink to="/knowledge">Baza wiedzy</NavLink>
            </li>
            <li>
              <NavLink to="/breeders">Nasi hodowcy</NavLink>
            </li>
            <li>
              <NavLink to="/events">Wystawy i Wydarzenia</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontakt</NavLink>
            </li>
          </ul>
        </nav>

        {/* CTA */}
        <div className="header__cta">
          <Link to="/join" className="btn btn--primary">
            Dołącz do nas
          </Link>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import { Home } from "lucide-react";
import Button from "../components/ui/Button"; // Import Twojego Buttona
import hamster404 from "../assets/404-hamster.png";
import "../styles/pages/notFoundPage.scss";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-page__container">
        {/* Tło tekstowe */}
        <div className="not-found-page__bg-text">404</div>

        {/* Treść główna */}
        <div className="not-found-page__content">
          <div className="not-found-page__image-wrapper">
            <img src={hamster404} alt="Zagubiony chomik" />
          </div>

          <h1 className="not-found-page__title">Nie znaleziono strony.</h1>

          <p className="not-found-page__text">
            Adres, który wpisałeś, jest niepoprawny lub strona przestała
            istnieć.
          </p>

          {/* Użycie Twojego komponentu Button */}
          <Button to="/" variant="primary">
            <Home size={20} style={{ marginRight: "8px" }} />
            Wróć na stronę główną
          </Button>
        </div>
      </div>
    </main>
  );
}

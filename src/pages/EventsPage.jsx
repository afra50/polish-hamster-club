import React from "react";
import { Calendar, MapPin } from "lucide-react";
// Usunąłem import Button, bo już go tu nie używamy
import WaveAsymmetricDip from "../components/ui/WaveAsymmetricDip";
import "../styles/pages/eventsPage.scss";

import pokaz1 from "../assets/wystawa_22032026.jpg";

// --- DANE WYDARZEŃ ---
const eventsData = {
  upcoming: [], // Puste, więc wyświetli się komunikat o braku nadchodzących
  past: [
    {
      id: 1,
      title: "Dolnośląskie Targi Zoologiczne",
      date: "22.03.2026",
      location: "Tarczyński Arena Wrocław",
      image: pokaz1,
      type: "Pokaz",
      // ZMIANA: Dodane pole description
      description:
        "Pokaz rodowodowych chomików syryjskich i dżungarskich oraz mini wystawa edukacyjna.",
    },
  ],
};

export default function EventsPage() {
  return (
    <main className="events-page">
      {/* === 1. NAGŁÓWEK TEKSTOWY === */}
      <section className="events-header">
        <div className="events-header__container">
          <h1>Kalendarz Wydarzeń</h1>
          <p>
            Polish Hamster Club to nie tylko hodowla, to także społeczność.
            Sprawdź, gdzie możesz nas spotkać na żywo lub online i zobacz
            szczegóły z minionych wydarzeń.
          </p>
        </div>
      </section>

      {/* === 2. NADCHODZĄCE WYDARZENIA (Wstęga) === */}
      <section className="events-upcoming">
        <div className="events-upcoming__wave-top">
          <WaveAsymmetricDip className="ui-wave--white" />
        </div>

        <div className="events-upcoming__container">
          {eventsData.upcoming.length > 0 ? (
            <div className="events-grid">
              {eventsData.upcoming.map((event) => (
                <article key={event.id} className="event-card">
                  <div className="event-card__image-wrapper">
                    <img src={event.image} alt={event.title} />
                    <span className="event-card__tag">{event.type}</span>
                  </div>
                  <div className="event-card__content">
                    <div className="event-card__meta">
                      <span>
                        <Calendar size={16} /> {event.date}
                      </span>
                      <span>
                        <MapPin size={16} /> {event.location}
                      </span>
                    </div>
                    <h3>{event.title}</h3>
                    {/* ZMIANA: Dodany opis zamiast przycisku */}
                    <p className="event-card__description">
                      {event.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="events-empty">
              <h3>Brak zaplanowanych wydarzeń</h3>
              <p>
                Aktualnie nie mamy ogłoszonych nadchodzących wystaw ani spotkań.
                Zachęcamy do regularnego sprawdzania tej strony lub obserwowania
                naszych kanałów informacyjnych.
              </p>
            </div>
          )}
        </div>

        <div className="events-upcoming__wave-bottom">
          <WaveAsymmetricDip className="ui-wave--white" />
        </div>
      </section>

      {/* === 3. ARCHIWUM WYDARZEŃ === */}
      <section className="events-archive">
        <div className="events-archive__container">
          <h2 className="section-title">Archiwum wydarzeń</h2>

          {eventsData.past.length > 0 ? (
            <div className="events-grid events-grid--compact">
              {eventsData.past.map((event) => (
                <article key={event.id} className="event-card event-card--past">
                  <div className="event-card__image-wrapper">
                    <img src={event.image} alt={event.title} />
                    <div className="event-card__overlay">
                      <span>Zakończone</span>
                    </div>
                  </div>
                  <div className="event-card__content">
                    <div className="event-card__meta">
                      <span>
                        <Calendar size={14} /> {event.date}
                      </span>
                      <span>
                        <MapPin size={14} /> {event.location}
                      </span>
                    </div>
                    <h3>{event.title}</h3>
                    {/* ZMIANA: Dodany opis zamiast przycisku */}
                    <p className="event-card__description">
                      {event.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="events-empty events-empty--archive">
              <p>Archiwum wydarzeń jest obecnie puste.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

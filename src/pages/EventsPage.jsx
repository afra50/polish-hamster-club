import React from "react";
import { Calendar, MapPin } from "lucide-react";
// Dostosuj ścieżki importów do swojej struktury folderów
import Button from "../components/ui/Button";
import WaveAsymmetricDip from "../components/ui/WaveAsymmetricDip";
import "../styles/pages/eventsPage.scss";

import heroBreeders from "../assets/hero-breeders.jpg";
import aboutBreeder from "../assets/about-breeder.jpg";
import hamstersGroup from "../assets/hamsters-group.png";
import aboutMission from "../assets/about-mission.jpg";

// --- PRZYKŁADOWE DANE (MOCK DATA) ---
const eventsData = {
  upcoming: [
    {
      id: 1,
      title: "X Krajowa Wystawa Chomików",
      date: "15.10.2024",
      location: "Warszawa, EXPO XXI",
      image: heroBreeders,
      type: "Wystawa",
      link: "/wydarzenia/wystawa-warszawa",
    },
    {
      id: 2,
      title: "Spotkanie hodowców – jesień 2024",
      date: "28.11.2024",
      location: "Online",
      image: aboutMission,
      type: "Spotkanie",
      link: "/wydarzenia/spotkanie-online",
    },
  ],
  past: [
    {
      id: 3,
      title: "Spotkanie integracyjne hodowców",
      date: "02.06.2024",
      location: "Katowice",
      image: hamstersGroup,
      type: "Spotkanie",
      link: "/archiwum/spotkanie-slask",
    },
    {
      id: 4,
      title: "Warsztaty: Podstawy hodowli",
      date: "14.04.2024",
      location: "Kraków",
      image: aboutBreeder,
      type: "Edukacja",
      link: "/archiwum/warsztaty-krakow",
    },
    {
      id: 5,
      title: "IX Wystawa Klubowa",
      date: "10.02.2024",
      location: "Poznań",
      image: heroBreeders,
      type: "Wystawa",
      link: "/archiwum/wystawa-poznan",
    },
  ],
};
// ------------------------------------

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
        {/* Fala GÓRNA (Biała na kolorowym tle) */}
        <div className="events-upcoming__wave-top">
          <WaveAsymmetricDip className="ui-wave--white" />
        </div>

        <div className="events-upcoming__container">
          {/* Karty renderowane z danych */}
          {eventsData.upcoming.length > 0 ? (
            <div className="events-grid">
              {eventsData.upcoming.map((event) => (
                // Karta w wersji podstawowej (wyróżnionej)
                <article key={event.id} className="event-card">
                  <div className="event-card__image-wrapper">
                    <img src={event.image} alt={event.title} />
                    {/* Tag typu wydarzenia (np. Wystawa) */}
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
                    <div className="event-card__actions">
                      {/* Przycisk pełny (primary) dla nadchodzących */}
                      <Button
                        to={event.link}
                        variant="primary"
                        className="full-width"
                      >
                        Zobacz szczegóły
                      </Button>
                    </div>
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

        {/* Fala DOLNA (Biała na kolorowym tle) */}
        <div className="events-upcoming__wave-bottom">
          <WaveAsymmetricDip className="ui-wave--white" />
        </div>
      </section>

      {/* === 3. ARCHIWUM WYDARZEŃ === */}
      <section className="events-archive">
        <div className="events-archive__container">
          <h2 className="section-title">Archiwum wydarzeń</h2>

          {/* Grid zagęszczony dla archiwum */}
          {eventsData.past.length > 0 ? (
            <div className="events-grid events-grid--compact">
              {eventsData.past.map((event) => (
                // Karta z modyfikatorem --past (wyszarzona)
                <article key={event.id} className="event-card event-card--past">
                  <div className="event-card__image-wrapper">
                    <img src={event.image} alt={event.title} />
                    {/* Nakładka "Zakończone" zamiast taga */}
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
                    <div className="event-card__actions">
                      {/* Przycisk obrysowy (outline) dla archiwum */}
                      <Button
                        to={event.link}
                        variant="outline"
                        className="full-width"
                      >
                        Zobacz szczegóły
                      </Button>
                    </div>
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

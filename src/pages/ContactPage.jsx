import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import WaveAsymmetricDip from "../components/ui/WaveAsymmetricDip";
// Importujemy nowy komponent
import DecorativeBlobs from "../components/ui/DecorativeBlobs";
import "../styles/pages/contactPage.scss";

export default function ContactPage() {
  return (
    <main className="page-contact">
      {/* --- FALA NA GÓRZE --- */}
      <div className="contact-wave-top">
        <WaveAsymmetricDip className="ui-wave--teal" />
      </div>

      {/* --- NOWY KOMPONENT Z BLOBAMI --- */}
      <DecorativeBlobs />

      {/* --- GŁÓWNA TREŚĆ --- */}
      <div className="page-contact-inner">
        <header className="header-contact">
          <div className="hero-contact">Jesteśmy tu dla Ciebie</div>
          <h1 className="contact-heading">Skontaktuj się z nami</h1>
          <p>
            Masz pytania dotyczące hodowli, chcesz dołączyć do klubu lub po
            prostu porozmawiać o chomikach? Jesteśmy do Twojej dyspozycji.
          </p>
        </header>

        <section className="contact-fonts">
          <div className="contact-container">
            <div className="contact-row">
              <div className="contact-icon">
                <Mail />
              </div>
              <div className="contact-text">
                <div className="contact-label">e-mail</div>
                <div className="contact-value">biuro@klubchomika.pl</div>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon">
                <Phone />
              </div>
              <div className="contact-text">
                <div className="contact-label">Telefon</div>
                <div className="contact-value">+48 123 456 789</div>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div className="contact-text">
                <div className="contact-label">Siedziba</div>
                <div className="contact-value">Warszawa, Polska</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

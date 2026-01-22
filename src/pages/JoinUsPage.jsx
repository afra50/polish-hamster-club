import React from "react";
import { Check, FileText, PenTool, CreditCard, Send } from "lucide-react";
// Zakładam, że te komponenty masz w tych ścieżkach
import Button from "../components/ui/Button";
import WaveAsymmetricDip from "../components/ui/WaveAsymmetricDip";
import "../styles/pages/joinUsPage.scss";

export default function JoinUsPage() {
  return (
    <main className="join-us-page">
      {/* --- 1. NAGŁÓWEK (Czysty tekst, bez zdjęcia) --- */}
      <section className="join-header">
        <div className="join-header__container">
          <h1>Dołącz do Polskiego Klubu Chomika</h1>
          <p>
            Tworzymy profesjonalną społeczność hodowców i miłośników. Poniżej
            znajdziesz informacje o wymogach formalnych oraz dokumenty do
            pobrania.
          </p>
        </div>
      </section>

      {/* --- 2. SEKCKA "WSTĘGA" (Turkusowe tło + Białe fale + Karty) --- */}
      <section className="membership-section">
        {/* FALA GÓRNA (Biała - maskuje przejście z białego nagłówka) */}
        <div className="membership-section__wave-top">
          <WaveAsymmetricDip className="ui-wave--white" />
        </div>

        <div className="membership-section__container">
          <div className="membership-intro">
            <h2>Rodzaje Członkostwa</h2>
          </div>

          <div className="plans-grid">
            {/* KARTA 1: HODOWCA */}
            <div className="plan-card plan-card--primary">
              <div className="plan-card__header">
                <h3>Członek Zwyczajny (Hodowca)</h3>
              </div>
              <ul className="plan-card__features">
                <li>
                  <Check size={20} /> Czynne i bierne prawo wyborcze
                </li>
                <li>
                  <Check size={20} /> Rejestracja przydomka hodowlanego
                </li>
                <li>
                  <Check size={20} /> Wydawanie rodowodów klubowych
                </li>
                <li>
                  <Check size={20} /> Dostęp do zamkniętej Strefy Hodowcy
                </li>
                <li>
                  <Check size={20} /> Bezpłatny udział w webinarach
                  specjalistycznych
                </li>
              </ul>
              <div className="plan-card__footer">
                <Button
                  to="/dokumenty"
                  variant="outline"
                  className="full-width"
                >
                  Szczegóły i deklaracja →
                </Button>
              </div>
            </div>

            {/* KARTA 2: MIŁOŚNIK */}
            <div className="plan-card">
              <div className="plan-card__header">
                <h3>Członek Wspierający (Miłośnik)</h3>
              </div>
              <ul className="plan-card__features">
                <li>
                  <Check size={20} /> Wsparcie statutowej działalności Klubu
                </li>
                <li>
                  <Check size={20} /> Dostęp do bazy materiałów edukacyjnych
                </li>
                <li>
                  <Check size={20} /> Newsletter i zniżki na wydarzenia otwarte
                </li>
                <li>
                  <Check size={20} /> Udział w spotkaniach integracyjnych
                </li>
                <li>
                  <Check size={20} /> Możliwość konsultacji z ekspertami
                </li>
              </ul>
              <div className="plan-card__footer">
                <Button
                  to="/dokumenty"
                  variant="outline"
                  className="full-width"
                >
                  Szczegóły i deklaracja →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FALA DOLNA (Biała - maskuje przejście do białej sekcji kroków) */}
        <div className="membership-section__wave-bottom">
          <WaveAsymmetricDip className="ui-wave--white" />
        </div>
      </section>

      {/* --- 3. PROCES I PLIKI (Ikony + Linki PDF) --- */}
      <section className="steps-section">
        <div className="steps-section__container">
          <h2>Proces rejestracji i dokumenty</h2>

          <div className="steps-grid">
            {/* Krok 1 */}
            <div className="step-item">
              <div className="step-item__icon">
                <FileText size={32} />
              </div>
              <h3>1. Zapoznaj się</h3>
              <p>
                Przeczytaj Statut, aby poznać nasze wartości i zasady etyczne.
              </p>
              <a href="/pliki/statut.pdf" className="file-link" download>
                Statut Klubu 2024 (PDF)
              </a>
            </div>

            {/* Krok 2 */}
            <div className="step-item">
              <div className="step-item__icon">
                <PenTool size={32} />
              </div>
              <h3>2. Wypełnij deklarację</h3>
              <p>
                Pobierz odpowiedni formularz, wydrukuj go i czytelnie wypełnij.
              </p>
              <a href="/pliki/deklaracja.pdf" className="file-link" download>
                Deklaracja Członkowska (PDF)
              </a>
            </div>

            {/* Krok 3 */}
            <div className="step-item">
              <div className="step-item__icon">
                <CreditCard size={32} />
              </div>
              <h3>3. Opłać składkę</h3>
              <p>
                Opłać składkę roczną na konto:
                <br />
                <strong>BANK XXXXXX</strong>
                <br />
                00 0000 0000 0000
              </p>
            </div>

            {/* Krok 4 */}
            <div className="step-item">
              <div className="step-item__icon">
                <Send size={32} />
              </div>
              <h3>4. Wyślij zgłoszenie</h3>
              <p>
                Skan deklaracji i potwierdzenie przelewu wyślij na:
                <br />
                <strong>biuro@klubchomika.pl</strong>
              </p>
            </div>
          </div>

          <div className="steps-note">
            Weryfikacja zgłoszenia trwa zazwyczaj do 14 dni roboczych.
          </div>
        </div>
      </section>
    </main>
  );
}

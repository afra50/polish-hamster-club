import React from "react";
import { FileText, PenTool, CreditCard, Send, Download } from "lucide-react";
// Zakładam, że te komponenty masz w tych ścieżkach
import WaveAsymmetricDip from "../components/ui/WaveAsymmetricDip";
import WaveDoubleCurve from "../components/ui/WaveDoubleCurve";

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
      <section className="join-process-section">
        {/* FALA GÓRNA (Biała - maskuje przejście z białego nagłówka) */}
        <div className="join-process-section__wave-top">
          <WaveAsymmetricDip className="ui-wave--white" />
        </div>

        <div className="join-process-section__container">
          <div className="join-process-intro">
            <h2>Proces rejestracji</h2>
          </div>

          <div className="steps-grid">
            <div className="step-item">
              <div className="step-item__icon">
                <FileText size={32} />
              </div>
              <h3>1. Zapoznaj się</h3>
              <p>
                Przeczytaj Statut, aby poznać nasze wartości i zasady etyczne.
              </p>
              <a href="/pliki/statut.pdf" className="file-link" download>
                Statut Klubu (PDF)
              </a>
            </div>

            <div className="step-item">
              <div className="step-item__icon">
                <PenTool size={32} />
              </div>
              <h3>2. Wypełnij deklarację</h3>
              <p>Pobierz formularz i wypełnij go czytelnie.</p>
              <a href="/pliki/deklaracja.pdf" className="file-link" download>
                Deklaracja członkowska (PDF)
              </a>
            </div>

            <div className="step-item">
              <div className="step-item__icon">
                <CreditCard size={32} />
              </div>
              <h3>3. Opłać składkę</h3>
              <p>
                Dokonaj opłaty składki zgodnie z informacjami w regulaminie.
              </p>
            </div>

            <div className="step-item">
              <div className="step-item__icon">
                <Send size={32} />
              </div>
              <h3>4. Wyślij zgłoszenie</h3>
              <p>
                Prześlij komplet dokumentów na adres:
                <br />
                <strong>biuro@klubchomika.pl</strong>
              </p>
            </div>
          </div>
        </div>

        {/* FALA DOLNA (Biała - maskuje przejście do białej sekcji kroków) */}
        <div className="join-process-section__wave-bottom">
          <WaveAsymmetricDip className="ui-wave--white" />
        </div>
      </section>

      {/* --- 3. WYMOGI I ZAŁOŻENIA --- */}
      <section className="join-requirements">
        <div className="join-requirements__container">
          <h2>Wymogi i założenia hodowli zrzeszonych w Klubie</h2>

          <div className="requirements-grid">
            <div className="requirement-card">
              <h3>Dobrostan zwierząt</h3>
              <ul>
                <li>
                  Zapewnienie odpowiednich warunków bytowych dla danego gatunku
                </li>
                <li>Dbałość o zdrowie, żywienie i bezpieczeństwo zwierząt</li>
                <li>Humanitarne postępowanie na każdym etapie hodowli</li>
              </ul>
            </div>

            <div className="requirement-card">
              <h3>Odpowiedzialna hodowla</h3>
              <ul>
                <li>Kontrolowana liczba miotów, zgodna z dobrymi praktykami</li>
                <li>Wydawanie zwierząt w odpowiednim wieku</li>
                <li>Świadomy dobór par hodowlanych</li>
              </ul>
            </div>

            <div className="requirement-card">
              <h3>Wiedza i etyka</h3>
              <ul>
                <li>
                  Szczegółowa wiedza z zakresu genetyki i behawioru gryzoni
                </li>
                <li>Znajomość zasad etycznej sprzedaży zwierząt</li>
                <li>Gotowość do przestrzegania standardów Klubu</li>
              </ul>
            </div>
          </div>

          <div className="requirements-note">
            Szczegółowe zasady znajdują się w dokumentach klubowych.
          </div>
        </div>
      </section>

      {/* --- 4. DOKUMENTY DO POBRANIA --- */}
      <section className="join-documents">
        {/* GÓRNA FALA – INNA DLA ODMIANY */}
        <div className="join-documents__wave-top">
          <WaveDoubleCurve className="ui-wave--white" />
        </div>

        <div className="join-documents__container">
          <h2>Dokumenty do pobrania</h2>

          <div className="documents-grid">
            <a href="/pliki/deklaracja.pdf" download className="document-tile">
              <div className="document-tile__left">
                <FileText size={28} />
                <span>Deklaracja członkowska</span>
              </div>

              <Download className="document-tile__download" size={20} />
            </a>

            <a href="/pliki/regulamin.pdf" download className="document-tile">
              <div className="document-tile__left">
                <FileText size={28} />
                <span>Regulamin hodowli</span>
              </div>

              <Download className="document-tile__download" size={20} />
            </a>

            <a href="/pliki/karta-miotu.pdf" download className="document-tile">
              <div className="document-tile__left">
                <FileText size={28} />
                <span>Karta miotu</span>
              </div>

              <Download className="document-tile__download" size={20} />
            </a>

            <a href="/pliki/przydomek.pdf" download className="document-tile">
              <div className="document-tile__left">
                <FileText size={28} />
                <span>Wniosek o przydomek</span>
              </div>

              <Download className="document-tile__download" size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

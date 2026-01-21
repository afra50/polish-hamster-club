import React from "react";
// Usuń import starego SCSS: import "../../styles/components/ui/doubleWave.scss";

export default function DoubleWave({ className = "" }) {
  // Bazowe klasy: ogólna fala UI + konkretny kształt (wysokość)
  const baseClass = "ui-wave ui-wave--double-wave";

  return (
    // Łączymy klasy bazowe z tymi przekazanymi przez props (np. pozycją --bottom)
    <div className={`${baseClass} ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fillOpacity="1"
          // fill jest teraz kontrolowany przez SCSS (domyślnie $white),
          // ale możesz go zostawić lub usunąć.
          d="M0,256L60,245.3C120,235,240,213,360,218.7C480,224,600,256,720,266.7C840,277,960,267,1080,234.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

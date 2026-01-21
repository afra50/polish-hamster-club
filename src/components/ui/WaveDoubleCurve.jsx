import React from "react";

export default function WaveDoubleCurve({ className = "" }) {
  // Dodajemy domyślne klasy UI, ale pozwalamy na dodanie własnych przez props
  const baseClass = "ui-wave ui-wave--double-curve";

  return (
    <div className={`${baseClass} ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fillOpacity="1"
          // fill jest teraz w SCSS, ale d domyślnie "#ffffff"
          d="M0,0 L1440,0 L1440,160 C1200,280 960,100 720,180 C480,280 240,100 0,160 Z"
        ></path>
      </svg>
    </div>
  );
}

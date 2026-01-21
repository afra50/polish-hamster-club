import React from "react";

export default function WaveAsymmetricDip({ className = "" }) {
  const baseClass = "ui-wave ui-wave--asymmetric-dip";

  return (
    <div className={`${baseClass} ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fillOpacity="1"
          d="M0,60 C550,60 1100,380 1440,100 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </div>
  );
}

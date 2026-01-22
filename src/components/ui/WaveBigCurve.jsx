import React from "react";

export default function WaveBigCurve({ className = "" }) {
  const baseClass = "ui-wave ui-wave--big-curve";

  return (
    <div className={`${baseClass} ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fillOpacity="1"
          // ZMIANY:
          // 1. Start: M0,160 (startujemy wyżej -> więcej tła)
          // 2. Bardziej dynamiczne łuki (większe różnice między górką a dołkiem)
          d="M0,160 
             C240,40 420,280 640,200 
             C800,120 1000,30 1240,100 
             C1360,130 1440,160 1440,160 
             L1440,320 L0,320 Z"
        ></path>
      </svg>
    </div>
  );
}

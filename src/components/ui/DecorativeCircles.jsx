import React from "react";
import "../../styles/components/ui/DecorativeCircles.scss";

export default function DecorativeCircles() {
  return (
    // Wrapper, który będzie pozycjonowany absolutnie nad rodzicem
    <div className="decorative-circles-layer">
      <div className="circle circle--1"></div>
      <div className="circle circle--2"></div>
      <div className="circle circle--3"></div>
    </div>
  );
}

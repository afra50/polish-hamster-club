import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/ui/button.scss";

export default function Button({
  to,
  variant = "primary",
  className = "",
  children,
  onClick,
  ...props
}) {
  // Budujemy klasę CSS na podstawie wariantu
  const baseClass = `btn btn--${variant} ${className}`;

  // Jeśli przekazano prop "to", renderujemy Link z React Router
  if (to) {
    return (
      <Link to={to} className={baseClass} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  // W przeciwnym razie renderujemy zwykły button
  return (
    <button className={baseClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

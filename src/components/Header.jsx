import { Link } from "react-router-dom";
import "../styles/components/_header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <h1>🐹 Polish Hamster Club</h1>
        <ul>
          <li>
            <Link to="/">Strona Główna</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

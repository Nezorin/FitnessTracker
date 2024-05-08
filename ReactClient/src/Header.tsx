import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Exercises">Exercises</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

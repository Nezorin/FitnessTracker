import React from "react";
import { Link } from "react-router-dom";

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

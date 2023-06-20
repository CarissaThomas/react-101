import React from "react"

export default function Header() {
    return (
      <header>
        <nav className="nav">
          <img className="goku" src="./goku-logo.png" />
          <ul className="nav-items">
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <h1>Chi Chi's Bistro</h1>
      </header>
    );
}
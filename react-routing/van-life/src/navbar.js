import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './navbar.css'


function Navbar() {
  return (
    <div class="navbar-container">
      <h1>#VANLIFE</h1>
      <div class="navbar-links">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

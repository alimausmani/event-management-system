import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Alpha Events</a>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/events">Events</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
        <a href="/signup">Signup</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Events</a>
      </div>
      <div className="navbar-menu">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/events">Events</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;

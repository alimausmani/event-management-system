import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Alpha Events</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="https://policies.google.com/privacy?hl=en-US">Privacy</a></li>
            <li><a href="https://policies.google.com/privacy?hl=en-US#infochoices">Policy</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfbcYeYgf0wQJ-LSPm3CPbyB7T1p0f5bnaA&s"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-dribbble"></i></a>
          <a href="#"><i className="fab fa-behance"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="footer-menu">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/gallery">Our Gallery</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2018. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

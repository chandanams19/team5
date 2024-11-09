// Navbar.js
import React from 'react';
import '../assets/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ShopEasy</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="nav-icons">
        <a href="#login">Login / Register</a>
        <span className="icon">❤️</span>
        <span className="icon">🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;

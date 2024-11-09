// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>ShopEasy</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="nav-icons">
        <ul className="nav-links">
            <li><Link to="/login">Login</Link> / <Link to="/register">Register</Link></li>
        </ul>
        <span className="icon">❤️</span>
        <span className="icon">🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;

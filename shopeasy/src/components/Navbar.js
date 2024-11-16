// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css';

const Navbar = ({ favoriteCount, cartCount }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Shopeasy</Link>
      <div className="nav-links">
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="nav-icons">
        <li>
          <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
        </li>
        <div className="icon-with-count">
          <i className="fa fa-shopping-cart"></i>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
        <div className="icon-with-count">
          <i className="fa fa-heart"></i>
          {favoriteCount > 0 && <span className="favorite-count">{favoriteCount}</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

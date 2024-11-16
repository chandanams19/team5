// Navbar.js
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css';


const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); 
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">Shopeasy</Link> {/* Link to Home */}
      </div>
      {/* <h1>ShopEasy</h1> */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="nav-icons">
        <ul className="nav-links">
          <li><Link to="/login">Login</Link> / <Link to="/register">Register</Link></li>
          <li className="navbar-cart">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li>
            <Link to="/heart">
              <i class="fa-solid fa-heart"></i>
            </Link>
          </li>
          <li className="navbar-search">
          {isSearchOpen ? (
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              autoFocus
              onBlur={toggleSearch} // Close the search bar on losing focus
            />
          ) : (
            <i className="fas fa-search search-icon" onClick={toggleSearch}></i>
          )}
        </li>



        </ul>

      </div>
    </nav>
  );
};

export default Navbar;

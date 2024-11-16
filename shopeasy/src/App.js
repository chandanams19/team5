// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Shop from './components/Shop';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import Payment from './components/Payment';
import './App.css';

const App = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const incrementFavoriteCount = () => {
    setFavoriteCount(favoriteCount + 1);
  };

  const incrementCartCount = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Router>
      <div className="App">
        <Navbar favoriteCount={favoriteCount} cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/shop" element={<Shop incrementFavoriteCount={incrementFavoriteCount} incrementCartCount={incrementCartCount} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

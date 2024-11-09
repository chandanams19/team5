// Banner.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Banner.css';

const Banner = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/shop'); // Redirect to the Shop component
  };

  return (
    <section className="banner">
      <div className="banner-text">
        <p>NEW FASHION</p>
        <h1>Spring Summer Collection</h1>
        <button className="shop-button" onClick={handleShopNowClick}>
          Shop Now
        </button>
      </div>
      <div className="banner-image">
        <img src="/images/dress.jpeg" alt="Spring Collection" />
      </div>
    </section>
  );
};

export default Banner;

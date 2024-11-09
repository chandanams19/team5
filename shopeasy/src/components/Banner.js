// Banner.js
import React from 'react';
import '../assets/Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <p>NEW FASHION</p>
        <h1>Spring Summer Collection</h1>
        <button className="shop-button">Shop Now</button>
      </div>
      <div className="banner-image">
        <img src={`${process.env.PUBLIC_URL}/images/dress.jpeg`} alt="Spring Collection" />
      </div>
    </section>
  );
};

export default Banner;

// Banner.js
import { useNavigate } from 'react-router-dom';
import '../assets/Banner.css';
import React, { useState, useEffect } from 'react';
const Banner = () => {
  const images = [
    '/images/banner-img-1.jpeg',
    '/images/banner-img-2.jpeg',
    '/images/shopping-banner.jpg',
  ];
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/shop'); // Redirect to the Shop component
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

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
      <img
          src={images[currentImageIndex]}
          alt="Spring Collection"
          className="rotating-image"
        />      </div>
    </section>
  );
};

export default Banner;

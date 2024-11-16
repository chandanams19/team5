// src/components/Shop.js
import React, { useEffect, useState } from 'react';
import '../assets/Shop.css';
import { useNavigate } from 'react-router-dom';
const Shop = ({ incrementFavoriteCount, incrementCartCount }) => {
  const navigate = useNavigate();
  const [dresses, setDresses] = useState([]);
  const handleBuyNow = (dress) => {
    navigate('/payment', { state: { dress } });
  };
  useEffect(() => {
    fetch('./json/shop.json')
      .then(response => response.json())
      .then(data => setDresses(data))
      .catch(error => console.error("Error loading shop data:", error));
  }, []);

  return (
    <div className="shop-container">
      <h1>Shop Our Collection</h1>
      <div className="dresses-grid">
        {dresses.map(dress => (
          <div key={dress.id} className="dress-card">
            <img src={dress.image} alt={dress.name} className="dress-image" />
            <h2 className="dress-name">{dress.name}</h2>
            <div className="p-dress-price">
              <p className="dress-price">{dress.price}</p>
              <p>
                <i className="fa-solid fa-heart" onClick={incrementFavoriteCount}></i> 
              </p>        
            </div>
            <div className="btn-alignment">
              <button className="buy-button" onClick={incrementCartCount}>Add to Cart</button>
              <button className="buy-button" onClick={() => handleBuyNow(dress)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

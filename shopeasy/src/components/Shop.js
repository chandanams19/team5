// src/components/Shop.js
import React, { useEffect, useState } from 'react';
import '../assets/Shop.css';

const Shop = () => {
  const [dresses, setDresses] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    fetch('./json/shop.json')
      .then(response => response.json())
      .then(data => setDresses(data))
      .catch(error => console.error("Error loading shop data:", error));
  }, []);

  const handleFavoriteClick = (id) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites, [id]: !prevFavorites[id] };

      // Update the favorite count based on the new state
      const newCount = Object.values(updatedFavorites).filter(Boolean).length;
      setFavoriteCount(newCount);

      return updatedFavorites;
    });
  };

  return (
    <div className="shop-container">
      <h1>Shop Our Collection</h1>
      <div className="favorites-count">Favorites: {favoriteCount}</div>
      <div className="dresses-grid">
        {dresses.map(dress => (
          <div key={dress.id} className="dress-card">
            <img src={dress.image} alt={dress.name} className="dress-image" />
            <h2 className="dress-name">{dress.name}</h2>
            <div className="p-dress-price">
              <p className="dress-price">{dress.price}</p>
              <p>
                <i
                  className={`fa-solid fa-heart ${favorites[dress.id] ? 'active' : ''}`}
                  onClick={() => handleFavoriteClick(dress.id)}
                ></i>
              </p>        
            </div>
            
            <div className="btn-alignment">
              <button className="buy-button">Add to Cart</button>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

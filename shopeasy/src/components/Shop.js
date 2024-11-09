// Shop.js
import React from 'react';
import '../assets/Shop.css';

const Shop = () => {
  return (
    <div className="shop-container">
      <h2>Shop Our Collection</h2>
      <p>Browse our latest products and find what suits you best!</p>
      
      <div className="products-grid">
        {/* Example product cards */}
        <div className="product-card">
          <img src="/images/jacket.jpeg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>$29.99</p>
          <button className="buy-button">Buy Now</button>
        </div>
        
        <div className="product-card">
          <img src="/images/shirt.jpeg" alt="Product 2" />
          <h3>Product 2</h3>
          <p>$39.99</p>
          <button className="buy-button">Buy Now</button>
        </div>

        {/* Add more product cards here */}
      </div>
    </div>
  );
};

export default Shop;

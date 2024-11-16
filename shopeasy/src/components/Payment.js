// src/components/Payment.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { dress } = location.state || {}; // Destructure dress data from location.state

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Payment Portal</h1>
      {dress ? (
        <div style={{ marginTop: '20px' }}>
          <img src={dress.image} alt={dress.name} style={{ width: '200px', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
          <h2>{dress.name}</h2>
          <p>Price: {dress.price}</p>
          {/* Add more product details if needed */}
        </div>
      ) : (
        <p>No product selected. Please go back and select a product.</p>
      )}
      {/* Payment form or integration can go here */}
    </div>
  );
};

export default Payment;

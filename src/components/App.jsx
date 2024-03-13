// App.js
import React from 'react';
import Navbar from './Navbar';
import './App.css';
import ProductCard from './Productcard';

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      {/* Assuming you have data for each product */}
      <div className="row">
        <ProductCard
          imageSrc="./images/samsung2.jpeg"  
          productName="Acer Nitro 5 Gaming Laptop"
          rating={4.5}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/mobile.jpeg"
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/iphone.jpeg "
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
      </div>
      <div className="row">
        <ProductCard
          imageSrc="./images/redmi1.jpeg"
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/redmi2.jpeg"
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/redmi3.jpeg"
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
      </div>
      <div className="row">
        <ProductCard
          imageSrc="./images/redmi4.jpeg"
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/samsung1.jpeg"
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/poco1.jpeg"
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
      </div>
      <div className="row">
        <ProductCard
          imageSrc="./images/poco2.jpeg"
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/realme2.jpeg"
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/asus1.jpeg"
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
      </div>
      {/* Add more rows as needed */}
    </div>
  );
};

export default App;

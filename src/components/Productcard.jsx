// ProductCard.js
import React from 'react';
import './App.css'
const ProductCard = ({ imageSrc, productName, rating, numReviews }) => {
  return (
    <div className="outer3">
      <div className="inner3">
        <img src={imageSrc} alt={productName} />
        <br /> <br /> 
        <p>{productName}</p>
        <p>{rating} out of 5 stars {numReviews} reviews</p>
        {/* Assuming 'checked' class is for filled stars */}
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <div>
            <button>Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

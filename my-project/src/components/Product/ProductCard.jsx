import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css';

function ProductCard({ product }) {
  const { image, title, rating, price, description } = product; // Include description

  return (
    
    <div className={classes.card_container}>
      <a href="">
        <img src={image} alt={title} />
      </a>
      <div>
        <h3>{title}</h3>
        {/* Add this line to show the description: */}
        <p className={classes.description}>{description}</p>
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
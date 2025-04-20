import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import classes from './Product.module.css';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { image, title, rating, price, description } = product;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <>
      <div className={classes.card_container}>
        <div className={classes.image_container} onClick={toggleModal}>
          <img src={image} alt={title} />
          <div className={classes.zoom_indicator}>
            <FaSearchPlus />
          </div>
        </div>

        <div className={classes.card_content}>
          <h3>{title}</h3>
          <div className={classes.rating}>
            <Rating 
              value={rating.rate} 
              precision={0.1} 
              readOnly 
              size="small"
            />
            <small>({rating.count})</small>
          </div>
          <div className={classes.price}>{formatPrice(price)}</div>
          <button className={classes.button}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <div className={`${classes.fullscreen_modal} ${isModalOpen ? classes.active : ''}`}>
        <button className={classes.close_button} onClick={toggleModal}>
          <FaTimes />
        </button>
        <img 
          src={image} 
          alt={title} 
          className={classes.fullscreen_image}
          onClick={toggleModal}
        />
        <div className={classes.modal_details}>
          <h3>{title}</h3>
          <div className={classes.rating}>
            <Rating 
              value={rating.rate} 
              precision={0.1} 
              readOnly 
              size="large" 
            />
            <span>({rating.count} reviews)</span>
          </div>
          <div className={classes.price}>{formatPrice(price)}</div>
          <p>{description}</p>
          <button className={classes.button}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

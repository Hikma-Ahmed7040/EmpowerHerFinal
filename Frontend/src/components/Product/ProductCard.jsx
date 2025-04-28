import React, { useContext, useState } from 'react';
import Rating from '@mui/material/Rating';
import classes from './Product.module.css';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../pages/Utility/action.type'; // <-- FIXED this import

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { image, title, rating, price, description } = product;
  const { state, dispatch } = useContext(DataContext);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const formatPrice = (amount) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, rating, price, description },
    });
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
            <Rating value={rating.rate} precision={0.1} readOnly size="small" />
            <small>({rating.count})</small>
          </div>
          <div className={classes.price}>{formatPrice(price)}</div>
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={`${classes.fullscreen_modal} ${classes.active}`}>
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
              <Rating value={rating.rate} precision={0.1} size="large" readOnly />
              <span>({rating.count} reviews)</span>
            </div>
            <div className={classes.price}>{formatPrice(price)}</div>
            <p>{description}</p>
            <button className={classes.button} onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;

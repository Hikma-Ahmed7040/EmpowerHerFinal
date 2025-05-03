import React, { useContext } from 'react';
import ProductCard from '../../Components/Product/ProductCard';
import { DataContext } from '../../components/DataProvider/DataProvider';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from "./Cart.module.css";
import { Type } from '../Utility/action.type';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import LayOut from '../../components/Layout/Layout';

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (id) => {
    dispatch({
      type: Type.INCREMENT_ITEM,
      id,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.DECREMENT_ITEM,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello {user ? user.name : ""}</h2>
          <h3>Your Shopping Basket</h3>

          {basket?.length === 0 ? (
            <p>Oops! No item in your cart.</p>
          ) : (
            basket.map((item, i) => (
              <section className={classes.cart_product} key={item.id || i}>
                <ProductCard 
                  product={item} 
                  flex={true} 
                  renderAdd={false}
                  desc={true} 
                />
                <div className={classes.btn_container}>
                  <button className={classes.btn} onClick={() => increment(item.id)}>
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  <button className={classes.btn} onClick={() => decrement(item.id)}>
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket.length} {basket.length === 1 ? "item" : "items"})</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" id="gift" />
              <label htmlFor="gift"><small>This order contains a gift</small></label>
            </span>
            <Link to="/payments" className={classes.checkout_btn}>Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
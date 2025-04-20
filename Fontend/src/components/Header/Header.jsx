// src/components/Header.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';

import {
  GiClothes,
  GiNecklace,
  GiWoodenChair,
  GiSoap
} from 'react-icons/gi';

import { CartContext } from '../CartContext'; // correct import
import classes from './Header.module.css';

const navItems = [
  { icon: GiClothes, text: "Traditional Clothes" },
  { icon: GiNecklace, text: "Handmade Accessories" },
  { icon: GiWoodenChair, text: "Home Decor" },
  { icon: GiSoap, text: "Skincare Products" }
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext); // fix here

  return (
    <section className={classes.fixed}>
      <div className={classes.header__container}>
        {/* Logo */}
        <div className={classes.logo__container}>
          <Link to="/">
            <h1>EmpowerHer</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={classes["nav__items--desktop"]}>
          {navItems.map((item, index) => (
            <li key={index} className={classes.nav__link}>
              <item.icon className={classes.nav__icon} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        {/* Right Side Elements */}
        <div className={classes.header__right}>
          {/* Auth & Cart */}
          <div className={classes.order__container}>
            <Link to="/auth">
              <div>
                <p>Hello, Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{cartItems.length}</span> {/* Show item count */}
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button 
            className={`${classes.hamburger} ${isMenuOpen ? classes.active : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={classes.hamburger__line}></span>
            <span className={classes.hamburger__line}></span>
            <span className={classes.hamburger__line}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <ul className={`${classes["nav__items--mobile"]} ${isMenuOpen ? classes.active : ''}`}>
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className={classes.nav__link}
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon className={classes.nav__icon} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Header;

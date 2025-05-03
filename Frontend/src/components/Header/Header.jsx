// src/components/Header.jsx
import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { DataContext } from '../DataProvider/DataProvider';
import {
  GiClothes,
  GiNecklace,
  GiWoodenChair,
  GiSoap
} from 'react-icons/gi';

import { CartContext } from '../CartContext';
import { auth } from '../../pages/Utility/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import classes from './Header.module.css';

const navItems = [
  { icon: GiClothes, text: "Traditional Clothes", slug: 'traditional-clothes' },
  { icon: GiNecklace, text: "Handmade Accessories", slug: 'handmade-accessories' },
  { icon: GiWoodenChair, text: "Home Decor", slug: 'home-decor' },
  { icon: GiSoap, text: "Skincare Products", slug: 'skincare' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [{ basket }] = useContext(DataContext);

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Track login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/auth");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <section className={classes.fixed}>
      <div className={classes.header__container}>
        {/* Logo */}
        <div className={classes.logo__container}>
          <Link to="/"><h1>EmpowerHer</h1></Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={classes["nav__items--desktop"]}>
          {navItems.map((item, index) => (
            <Link
              to={`/category/${item.slug}`}
              key={index}
              className={classes.nav__link}
            >
              <item.icon className={classes.nav__icon} />
              <span>{item.text}</span>
            </Link>
          ))}
        </ul>

        {/* Right Side */}
        <div className={classes.header__right}>
          <div className={classes.order__container}>
            {!user ? (
              <Link to="/auth">
                <div>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </div>
              </Link>
            ) : (
              <div>
                <p>Hello, {user.displayName?.split(' ')[0] || 'User'}</p>
                <span
                  onClick={handleSignOut}
                  style={{ cursor: 'pointer', color: '#e63946', fontWeight: 'bold' }}
                >
                  Sign Out
                </span>
              </div>
            )}

            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{basket.length}</span>
            </Link>
          </div>

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
            <Link
              to={`/category/${item.slug}`}
              key={index}
              className={classes.nav__link}
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon className={classes.nav__icon} />
              <span>{item.text}</span>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Header;

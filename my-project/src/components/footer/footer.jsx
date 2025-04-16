import React from 'react';
import classes from './footer.module.css';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={classes.footer_outer_container}>
      <div className={classes.footer_inner_container}>
        {/* First Section */}
        <div className={classes.first_section}>
          <div className={classes.logo__container}>
            <Link to="/">
              <h1>EmpowerHer</h1>
            </Link>
            <p className={classes.tagline}>Empowering women through handmade art & creativity.</p>
          </div>
          <ul className={classes.footer_icons}>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <AiOutlineYoutube />
              </a>
            </li>
          </ul>
        </div>

        {/* Second Section */}
        <div className={classes.second_section}>
          <h3>Explore</h3>
          <ul className={classes.lists}>
            <li><Link to="/how-it-works">How EmpowerHer Works</Link></li>
            <li><Link to="/stories">Success Stories</Link></li>
            <li><Link to="/volunteer">Volunteer With Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Third Section */}
        <div className={classes.third_section}>
          <h3>Contact</h3>
          <ul className={classes.lists}>
            <li>EmpowerHer HQ</li>
            <li><a href="mailto:support@empowerher.com">support@empowerher.com</a></li>
            <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className={classes.copyright}>
        <p>&copy; {new Date().getFullYear()} EmpowerHer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

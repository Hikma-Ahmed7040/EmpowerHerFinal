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
          </div>
          <ul className={classes.footer_icons}>
            <li>
              <a href="https://www.facebook.com/evangaditech" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/evangaditech/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@EvangadiTech" target="_blank" rel="noreferrer">
                <AiOutlineYoutube />
              </a>
            </li>
          </ul>
        </div>

        {/* Second Section */}
        <div className={classes.second_section}>
          <h3>Useful Links</h3>
          <ul className={classes.lists}>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Third Section */}
        <div className={classes.third_section}>
          <h3>Contact Info</h3>
          <ul className={classes.lists}>
            <li>Evangadi Networks</li>
            <li><a href="mailto:support@evangadi.com">support@evangadi.com</a></li>
            <li><a href="tel:+12023862702">+1-202-386-2702</a></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className={classes.copyright}>
        <p>&copy; {new Date().getFullYear()} EmpowerHer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
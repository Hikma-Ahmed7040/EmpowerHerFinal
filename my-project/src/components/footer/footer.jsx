import React from 'react';
import classes from './footer.module.css';
import { LuFacebook } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
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
                <LuFacebook />
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
            <li>How it works</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Third Section */}
        <div className={classes.third_section}>
          <h3>Contact Info</h3>
          <ul className={classes.lists}>
            <li>Evangadi Networks</li>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ Make sure this is imported
import './hero.css'; // Import the CSS file
// import {AuthSeller} from '../../pages/AuthSeller/AuthSeller'

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const bgImages = [
    'https://static.vecteezy.com/system/resources/previews/028/901/655/non_2x/of-emotional-dynamic-pose-african-woman-in-autumn-ai-generative-free-photo.jpg',
    'https://static.vecteezy.com/system/resources/previews/028/901/730/non_2x/of-emotional-dynamic-pose-african-woman-in-autumn-ai-generative-free-photo.jpg',
    'https://img.freepik.com/premium-photo/portrait-beautiful-african-woman-traditional-clothes-headscarf_977935-7841.jpg',
    'https://media.istockphoto.com/id/1277113035/photo/young-black-beauty-with-afro-hairstyle.jpg?s=170667a&w=0&k=20&c=OaHeq4LSgAMM1DfFN12CYWVDNfjMb8EgeScIescmajg='
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  const goToSlide = (index) => {
    setCurrentBgIndex(index);
  };

  return (
    <section className="hero-section">
      {/* Background images */}
      {bgImages.map((imageUrl, index) => (
        <motion.div
          key={index}
          className="hero-bg-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentBgIndex ? 1 : 0,
            scale: index === currentBgIndex ? 1 : 1.05
          }}
          transition={{ duration: 1.5, ease: [0.6, 0.05, 0.5, 0.99] }}
        />
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hero-text-container"
        >
          <h1 className="hero-title">
            <motion.span whileHover={{ scale: 1.05 }}>
              Empower Women,
            </motion.span>
            <motion.span whileHover={{ scale: 1.05 }}>
              Support Handmade
            </motion.span>
          </h1>
          <motion.p
            className="hero-subtitle"
            whileHover={{ color: '#fcd34d' }}
          >
            Discover authentic African traditional clothes, handmade accessories, and artisanal crafts.
          </motion.p>
        </motion.div>

        {/* Button to Seller Registration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link to="/seller" className="hero-link">
            <motion.button
              className="hero-button"
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hero-button-text">Become a Seller</span>
              <span className="hero-button-hover"></span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="hero-indicators">
        {bgImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero-indicator ${index === currentBgIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

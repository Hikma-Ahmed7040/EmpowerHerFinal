import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./banner.module.css";

function BannerCard({ data, index }) {
  if (!data) {
    console.error("BannerCard received undefined data!");
    return null;
  }

  return (
    <motion.div
      className={classes.banner}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index || 0) * 0.15, duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
    >
      <Link to={`/banner/${data.name}`} className={classes.bannerLink}>
        {/* Main Image */}
        <motion.img 
          src={data?.imgLink} 
          alt={data?.title || "banner"} 
          className={classes.mainImage}
          whileHover={{ scale: 1.05 }}
        />

        {/* Overlay that appears on hover */}
        <motion.div 
          className={classes.hoverOverlay}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={classes.hoverContent}
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <h2 className={classes.hoverTitle}>{data?.title}</h2>
            <p className={classes.hoverDescription}>
              Discover our premium collection of {data?.title.toLowerCase()}
            </p>
            
            <div className={classes.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`${classes.star} ${i < Math.floor(data.rating || 0) ? classes.filledStar : ''}`}
                >
                  {i < Math.floor(data.rating || 0) ? '★' : '☆'}
                </span>
              ))}
              <span className={classes.ratingText}>
                ({data.rating?.toFixed(1) || "5.0"})
              </span>
            </div>

            <motion.button
              className={classes.shopButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Always visible minimal info */}
        <div className={classes.minimalInfo}>
          <h3>{data?.title}</h3>
          <div className={classes.ratingBadge}>
            ★ {data.rating?.toFixed(1) || "5.0"}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default BannerCard;
// src/components/banners/Banner.jsx
import React from "react";
import { Link } from "react-router-dom";
import { bannerData } from "./bannerData";
import classes from "./banner.module.css";
import BannerCard from "./BannerCard";

export default function Banner() {
  return (
    <div className={classes.bannerContainer}>
      {bannerData.map((info) => (
        <Link
          key={info.name}
          to={`/banner/${info.name}`}
          className={classes.bannerItem}
        >
          <BannerCard data={info} />
        </Link>
      ))}
    </div>
  );
}

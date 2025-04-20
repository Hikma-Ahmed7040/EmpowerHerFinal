import React from "react";
import { bannerData } from "./bannerData";
import classes from "./banner.module.css";
import BannerCard from "./BannerCard";

function Banner() {
  return (
    <div className={classes.bannerContainer}>
      {bannerData.map((info) => (
        <div key={info.name} className={classes.bannerItem}>
          <BannerCard data={info} />
        </div>
      ))}
    </div>
  );
}

export default Banner;
// src/pages/Results/Result.jsx
import React from "react";
import { useParams } from "react-router-dom";
import allProducts from "../../components/Product/productData";
import ProductCard from "../../components/Product/ProductCard";
import classes from "../../components/Product/Product.module.css";

// Helper to turn a string into a slug
const makeSlug = (str) =>
  str.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

export default function Result() {
  const { bannerName } = useParams();

  // Filter products whose category matches the bannerName (as slug)
  const productsToShow = allProducts.filter(
    (p) => makeSlug(p.category) === bannerName
  );

  if (productsToShow.length === 0) {
    return (
      <section className={classes.product_container}>
        <p>No products found for “{bannerName}”.</p>
      </section>
    );
  }

  return (
    <section className={classes.product_container}>
      {productsToShow.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </section>
  );
}

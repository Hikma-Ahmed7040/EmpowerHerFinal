// src/components/Product/Product.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import allProducts from './productData';

const PRODUCTS_PER_PAGE = 16;

// Helper to turn any category/title into a URL‑safe slug
const makeSlug = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // spaces → dashes
    .replace(/[^\w-]/g, '');  // strip punctuation

export default function Product() {
  const { slug } = useParams();

  // Filtered or full product list
  const filteredProducts = slug
    ? allProducts.filter(p => makeSlug(p.category) === slug)
    : allProducts;

  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE);
  };

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  // No matches?
  if (slug && filteredProducts.length === 0) {
    return (
      <section className={classes.product_container}>
        <p>No products found for “{slug}”.</p>
      </section>
    );
  }

  return (
    <section className={classes.product_container}>
      {visibleProducts.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}

      {hasMore && (
        <div className={classes.loadMoreWrapper}>
          <button onClick={handleLoadMore} className={classes.loadMoreButton}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

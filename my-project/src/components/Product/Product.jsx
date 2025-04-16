// Product/Product.jsx
import React from 'react';
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import allProducts from './productData'; // Import all 100 products

function Product() {
  return (
    <section className={classes.product_container}>
      {allProducts.map((product) => (
        <ProductCard 
          product={product} 
          key={product.id} 
        />
      ))}
    </section>
  );
}

export default Product;
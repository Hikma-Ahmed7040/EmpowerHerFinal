import React from 'react';
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import allProducts from './productData';

function Product() {
  return (
    <section className={classes.product_container}>
      {allProducts.map((product, index) => (
        <ProductCard 
          product={product} 
          key={product.id}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </section>
  );
}

export default Product;
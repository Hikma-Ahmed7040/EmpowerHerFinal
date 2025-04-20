import React from 'react';
import LayOut from '../../components/Layout/LayOut';
import Hero from '../../components/hero/Hero';
import Banner from '../../components/banners/banners';
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer';
function Landing() {
  return (
    <LayOut>
      <Hero />
      <Banner />  
      <Product />
      <Footer />
    </LayOut>
  );
}

export default Landing;

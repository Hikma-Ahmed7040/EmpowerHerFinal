// src/Results/Result.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LayOut from '../../components/Layout/LayOut';

import {
  traditionalClothes,
  skincareProducts,
  homeDecorProducts,
  handmadeAccessories,
} from '../../components/Product/productData';

function Result() {
  const [results, setResults] = useState([]);
  const { BannerName } = useParams();
  console.log("URL BannerName:")

  useEffect(() => {
    let data = [];

    switch (BannerName.toLowerCase()) {
      case 'clothes':
        data = traditionalClothes;
        break;
      case 'skincare':
        data = skincareProducts;
        break;
      case 'homedecor':
        data = homeDecorProducts;
        break;
      case 'handmade-accessories':
        data = handmadeAccessories;
        break;
      default:
        data = [];
    }

    setResults(data);
  }, [BannerName]);

  return (
    <>
      <LayOut />
      <div style={{ padding: '20px' }}>
        <h2>{BannerName.replace('-', ' ')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {results.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
              <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <p><strong>${product.price}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Result;

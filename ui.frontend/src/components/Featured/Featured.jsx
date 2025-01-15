import React from 'react';
import { MapTo } from '@adobe/aem-spa-component-mapping';
import './Featured.css';

const Featured = () => {
  const products = [
    {
      title: 'Adaptador 13 Para 7 Pinos Para Reboque',
      image: '/content/dam/core-components-examples/library/sample-assets/mountain-range.jpg',
      rating: 5,
      originalPrice: 'R$88,39',
      salePrice: 'R$64,68'
    },
    {
      title: 'Adaptador 13 Para 7 Pinos Para Reboque',
      image: '/content/dam/core-components-examples/library/sample-assets/mountain-range.jpg',
      rating: 5,
      originalPrice: 'R$88,39',
      salePrice: 'R$336,60'
    },
    {
      title: 'Chaveiro Tematizado Peças De Carro Automotivo Em Metal',
      image: '/content/dam/core-components-examples/library/sample-assets/mountain-range.jpg',
      rating: 5,
      originalPrice: 'R$27,90',
      salePrice: 'R$24,83'
    },
    {
      title: 'Adaptador 13 Para 7 Pinos Para Reboque',      
      image: '/content/dam/core-components-examples/library/sample-assets/mountain-range.jpg',
      rating: 5,
      originalPrice: 'R$88,39',
      salePrice: 'R$336,60'
    }
  ];

  const Rating = () => (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="star">★</span>
      ))}
    </div>
  );

  return (
    <section className="featured">
      <h2 className="featured-title">Em <span>destaque</span></h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.title} />
            </div>
            <Rating />
            <h3>{product.title}</h3>
            <div className="price">
              <span className="original-price">{product.originalPrice}</span>
              <span className="sale-price">{product.salePrice}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MapTo('training-spa/components/featured')(Featured);

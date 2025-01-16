import React, { useEffect, useState } from 'react';
import { MapTo } from '@adobe/aem-spa-component-mapping';
import './Featured.css';

const Featured = ({ title = "Em destaque" }) => {
  const splitTitle = title ? title[0].split(' ') : [];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = () => {
    fetch('/bin/featured/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(fetchProducts, 10000);

    return () => clearInterval(interval);
  }, []);

  const Rating = () => (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="star">★</span>
      ))}
    </div>
  );

  return (
    <section className="featured">
      <h2 className="featured-title">
        {splitTitle[0]} <span>{splitTitle[1]}</span>
      </h2>

      <div className="products-grid">
        {loading ? (
          <p>Carregando produtos...</p>
        ) : (
          products.map((product, index) => (
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
          ))
        )}
      </div>
    </section>
  );
};

export default MapTo('training-spa/components/featured')(Featured);

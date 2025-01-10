import React from 'react';
import { MapTo } from '@adobe/aem-spa-component-mapping';
import './Newsletter.css';

const NewsletterEditConfig = {
  emptyLabel: 'Newsletter',
  isEmpty: function(props) {
    return !props || !props.title;
  }
};

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-form">
        <h2>RECEBA OFERTAS E NOVIDADES</h2>
        <input 
          type="text" 
          placeholder="Insira seu nome completo"
          aria-label="Nome completo"
        />
        <input 
          type="email" 
          placeholder="Insira seu e-mail"
          aria-label="E-mail" 
        />
        <button type="submit" className="submit-btn">ENVIAR</button>
      </div>
    </div>
  );
};

export default MapTo('training-spa/components/newsletter')(
  Newsletter,
  NewsletterEditConfig
);
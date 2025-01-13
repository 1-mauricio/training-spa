import React from 'react';
import { MapTo } from '@adobe/aem-spa-component-mapping';
import './Benefits.css';

const defaultBenefits = [
  { icon: '/content/dam/icons/globe.svg', text: 'Garantia no mundo inteiro' },
  { icon: '/content/dam/icons/trophy.svg', text: 'Qualidade Superior' },
  { icon: '/content/dam/icons/shipping.svg', text: 'Entrega Global' },
  { icon: '/content/dam/icons/tools.svg', text: 'Programas de Manutenção' },
];

const Benefits = (props) => {
  const items = props.items && props.items.length > 0 ? props.items : defaultBenefits;

  return (
    <div className="benefits">
      {items.map((benefit, index) => (
        <div key={index} className="benefit-item">
          <img src={benefit.icon} alt={benefit.text} />
          <span>{benefit.text}</span>
        </div>
      ))}
    </div>
  );
};

const BenefitsEditConfig = {
  emptyLabel: 'Benefícios',
  isEmpty: function (props) {
    return !props || (!props.items || props.items.length === 0);
  },
};

export default MapTo('training-spa/components/benefits')(Benefits, BenefitsEditConfig);

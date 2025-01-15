import React from 'react';
import { MapTo } from '@adobe/aem-spa-component-mapping';
import { FaGlobeAmericas, FaTrophy, FaTruck, FaTools } from 'react-icons/fa';
import './Benefits.css';

const defaultBenefits = [
  { icon: FaGlobeAmericas, text: 'Garantia no mundo inteiro' },
  { icon: FaTrophy, text: 'Qualidade Superior' },
  { icon: FaTruck, text: 'Entrega Global' },
  { icon: FaTools, text: 'Programas de Manutenção' },
];

const Benefits = (props) => {
  const items = props.items && props.items.length > 0 ? props.items : defaultBenefits;

  return (
    <div className="benefits">
      {items.map((benefit, index) => (
        <div key={index} className="benefit-item">
          {typeof benefit.icon === 'function' ? (
            <benefit.icon className="benefit-icon" />
          ) : (
            <img src={benefit.icon} alt={benefit.text} className="benefit-icon" />
          )}
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

import React from 'react';
import { MapTo } from '@adobe/aem-spa-component-mapping';
import './MainNav.css';

const MainNav = () => {
  const navItems = [
    {
      title: 'SERVIÇOS',
      image: '/content/dam/core-components-examples/library/sample-assets/mountain-range.jpg',
      link: '/servicos'
    },
    {
      title: 'PEÇAS',
      image: '/content/dam/core-components-examples/library/sample-assets/mountain-range.jpg',
      link: '/pecas'
    },
    {
      title: 'MANUTENÇÃO',
      image: '/content/dam/core-components-examples/library/sample-assets/mountain-range.jpg',
      link: '/manutencao'
    }
  ];

  return (
    <div className="main-nav">
      {navItems.map((item, index) => (
        <a 
          key={index} 
          href={item.link} 
          className="nav-card"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <h2>{item.title}</h2>
        </a>
      ))}
    </div>
  );
};

export default MapTo('training-spa/components/main-nav')(MainNav);
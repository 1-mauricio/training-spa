import React from 'react';
import { MapTo } from '@adobe/aem-spa-component-mapping';
import './MainNav.css';

const MainNav = () => {
  const navItems = [
    {
      title: 'SERVIÇOS',
      image: '/content/dam/services/engine.jpg',
      link: '/servicos'
    },
    {
      title: 'PEÇAS',
      image: '/content/dam/services/parts.jpg',
      link: '/pecas'
    },
    {
      title: 'MANUTENÇÃO',
      image: '/content/dam/services/maintenance.jpg',
      link: '/manutencao'
    }
  ];

  return (
    <nav className="main-nav">
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
    </nav>
  );
};

export default MapTo('training-spa/components/main-nav')(MainNav);
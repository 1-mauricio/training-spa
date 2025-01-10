import React, { Component } from 'react';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import { MapTo } from '@adobe/aem-spa-component-mapping';

require('./Header.css')

const HeaderEditConfig = {
    emptyLabel: 'Header Component',

    isEmpty: function(props) {
        return !props;
    }
}

class Header extends Component {
    render() {
        return (
            <header className="header">
              <div className="header-container">
                <div className="logo">
                  <img src="/truck-logo.png" alt="Truck Transport Logo" />
                </div>
                
                <nav className="nav-menu">
                  <ul>
                    <li><a href="/pecas">Peças</a></li>
                    <li><a href="/servicos">Serviços</a></li>
                    <li><a href="/manutencao">Manutenção</a></li>
                  </ul>
                </nav>
        
                <div className="header-actions">
                  <div className="search">
                    <FaSearch className="search-icon" />
                    <span>Busca</span>
                  </div>
                  <div className="auth">
                    <FaUser className="user-icon" />
                    <span>Entre ou Cadastre-se</span>
                  </div>
                  <div className="cart">
                    <FaShoppingBag className="cart-icon" />
                  </div>
                </div>
              </div>
            </header>
          );
    }
}

export default MapTo('training-spa/components/header')(Header, HeaderEditConfig);
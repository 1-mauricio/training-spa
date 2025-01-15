import React, { Component } from 'react';
import { MapTo } from '@adobe/aem-spa-component-mapping';

require('./Footer.css')

const FooterEditConfig = {
    emptyLabel: 'Footer Component',

    isEmpty: function(props) {
        return !props || !props.footerText || !props.address;
    }
}

class Footer extends Component {
    render() {
        return (
            <footer>
    
              <div className="footer-content">
                <div className="footer-section">
                  <h3>CATEGORIAS</h3>
                  <ul>
                    <li><a href="/pecas">Peças</a></li>
                    <li><a href="/servicos">Serviços</a></li>
                    <li><a href="/manutencao">Manutenção</a></li>
                    <li><a href="/sistemas-trocas">Sistemas de Trocas</a></li>
                  </ul>
                </div>
        
                <div className="footer-section">
                  <h3>INSTITUCIONAL</h3>
                  <ul>
                    <li><a href="/quem-somos">Quem Somos</a></li>
                    <li><a href="/nossa-historia">Nossa História</a></li>
                    <li><a href="/trabalhe-conosco">Trabalhe Conosco</a></li>
                  </ul>
                </div>
        
                <div className="footer-section">
                  <h3>AJUDA</h3>
                  <ul>
                    <li><a href="/privacidade">Política de Privacidade</a></li>
                    <li><a href="/troca">Política de Troca</a></li>
                    <li><a href="/termos">Termos e Condições</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/fale-conosco">Fale Conosco</a></li>
                  </ul>
                </div>
        
                <div className="footer-section">
                  <h3>SUPORTE</h3>
                  <div className="support-info">
                    <p>0800 023 2309</p>
                    <p>ajuda@truck.com.br</p>
                  </div>
                </div>
              </div>
        
              <div className="footer-bottom">
                <p>Truck Transport Todos os direitos reservados.</p>
              </div>
            </footer>
          );
    }
}

export default MapTo('training-spa/components/footer')(Footer, FooterEditConfig);
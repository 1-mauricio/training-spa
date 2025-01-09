import React, { Component } from 'react';
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
            <div className="header">
                <a href="#default" className="logo">WebJump Training</a>
                    <div className="header-right">
                        <a className="active" href="#home">Home</a>
                        <a href="#contact">Contato</a>
                        <a href="#about">Experiência Personalizada</a>
                    </div>
            </div>
        )
    }
}

export default MapTo('training-spa/components/header')(Header, HeaderEditConfig);
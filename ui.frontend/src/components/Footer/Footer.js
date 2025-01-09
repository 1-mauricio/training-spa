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
            <div class="footer">
                <h1>{this.props.footerText}</h1>
                <h2>{this.props.address}</h2>
            </div>
        )
    }
}

export default MapTo('training-spa/components/footer')(Footer, FooterEditConfig);
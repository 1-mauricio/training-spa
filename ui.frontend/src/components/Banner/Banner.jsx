import React, { Component } from 'react';
import { MapTo } from '@adobe/aem-spa-component-mapping';
import './Banner.css';

const BannerEditConfig = {
  emptyLabel: 'Banner',
  isEmpty: function (props) {
    return !props || !props.backgroundImage;
  }
};

class Banner extends Component {
  render() {
    const { backgroundImage, firstTitle, secondTitle, buttonText } = this.props;

    return (
      <div
        className="banner"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className="banner-content">
          <h1 className="first-title">{firstTitle}</h1>
          <h1 className="second-title">{secondTitle}</h1>
          <button className="cta-button">{buttonText}</button>
        </div>
      </div>
    );
  }
}

Banner.defaultProps = {
  backgroundImage: '',
  firstTitle: 'GARANTIA NO',
  secondTitle: 'MUNDO INTEIRO',
  buttonText: 'SAIBA MAIS'
};

export default MapTo('training-spa/components/banner')(Banner, BannerEditConfig);

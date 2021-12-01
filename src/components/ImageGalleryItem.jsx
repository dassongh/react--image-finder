import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  pictureClickHandler = () => {
    const { handler, largeSrc, alt } = this.props;
    handler(largeSrc, alt);
  };

  render() {
    const { src, alt } = this.props;

    return (
      <li className="ImageGalleryItem" onClick={this.pictureClickHandler}>
        <img src={src} alt={alt} className="ImageGalleryItem-image" />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  alt: PropTypes.string,
  handler: PropTypes.func,
  largeSrc: PropTypes.string,
  src: PropTypes.string,
};

export default ImageGalleryItem;

import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ images, handler }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return <ImageGalleryItem key={id} src={webformatURL} largeSrc={largeImageURL} alt={tags} handler={handler} />;
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  handler: PropTypes.func,
};

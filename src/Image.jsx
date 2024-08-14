import PropTypes from "prop-types";

function Image({ src, alt }) {
  return <img src={src} alt={alt} width={400} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;

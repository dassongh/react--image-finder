import PropTypes from 'prop-types';
export default function Button({ text, onClick }) {
  return (
    <button type="button" className="Button" onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

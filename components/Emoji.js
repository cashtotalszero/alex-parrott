import PropTypes from 'prop-types';

const Emoji = ({ unicode, label }) => (
  <span role="img" aria-label={label}>
    {unicode}
  </span>
);

Emoji.propTypes = {
  unicode: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Emoji;

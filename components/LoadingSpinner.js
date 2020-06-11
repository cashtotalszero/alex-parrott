import { withTheme } from 'styled-components';
import RingLoader from 'react-spinners/RingLoader';
import PropTypes from 'prop-types';

const Spinner = ({ size, isLoading, theme }) => (
  <RingLoader size={size} color={theme.colors.palette2} loading={isLoading} />
);

Spinner.defaultProps = {
  size: 60,
};

Spinner.propTypes = {
  size: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      palette2: PropTypes.string,
    }),
  }).isRequired,
};

export default withTheme(Spinner);

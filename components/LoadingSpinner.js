import { withTheme } from 'styled-components';
import PacmanLoader from 'react-spinners/PacmanLoader';
import PropTypes from 'prop-types';

const Spinner = ({ size, isLoading, theme }) => (
  <PacmanLoader size={size} color={theme.colors.palette1} loading={isLoading} />
);

Spinner.defaultProps = {
  size: 25,
};

Spinner.propTypes = {
  size: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      palette1: PropTypes.string,
    }),
  }).isRequired,
};

export default withTheme(Spinner);

import { withTheme } from 'styled-components';
import PacmanLoader from 'react-spinners/PacmanLoader';

const Spinner = ({ size, isLoading, theme }) => (
  <PacmanLoader size={size} color={theme.colors.palette1} loading={isLoading} />
);

Spinner.defaultProps = {
  size: 25,
};

export default withTheme(Spinner);

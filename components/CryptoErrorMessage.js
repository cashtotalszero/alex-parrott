import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledError = styled.div`
  color: ${({ theme, textColour }) => (textColour ? `${textColour}` : `${theme.colors.black}`)};
  margin: 30px;
  text-align: center;
`;

const ErrorMessage = ({ headline, advice, textColour }) => (
  <StyledError textColour={textColour}>
    <h2>{headline}</h2>
    {advice && <p>{advice}</p>}
  </StyledError>
);

ErrorMessage.defaultProps = {
  advice: '',
  textColour: '',
};

ErrorMessage.propTypes = {
  headline: PropTypes.string.isRequired,
  advice: PropTypes.string,
  textColour: PropTypes.string,
};

export default ErrorMessage;

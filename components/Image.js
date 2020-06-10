import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
`;

const ImageSubtitle = styled.span`
  padding: 5px;
  text-align: center;
  font-size: 1rem;
  line-height: 1.2rem;
`;

const Image = ({ imageSrc, imageAlt, subtitle, width, maxWidth }) => (
  <ImageContainer>
    <StyledImage src={imageSrc} alt={imageAlt} width={width} maxWidth={maxWidth} />
    <ImageSubtitle>{subtitle}</ImageSubtitle>
  </ImageContainer>
);
Image.defaultProps = {
  subtitle: '',
  width: '100%',
  maxWidth: '100%',
};

Image.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default Image;

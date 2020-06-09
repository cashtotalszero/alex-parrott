import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: ${({ width }) => width || 'auto'};
  max-width: ${({ width }) => width || '100%'};
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

export default Image;

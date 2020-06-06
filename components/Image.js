import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  max-width: ${({ width }) => width || '100%'};
`;

const ImageSubtitle = styled.span`
  padding: 5px;
  text-align: center;
  font-size: 1rem;
  line-height: 1.2rem;
`;

const Image = ({ imageSrc, imageAlt, subtitle, width }) => (
  <ImageContainer>
    <StyledImage src={imageSrc} alt={imageAlt} width={width} />
    <ImageSubtitle>{subtitle}</ImageSubtitle>
  </ImageContainer>
);

export default Image;

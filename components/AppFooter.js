import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: ${({ theme }) => `0px -5px ${theme.colors.palette2}`};
  flex-wrap: wrap;
  font-family: 'Lexend Tera';
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  line-height: 2rem;
`;

const Footer = () => (
  <Container>
    {'Find me on  '}
    <ImageContainer>
      <img src="/LI-Logo-black.png" alt="linkedin" style={{ width: '75px' }} />
    </ImageContainer>
    {'All code for this site is on '}
    <ImageContainer>
      <img src="/Github_Logo.png" alt="github" style={{ width: '75px' }} />
    </ImageContainer>
  </Container>
);

export default Footer;

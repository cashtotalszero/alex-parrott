import styled from 'styled-components';
import { LINKEDIN_BIO } from '../constants/urls';

const LinkContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 5px;
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
    <LinkContainer href={LINKEDIN_BIO}>
      <img src="/LI-Logo-black.png" alt="linkedin" style={{ width: '75px' }} />
    </LinkContainer>
  </Container>
);

export default Footer;

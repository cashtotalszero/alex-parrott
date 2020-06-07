import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: ${({ theme }) => `0px -5px ${theme.colors.palette2}`};
  flex-wrap: wrap;
  font-family: 'Lexend Tera';
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  line-height: 2rem;
`;

const Footer = () => <StyledFooter>Alex Parrott © 2020</StyledFooter>;

export default Footer;

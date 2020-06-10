import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => `0px -5px ${theme.colors.palette2}`};
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fonts.header};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  line-height: 2rem;
  height: ${({ theme }) => theme.display.footerHeight};
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => <StyledFooter>Alex Parrott © 2020</StyledFooter>;

export default Footer;

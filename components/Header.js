// import Link from 'next/link';
import styled from 'styled-components';

import NavLink from './NavLink';

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  box-shadow: ${({ theme }) => `0px 5px ${theme.colors.palette2}`};
  flex-wrap: wrap;
  font-family: 'Lexend Tera';
`;

const StyledListItem = styled.li`
  /* background-color: red; */
  height: 4.5rem;
  width: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin: 10px 5px;
  padding: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.palette5};
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  /* flex: 1; */
  /* border-bottom: solid */
  position: relative;

  @media only screen and (max-width: 800px) {
    width: 6rem;
    height: 2rem;
    font-size: 1rem;
    margin: 5px;
  }

  .selected {
    /* background-color: green; */
    text-decoration: underline;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    /* text-decoration: underline; */
    transform: scale(1.1);
    transition: transform 0.25s ease;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-top: 0;
  padding-top: 20px;

  @media only screen and (max-width: 800px) {
    font-size: 1.5rem;
    padding-top: 10px;
    margin-bottom: 10px;
  }
`;

const StyledNav = styled.nav`
  background-color: white;
`;

const Header = () => (
  <StyledNav>
    <Title>{'< ALEX PARROTT.js />'}</Title>
    <StyledList>
      <StyledListItem>
        <NavLink href="/">
          <a>Home</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href="/about">
          <a>About me</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href="/">
          <a>Work History</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href="/tech">
          <a>Tech I use</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href="/">
          <a>Contact</a>
        </NavLink>
      </StyledListItem>
    </StyledList>
  </StyledNav>
);

export default Header;

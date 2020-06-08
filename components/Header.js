import styled from 'styled-components';
import Link from 'next/link';
import NavLink from './NavLink';

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  box-shadow: ${({ theme }) => `0px 5px ${theme.colors.palette2}`};
  flex-wrap: wrap;
  font-family: 'Lexend Tera';
  background-color: ${({ theme }) => `${theme.colors.black}`};
  color: white;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

const StyledListItem = styled.li`
  height: 4.5rem;
  width: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 10px;
  text-align: center;
  position: relative;

  @media only screen and (max-width: 1000px) {
    width: 6rem;
    height: 2rem;
    font-size: 1rem;
    margin: 0;
  }

  .selected {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    transition: all 0.25s ease;
    color: ${({ theme }) => `${theme.colors.palette5}`};
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-top: 0;
  padding-top: 20px;

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 1.5rem;
    padding-top: 10px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 1rem;
    padding-top: 10px;
    margin-bottom: 10px;
  }
`;

const StyledNav = styled.nav`
  background-color: white;
`;

const Header = () => (
  <StyledNav>
    <Title>
      <Link href="/">
        <a>{'< ALEX PARROTT.js />'}</a>
      </Link>
    </Title>
    <StyledList>
      <StyledListItem>
        <NavLink href="/about">
          <a>About</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href="/work">
          <a>Work</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href="/tech">
          <a>Tech</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href="/demos">
          <a>Demos</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href="/opinion">
          <a>Opinion</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href="/contact">
          <a>Contact</a>
        </NavLink>
      </StyledListItem>
    </StyledList>
  </StyledNav>
);

export default Header;

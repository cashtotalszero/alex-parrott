// import Link from 'next/link';
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
  /* background-color: red; */
  height: 4.5rem;
  width: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  /* margin: 10px 0px; */
  padding: 10px;
  text-align: center;
  /* background-color: ${({ theme }) => theme.colors.palette5}; */
  /* border-radius: 5px; */
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
  /* flex: 1; */
  /* border-bottom: solid */
  position: relative;
  /* border-left: solid 1px black;
  border-right: solid 1px black;

  :nth-child(1) {
    border-left: solid 1px black;
  }

  :nth-last-child(1) {
    border-right: solid 1px black;
  } */

  @media only screen and (max-width: 1000px) {
    width: 6rem;
    height: 2rem;
    font-size: 1rem;
    margin: 0;
  }

  .selected {
    /* background-color: green; */
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    /* text-decoration: underline; */
    /* transform: scale(1.1); */
    transition: all 0.25s ease;
    /* text-decoration: underline; */
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

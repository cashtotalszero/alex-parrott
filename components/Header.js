/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import Link from 'next/link';
import NavLink from './NavLink';
import {
  HOME_PAGE,
  ABOUT_PAGE,
  CAREER_PAGE,
  SKILLS_PAGE,
  RANDOM_PAGE,
  TIPS_PAGE,
  CONTACT_PAGE,
  CODE_PAGE,
} from '../constants/urls';

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fonts.header};
  background-color: ${({ theme }) => `${theme.colors.black}`};
  color: white;
  box-shadow: ${({ theme }) => `0 2px 8px ${theme.colors.shadow}`};
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
    color: ${({ theme }) => `${theme.colors.white}`};
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
  background-color: ${({ theme }) => `${theme.colors.white}`};
`;

const Header = () => (
  <StyledNav>
    <Title>
      <Link href={HOME_PAGE}>
        <a>{'< ALEX PARROTT.js />'}</a>
      </Link>
    </Title>
    <StyledList>
      <StyledListItem>
        <NavLink href={ABOUT_PAGE}>
          <a>About</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href={CAREER_PAGE}>
          <a>Career</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href={SKILLS_PAGE}>
          <a>Skills</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href={CODE_PAGE}>
          <a>Code</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href={RANDOM_PAGE}>
          <a>Random</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href={TIPS_PAGE}>
          <a>Tips</a>
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink href={CONTACT_PAGE}>
          <a>Contact</a>
        </NavLink>
      </StyledListItem>
    </StyledList>
  </StyledNav>
);

export default Header;

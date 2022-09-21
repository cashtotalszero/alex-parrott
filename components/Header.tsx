/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import NavLink from './ui/NavLink';
import { HOME_PAGE, ABOUT_PAGE, CAREER_PAGE, SKILLS_PAGE, CONTACT_PAGE } from '../constants/urls';

const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-family: ${({ theme }) => theme.fonts.header};
    background-color: ${({ theme }) => `${theme.colors.black}`};
    color: ${({ theme }) => `${theme.colors.white}`};
    box-shadow: ${({ theme }) => `0 2px 8px ${theme.colors.shadow}`};
    padding: 0;
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

    @media only screen and (${({ theme }) => `${theme.display.lScreen}`}) {
        width: 6rem;
        height: 2rem;
        font-size: 1rem;
        margin: 0;
    }

    .selected {
        color: ${({ theme }) => `${theme.colors.white}`};
        text-decoration: underline;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => `${theme.colors.white}`};
    }

    @media (hover: hover) {
        a:hover {
            transition: all 0.25s ease;
            color: ${({ theme }) => `${theme.colors.palette5}`};
        }
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

    @media only screen and (${({ theme }) => `${theme.display.lScreen}`}) {
        font-size: 1.5rem;
        padding-top: 10px;
        margin-bottom: 10px;
    }

    @media only screen and (${({ theme }) => `${theme.display.xsScreen}`}) {
        font-size: 1rem;
        padding-top: 10px;
        margin-bottom: 10px;
    }
`;

const StyledNav = styled.nav`
    background-color: ${({ theme }) => `${theme.colors.white}`};
`;

export const Header = () => (
    <StyledNav>
        <Title>
            <Link href={HOME_PAGE} passHref>
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
                <NavLink href={CONTACT_PAGE}>
                    <a>Contact</a>
                </NavLink>
            </StyledListItem>
        </StyledList>
    </StyledNav>
);

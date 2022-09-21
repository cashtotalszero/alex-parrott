import React from 'react';
import styled from 'styled-components';

import { Page } from '../components/Page';
import { ABOUT_PAGE, CAREER_PAGE, SKILLS_PAGE, CONTACT_PAGE } from '../constants/urls';
import { AppLink } from '../components/ui/AppLink';

const StyledHighlight = styled.p`
    margin: 40px;
    font-style: italic;
    font-weight: 700;
    background-color: ${({ theme }) => `${theme.colors.highlight}`};
    transform: skewY(-0.5deg);
    padding: 5px;

    @media only screen and (${({ theme }) => `${theme.display.mScreen}`}) {
        margin: 40px 20px;
    }

    @media only screen and (${({ theme }) => `${theme.display.sScreen}`}) {
        margin: 40px 10px;
    }
`;

const HomePage = () => (
    <Page>
        <h1>Hey, I&apos;m Alex Parrott</h1>

        <p>
            I&apos;m a full stack web developer based in Bristol, UK. Or, in English, I make
            websites and apps!
        </p>

        <StyledHighlight>
            If you need help building some software then you are in the right place! Take a look
            around to see if I can help you with your project.
        </StyledHighlight>

        <p>
            Here you can find out about{' '}
            <AppLink href={ABOUT_PAGE} label="who I am" shadowWidth={125} />, check out my
            interactive <AppLink href={CAREER_PAGE} label="interactive CV" shadowWidth={200} /> or
            search my <AppLink href={SKILLS_PAGE} label="skills list" shadowWidth={115} /> to see if
            they match your needs.
        </p>

        <p>
            Feel free to <AppLink href={CONTACT_PAGE} label="contact me" shadowWidth={150} /> to
            check my availability or discuss your project.
        </p>
    </Page>
);

export default HomePage;

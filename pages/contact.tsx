import React from 'react';
import styled from 'styled-components';

import { Page } from '../components/Page';
import { LINKEDIN_BIO } from '../constants/urls';
import { GRINNING_FACE } from '../constants/emojis';
import { TitledImage } from '../components/TitledImage';
import { AppLink } from '../components/ui/AppLink';
import { Emoji } from '../components/Emoji';

const StyledHighlight = styled.div`
    margin: 40px 0;
    font-style: italic;
    font-weight: 700;
    transform: skewY(-0.5deg);
    text-align: center;
    font-size: 2rem;

    @media only screen and (${({ theme }) => `${theme.display.mScreen}`}) {
        font-size: 1.5rem;
    }

    @media only screen and (${({ theme }) => `${theme.display.sScreen}`}) {
        font-size: 1.2rem;
    }
`;

const ContactPage = () => (
    <Page>
        <h1>Contact Me</h1>

        <TitledImage
            imageSrc="/alex.png"
            alt="alex"
            subtitle="My LinkedIn profile photo"
            maxWidth="300px"
        />

        <StyledHighlight>
            <a href="mailto:alex.parrott.dev@gmail.com">alex.parrott.dev@gmail.com</a>
        </StyledHighlight>

        <p>
            I am available to work remotely with you anywhere in the world! If you need me to work
            regularly on site then projects in the South West of the UK will take priority. That
            said, depending on the project I am happy to travel within reason.
        </p>

        <p>
            <strong>Recruiters!</strong> Please contact me on{' '}
            <AppLink href={LINKEDIN_BIO} label="LinkedIn" shadowWidth={115} />. A lot of recruitment
            company emails end up in my spam folder so I am unlikely to reply!
        </p>

        <p>
            Otherwise, <strong>if you have a project and would like me to work with you</strong> or
            want to contact me for any other reason then feel free to email me.{' '}
            <Emoji unicode={GRINNING_FACE} label="grinning face" />
        </p>
    </Page>
);

export default ContactPage;

import React from 'react';

import { Page } from '../components/Page';
import { TitledImage } from '../components/TitledImage';
import { AppLink } from '../components/ui/AppLink';
import { Emoji } from '../components/Emoji';

import {
    VR_DEMO,
    MONKEY_KNIFE_FIGHT,
    CONTRACT_FOR_THE_WEB,
    CAREER_PAGE,
    REACT_NATIVE_SITE,
    REACT_SITE,
} from '../constants/urls';
import { MAN_SHRUGGING, WINKING_FACE, CHECK } from '../constants/emojis';

const AboutPage = () => (
    <Page>
        <h1>About Me</h1>

        <TitledImage
            imageSrc="/alex_dolomites.jpg"
            alt="alex"
            subtitle="Hey, I'm Alex Parrott"
            maxWidth="500px"
        />

        <h2>In short...</h2>

        <p>
            I am a <strong>full stack JavaScript developer</strong> based in Bristol, UK. I have
            been making apps and websites since a chance meeting with some coders working abroad
            inspired me to go back to university to study computer science.
        </p>

        <p>
            I specialise in making <AppLink label="React" href={REACT_SITE} /> and{' '}
            <AppLink label="React Native" href={REACT_NATIVE_SITE} shadowWidth={170} /> apps as I
            have been using the framework since 2015. However, I can work effectively on any
            JavaScript or TypeScript project you have.
        </p>

        <p>
            After <strong>10 years in the industry</strong>, my experience is pretty wide:
        </p>

        <ul>
            <li>
                <Emoji label="Check" unicode={CHECK} /> Leading teams
            </li>
            <li>
                <Emoji label="Check" unicode={CHECK} /> Working in a digital agency environment (4
                years+)
            </li>
            <li>
                <Emoji label="Check" unicode={CHECK} /> Managing long term projects within a product
                company (3 years+)
            </li>
            <li>
                <Emoji label="Check" unicode={CHECK} /> Freelance contracting (2 years+)
            </li>
            <li>
                <Emoji label="Check" unicode={CHECK} /> Building greenfield projects from the ground
                up (multiple projects)
            </li>
            <li>
                <Emoji label="Check" unicode={CHECK} /> Designing technical architecture
            </li>
            <li>
                <Emoji label="Check" unicode={CHECK} /> Building test suites
            </li>
            <li>
                <Emoji label="Check" unicode={CHECK} /> Managing deployments
            </li>
        </ul>

        <p>
            I am a big believer in writing <strong>clean, robust and maintainable code</strong> and
            that good UX goes a long way!
        </p>

        <p>
            My tech interests vary widely and I have worked on a great variety of projects. These
            include - corporate websites, digital asset management software, React Native AR apps,
            Alexa Skills, Node/Express servers,{' '}
            <AppLink label="VR experiences" href={VR_DEMO} shadowWidth={200} />, Unity 3D games and
            more!
        </p>

        <p>
            Right now I am <strong>Lead Developer</strong> at a rising consumer goods management
            company. Check out my{' '}
            <AppLink label="interactive CV" href={CAREER_PAGE} shadowWidth={185} /> for some more
            info.
        </p>

        <TitledImage
            imageSrc="/office.jpg"
            alt="my office"
            subtitle="I spend a lot of my days hanging out with Mr Peanutbutter and Lying
            Cat..."
            maxWidth="500px"
        />

        <h2>Tell me more...</h2>

        <p>
            I have a bit of an <strong>unusual career history</strong>! I originally went to
            university to study Sociology. Afterwards I spent several years working as a{' '}
            <AppLink label="music promoter" href={MONKEY_KNIFE_FIGHT} shadowWidth={210} /> and then
            in banking. After a stint travelling I ended up back at university doing a masters
            degree in computer science... I like to think it makes me well rounded{' '}
            <Emoji label="shrug" unicode={MAN_SHRUGGING} />.
        </p>

        <p>
            I love making <strong>tech that inspires</strong> and believe that we should be building
            applications responsibly. Our goal should be to improve people&apos;s lives and I fully
            support Tim Berners-Lee&apos;s{' '}
            <AppLink label="Contract for the Web" href={CONTRACT_FOR_THE_WEB} shadowWidth={275} />.
        </p>

        <p>
            I <strong>love to learn</strong> and am constantly trying to learn something new. At the
            moment I&apos;m playing with AR. Tomorrow, it&apos;ll be blockchain...
        </p>

        <p>
            I prefer <strong>agile working</strong> practises and think that a happy work
            environment counts for a lot. I&apos;ve been told that I&apos;m fun to work with. Take
            from that what you will <Emoji label="wink" unicode={WINKING_FACE} />.
        </p>
    </Page>
);

export default AboutPage;

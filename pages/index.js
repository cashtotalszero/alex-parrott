import styled from 'styled-components';

import Page from '../components/Page';
import TextBlock, { LINK, EMOJI } from '../components/TextBlock';
import { GB_FLAG } from '../constants/emojis';
import { ABOUT_PAGE, CAREER_PAGE, SKILLS_PAGE, RANDOM_PAGE, CONTACT_PAGE } from '../constants/urls';

const StyledHighlight = styled.p`
  margin: 40px;
  font-style: italic;
  font-weight: 700;
  transform: skewY(-0.5deg);

  @media only screen and (max-width: 800px) {
    margin: 40px 20px;
  }

  @media only screen and (max-width: 500px) {
    margin: 40px 10px;
  }
`;

const HomePage = () => (
  <Page>
    <h1>Hey, I&apos;m Alex Parrott</h1>

    <TextBlock
      contents={[
        { text: "I'm a full stack web developer based in Bristol, UK " },
        { type: EMOJI, unicode: GB_FLAG, label: 'GB flag emoji' },
        {
          text: '. Or, in English, I make websites and apps!',
        },
      ]}
    />

    <StyledHighlight>
      If you need help building some software then you are in the right place! Take a look around to see if I can help
      you with your project.
    </StyledHighlight>

    <TextBlock
      contents={[
        { text: 'Here you can find out about ' },
        { type: LINK, href: ABOUT_PAGE, text: 'who I am', bold: true },
        { text: ', check out my interactive ' },
        { type: LINK, href: CAREER_PAGE, text: 'C.V.', bold: true },
        { text: ' or search my ' },
        { type: LINK, href: SKILLS_PAGE, text: 'skills', bold: true },
        { text: ' to see if they match your needs. I also have a few ' },
        { type: LINK, href: RANDOM_PAGE, text: 'demos', bold: true },
        { text: " of random web apps I've made." },
      ]}
    />

    <TextBlock
      contents={[
        { text: 'Feel free to ' },
        { type: LINK, href: CONTACT_PAGE, text: 'contact me', bold: true },
        { text: ' to check my availability or discuss your project. ' },
      ]}
    />
    <div />
  </Page>
);

export default HomePage;

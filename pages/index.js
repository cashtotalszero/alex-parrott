import styled from 'styled-components';

import Page from '../components/Page';
import TextBlock, { LINK, EMOJI } from '../components/TextBlock';
import { GB_FLAG } from '../constants/emojis';

const StyledHighlight = styled.p`
  margin: 40px;
  font-style: italic;
  font-weight: 700;
  transform: skewY(-0.5deg);
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
        { type: LINK, href: 'about', text: 'who I am', bold: true },
        { text: ', check out my interactive ' },
        { type: LINK, href: 'work', text: 'C.V.', bold: true },
        { text: ' or search my ' },
        { type: LINK, href: 'tech', text: 'skills', bold: true },
        { text: ' to see if they match your needs. Alternatively, you can ' },
        { type: LINK, href: 'contact', text: 'contact me', bold: true },
        { text: ' to check my availability or discuss your project. ' },
      ]}
    />
    <div />
  </Page>
);

export default HomePage;

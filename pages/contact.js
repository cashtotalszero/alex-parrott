import styled from 'styled-components';

import Page from '../components/Page';
import TextBlock, { LINK, BOLD, EMOJI } from '../components/TextBlock';
import { LINKEDIN_BIO } from '../constants/urls';
import { GRINNING_FACE } from '../constants/emojis';

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

const HomePage = () => (
  <Page>
    <h1>Contact Me</h1>

    <StyledHighlight>
      <a href="mailto:alex.parrott.dev@gmail.com">alex.parrott.dev@gmail.com</a>
    </StyledHighlight>

    <TextBlock
      contents={[
        {
          text:
            'I am available to work remotely with you anywhere in the world! If you need me to work regularly on site then projects in the South West of the UK will take priority. That said, depending on the project I am happy to travel within reason.',
        },
      ]}
    />

    <TextBlock
      contents={[
        { type: BOLD, text: 'Recruiters!', bold: true },
        {
          text: ' Please contact me on ',
        },

        { type: LINK, href: LINKEDIN_BIO, text: 'LinkedIn', bold: true },
        {
          text:
            '. If you email me directly then you are likely to end up in my spam folder and I am unlikely to reply!',
        },
      ]}
    />

    <TextBlock
      contents={[
        { type: BOLD, text: 'If you would like me to work with you', bold: true },
        {
          text: ' or want to contact me for any other reason then feel free to email me. ',
        },
        {
          type: EMOJI,
          unicode: GRINNING_FACE,
          label: 'Grinning face',
        },
      ]}
    />
    <div />
  </Page>
);

export default HomePage;

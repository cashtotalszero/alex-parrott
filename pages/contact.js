import styled from 'styled-components';

import Page from '../components/Page';
import Image from '../components/Image';
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

    <Image
      imageSrc="/alex.png"
      imageAlt="my linkedin profile"
      subtitle="My LinkedIn profile picture. There are a surprising number of Alex Parrotts out there!"
      maxWidth="500px"
    />

    <TextBlock
      contents={[
        {
          text:
            'I am not currently available to take on any additional full time work. Despite the pandemic I am very busy! However, I am always looking for fun projects... ',
        },
        { type: BOLD, text: 'If you have a project and would like me to work with you', bold: true },
        {
          text: ' or want to contact me for any other reason then feel free to reach out on ',
        },
        { type: LINK, href: LINKEDIN_BIO, text: 'LinkedIn', bold: true },
        {
          text: '. ',
        },
      ]}
    />
    <div />
  </Page>
);

export default HomePage;

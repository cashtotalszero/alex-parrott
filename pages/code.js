import styled from 'styled-components';

import Page from '../components/Page';
import Image from '../components/Image';
import TextBlock, { EMOJI, LINK, NAV, BOLD } from '../components/TextBlock';
import { SWEAT_SMILE, JOY } from '../constants/emojis';
import { CODE_REPO, RANDOM_PAGE } from '../constants/urls';

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 5px;
  }
`;

const CodePage = () => (
  <Page>
    <h1>My Code</h1>
    <Image imageSrc="/Octocat.jpg" imageAlt="Octocat" maxWidth="500px" />

    <TextBlock
      contents={[
        {
          text: "Hopefully if you've made it this far then you are actually interested in my coding skills ",
        },
        { type: EMOJI, unicode: SWEAT_SMILE, label: 'Sweating smile' },
        {
          text:
            '. This entire site is made with open source software and you can view every line of code I have written for it on my ',
        },
        {
          type: LINK,
          href: CODE_REPO,
          text: 'GitHub',
        },
        { text: ' page! Everything in there is written by me unless otherwise stated.' },
      ]}
    />

    <TextBlock
      contents={[
        {
          text: 'You can also check out a few other mini apps and demos I have put together on my random ',
        },
        {
          type: NAV,
          href: RANDOM_PAGE,
          text: 'demos',
        },
        { text: ' page.' },
      ]}
    />

    <TextBlock
      contents={[
        { type: BOLD, text: 'Disclaimer!' },
        { text: ' The codebase is a couple of years old and it in need of some love. I have plans to re-write it in TypeScript. I just need to find the time... ' },
        { type: EMOJI, unicode: JOY, label: 'joy' },
      ]}
    />

    <h2>About this site</h2>
    <p>
      The tech stack selected for this project was primarily chosen to showcase my personal coding style (circa 2020). The backend is
      a Next.js server and the front end is a React and Redux app. Meanwhile, the CSS is created using Styled
      Components.
    </p>
    <IconsWrapper>
      <a href={CODE_REPO}>
        <Image imageSrc="/next-icon.png" imageAlt="Next.js" width="40px" />
      </a>
      <a href={CODE_REPO}>
        <Image imageSrc="/react-icon.png" imageAlt="React.js" width="40px" />
      </a>
      <a href={CODE_REPO}>
        <Image imageSrc="/redux-icon.png" imageAlt="Redux" width="40px" />
      </a>
      <a href={CODE_REPO}>
        <Image imageSrc="/styled-components.png" imageAlt="Styled Components" width="40px" />
      </a>
    </IconsWrapper>
  </Page>
);

export default CodePage;

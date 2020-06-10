import styled from 'styled-components';

import Page from '../components/Page';
import Image from '../components/Image';
import TextBlock, { EMOJI, LINK } from '../components/TextBlock';
import { SWEAT_SMILE } from '../constants/emojis';
import { CODE_REPO } from '../constants/urls';

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
    <Image imageSrc="/Octocat.jpg" imageAlt="Octocat" />

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

    <h2>About this site</h2>
    <p>
      The tech stack selected for this project was primarily chosen to showcase my personal coding style. The backend is
      a Next.js server with a Mongo database. The front end is a React and Redux app, while the CSS is created using
      Styled Components.
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
      <a href={CODE_REPO}>
        <Image imageSrc="/mongo-icon.png" imageAlt="MongoDB" width="40px" />
      </a>
    </IconsWrapper>
  </Page>
);

export default CodePage;

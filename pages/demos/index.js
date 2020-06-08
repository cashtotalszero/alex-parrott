import styled from 'styled-components';

import Page from '../../components/Page';
import Image from '../../components/Image';
import TextBlock, { NAV, EMOJI, LINK } from '../../components/TextBlock';
import { SWEAT_SMILE } from '../../constants/emojis';
import { CODE_REPO } from '../../constants/urls';

const StyledHighlight = styled.p`
  margin: 40px;
  font-style: italic;
  font-weight: 700;
  transform: skewY(-0.5deg);
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */

  a {
    padding: 5px;
  }
`;

const IconsDescription = styled.p`
  text-align: center;
  margin: 5px;
`;

const DemosPage = () => (
  <Page>
    <h1>My Code</h1>
    <TextBlock
      contents={[
        {
          text: "Hopefully if you've made it this far then you are actually interested in my codings skills ",
        },
        { type: EMOJI, unicode: SWEAT_SMILE, label: 'Sweating smile' },
        {
          text:
            '. This entire site is made with open source software and you can view every line of code I have written for it on ',
        },
        {
          type: LINK,
          href: CODE_REPO,
          text: 'my GitHub page',
        },
        { text: '! Everything in there is written by me unless otherwise stated.' },
      ]}
    />

    <a href={CODE_REPO}>
      <Image imageSrc="/GitHub_Logo.png" imageAlt="Github logo" />
    </a>

    <IconsDescription>I built this site using:</IconsDescription>
    <IconsWrapper>
      <a href={CODE_REPO}>
        <Image imageSrc="/next-icon.png" imageAlt="Next.js" width="50px" />
      </a>
      <a href={CODE_REPO}>
        <Image imageSrc="/react-icon.png" imageAlt="React.js" width="50px" />
      </a>
      <a href={CODE_REPO}>
        <Image imageSrc="/redux-icon.png" imageAlt="Redux" width="50px" />
      </a>
      <a href={CODE_REPO}>
        <Image imageSrc="/styled-components.png" imageAlt="Styled Components" width="50px" />
      </a>
      <a href={CODE_REPO}>
        <Image imageSrc="/mongo-icon.png" imageAlt="MongoDB" width="50px" />
      </a>
    </IconsWrapper>

    <h2>More stuff!</h2>
    <ul>
      <li>
        <TextBlock
          contents={[
            { type: NAV, href: '/demos/moles', text: 'Whack a mole!', bold: true },
            {
              text:
                ' | A little shout out to Wes Bos. This is a game based on his awesome JavaScript 30 course. I just built it in React instead.',
            },
          ]}
        />
      </li>
      <li>
        <TextBlock
          contents={[
            { type: NAV, href: '/demos/todos', text: 'Redux Todos', bold: true },
            {
              text: " | The classic Redux demo. It's a to do list, build in Redux!",
            },
          ]}
        />
      </li>
      <li>
        <TextBlock contents={[{ type: NAV, href: '/demos', text: 'More coming soon...', bold: true }]} />
      </li>
    </ul>
  </Page>
);

export default DemosPage;

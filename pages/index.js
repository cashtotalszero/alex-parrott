import styled from 'styled-components';

import Link from 'next/link';
import CustomHead from '../components/CustomHead';
import Card from '../components/Card';
import Image from '../components/Image';
import TextBlock, { BOLD, LINK, EMOJI } from '../components/TextBlock';

import { WES_BOS, DAN_ABRAMOV, STEPHEN_GRIDER, KRISTA_KING, CODE_REPO } from '../constants/urls';
import { WINKING_FACE, GB_FLAG, GRINNING_FACE } from '../constants/emojis';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  /* p {
    text-align: center;
  } */

  mark {
    background-color: ${({ theme }) => `${theme.colors.palette3}`};
  }
`;

const StyledHighlight = styled.p`
  margin: 40px;
  font-style: italic;
  font-weight: 700;
  transform: skewY(-0.5deg);
`;

const Page = () => (
  <Container>
    <CustomHead />
    <Card maxWidth="800px">
      <h1>Hey, I'm Alex Parrott</h1>

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
          { text: 'Find out more about ' },
          { type: LINK, href: 'about', text: 'who I am', bold: true },
          { text: ', check out ' },
          { type: LINK, href: 'work', text: 'my interactive C.V.', bold: true },
          { text: ' or ' },
          { type: LINK, href: 'tech', text: 'search my skills', bold: true },
          { text: ' to see if they match your needs. Alternatvely, you can ' },
          { type: LINK, href: 'contact', text: 'contact me', bold: true },
          { text: ' to check my availability or discuss your project. ' },
        ]}
      />

      {/* <h2>There's more...</h2>
      <p>
        Psst, this entire website is my CV! Every line of code is available for you look at. This isn't made with any
        templates, I built it all from the ground up.
      </p>
      <p>
        Each page has a link to the code in the footer. If you want to just dive into the repo now, go ahead. It's all
        on GitHub:
      </p>
      <p />
      <a href={CODE_REPO}>
        <Image imageSrc="/GitHub_Logo.png" imageAlt="Github repo" />
      </a> */}

      <div />
    </Card>
  </Container>
);

export default Page;

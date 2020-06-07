import styled from 'styled-components';

import CustomHead from '../components/CustomHead';
import Card from '../components/Card';
import Image from '../components/Image';
import TextBlock, { BOLD, LINK } from '../components/TextBlock';

import { WES_BOS, DAN_ABRAMOV, STEPHEN_GRIDER, KRISTA_KING } from '../constants/urls';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  /* p {
    text-align: center;
  } */
`;

const Page = () => (
  <Container>
    <CustomHead />
    <Card maxWidth="800px">
      <h1>Opinion</h1>
      <p>
        Here are some resources that have really helped me in my journey as a developer. I think they are good, you
        might too...
      </p>
      <Image imageSrc="/rant.jpg" imageAlt="alex" width="80%" />

      <h2>Online learning resources</h2>
      <ul>
        <li>
          <TextBlock
            contents={[
              { type: LINK, href: WES_BOS, text: 'Wes Bos', bold: true },
              {
                text:
                  ' | This guy is literally the reason I started using React in 2015. He has great online courses on JavaScript, React, Node, Flexbox and more. His web developer podcast is great too.',
              },
            ]}
          />
        </li>
        <li>
          <TextBlock
            contents={[
              { type: LINK, href: DAN_ABRAMOV, text: 'Dan Abramov', bold: true },
              {
                text:
                  " | The mind behind Redux and a heavy hitter on the React engineering team. His blog is worth a read if you're looking to improve your code knowledge.",
              },
            ]}
          />
        </li>
        <li>
          <TextBlock
            contents={[
              { type: LINK, href: STEPHEN_GRIDER, text: 'Sthepen Grider', bold: true },
              {
                text:
                  " | This is another great online learning resourse. I have done a lot of Stephen's courses! He has courses on a wide variety of topics - JS, Go, Typescript, Docker, Blockchain and more. They are usually a decent intro when you are learning something new.",
              },
            ]}
          />
        </li>
        <li>
          <TextBlock
            contents={[
              { type: LINK, href: KRISTA_KING, text: 'Krista King', bold: true },
              {
                text:
                  ' | Whoever says you can be a great coder without understanding maths is lying. Luckily Krista is here to help you out. Her online maths courses are excellent.',
              },
            ]}
          />
        </li>
      </ul>
      <div />
    </Card>
  </Container>
);

export default Page;
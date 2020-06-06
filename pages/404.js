import styled from 'styled-components';

import CustomHead from '../components/CustomHead';
import Card from '../components/Card';
import Image from '../components/Image';
import TextBlock, { BOLD } from '../components/TextBlock';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  p {
    text-align: center;
  }
`;

const Page = () => (
  <Container>
    <CustomHead />
    <Card maxWidth="800px">
      <div>
        <TextBlock contents={[{ type: BOLD, text: '404' }, { text: ' | This page could not be found' }]} />
        <Image imageSrc="/rant.jpg" imageAlt="alex" width="100%" />
      </div>
    </Card>
  </Container>
);

export default Page;

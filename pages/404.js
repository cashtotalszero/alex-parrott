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

const CircularImage = styled.div`
  overflow: hidden;
  border-radius: 50%;
  max-width: 400px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  img {
    transform: scale(1.1);
  }
`;

const Page = () => (
  <Container>
    <CustomHead />
    <Card maxWidth="800px">
      <div>
        <CircularImage>
          <Image imageSrc="/fail.jpg" imageAlt="alex" width="100%%" />
        </CircularImage>
      </div>

      <TextBlock contents={[{ type: BOLD, text: '404' }, { text: ' | This page could not be found' }]} />
    </Card>
  </Container>
);

export default Page;

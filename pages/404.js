import styled from 'styled-components';

import Page from '../components/Page';
import Image from '../components/Image';
import TextBlock, { BOLD } from '../components/TextBlock';

const Container = styled.div`
  p {
    text-align: center;
  }
`;

const NotFoundPage = () => (
  <Page>
    <Container>
      <TextBlock contents={[{ type: BOLD, text: '404' }, { text: ' | This page could not be found' }]} />
      <Image imageSrc="/rant.jpg" imageAlt="Page not found" maxWidth="500px" />
    </Container>
  </Page>
);

export default NotFoundPage;

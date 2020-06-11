import styled from 'styled-components';

import Image from './Image';

const ArrowsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const PuzzleDescription = () => (
  <div>
    <ArrowsWrapper>
      <Image imageSrc="/jigsaw/arrow.png" imageAlt="Jigsaw piece missing" maxWidth="50px" />
      <Image imageSrc="/jigsaw/arrow.png" imageAlt="Jigsaw piece missing" maxWidth="50px" />
      <Image imageSrc="/jigsaw/arrow.png" imageAlt="Jigsaw piece missing" maxWidth="50px" />
    </ArrowsWrapper>

    <p>Move the pieces from the pile to the frame above.</p>
  </div>
);

export default PuzzleDescription;

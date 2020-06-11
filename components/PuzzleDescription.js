import styled from 'styled-components';
import Image from './Image';

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    color: ${({ theme }) => `${theme.colors.shadowLighter}`};
  }
`;

const ArrowsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const PuzzleDescription = () => (
  <DescriptionWrapper>
    <ArrowsWrapper>
      <Image imageSrc="/jigsaw/arrow.png" imageAlt="arrow" maxWidth="50px" />
      <Image imageSrc="/jigsaw/arrow.png" imageAlt="arrow" maxWidth="50px" />
      <Image imageSrc="/jigsaw/arrow.png" imageAlt="arrow" maxWidth="50px" />
      <Image imageSrc="/jigsaw/arrow.png" imageAlt="arrow" maxWidth="50px" />
    </ArrowsWrapper>

    <p>
      DRAG
      <br />
      PIECES
      <br />
      FROM
      <br />
      PILE
    </p>
  </DescriptionWrapper>
);

export default PuzzleDescription;

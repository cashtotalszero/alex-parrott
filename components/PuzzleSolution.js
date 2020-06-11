import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from './Image';
import TextBlock, { LINK } from './TextBlock';
import { GIANT_DAYS } from '../constants/urls';

import {
  FRAME_HEIGHT,
  FRAME_WIDTH,
  FRAME_HEIGHT_MOBILE,
  FRAME_WIDTH_MOBILE,
  SCREEN_BREAK_POINT,
} from '../constants/puzzle';

const StyledSolution = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  h2,
  p {
    text-align: center;
    margin: 10px;
  }
`;

const SolvedImageContainer = styled.div`
  height: ${`${FRAME_HEIGHT}px`};
  width: ${`${FRAME_WIDTH}px`};
  background-color: black;

  @media only screen and (${`${SCREEN_BREAK_POINT}`}) {
    width: ${`${FRAME_WIDTH_MOBILE}px`};
    height: ${`${FRAME_HEIGHT_MOBILE}px`};
  }
`;

const PuzzleSolution = ({ show }) => (
  <StyledSolution show={show}>
    <SolvedImageContainer>
      <Image imageSrc="/jigsaw/Giant_Days_Finished.jpg" imageAlt="Jigsaw piece missing" maxWidth="500px" />
    </SolvedImageContainer>
    <h2>You got it!</h2>
    <TextBlock
      contents={[{ text: 'See more Giant Days ' }, { type: LINK, href: GIANT_DAYS, text: 'here' }, { text: '.' }]}
    />
  </StyledSolution>
);

PuzzleSolution.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default PuzzleSolution;

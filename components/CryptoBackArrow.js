import styled, { withTheme } from 'styled-components';
// import { themePropType } from '../styles';

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 25px;
`;

const BackArrow = ({ theme }) => (
  <ArrowContainer>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill={theme.colors.blue} />
    </svg>
  </ArrowContainer>
);

BackArrow.propTypes = {
  // theme: themePropType.isRequired,
};

export default withTheme(BackArrow);

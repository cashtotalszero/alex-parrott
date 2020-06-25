import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRank = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCircle = styled.div`
  background-color: ${({ theme }) => `${theme.colors.blueTransparent}`};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 25px;
  font-size: 1rem;
  margin-left: 20px;
  color: ${({ theme }) => `${theme.colors.blue}`};
`;

const CoinRank = ({ rank }) => (
  <StyledRank>
    <h2>Rank</h2>
    <StyledCircle>{rank}</StyledCircle>
  </StyledRank>
);

CoinRank.propTypes = {
  rank: PropTypes.string.isRequired,
};

export default CoinRank;

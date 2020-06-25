/* eslint-disable react/jsx-one-expression-per-line */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rank from './CryptoRank';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 30px;
`;

const GridItem = styled.div`
  padding: 30px;
  font-size: 30px;
  text-align: center;
  text-align: left;

  h2 {
    color: ${({ theme }) => `${theme.colors.blue}`};
    text-transform: uppercase;
    font-size: 1rem;
    padding: 10px 0;
    margin: 0;
  }

  p {
    color: ${({ theme }) => `${theme.colors.white}`};
    font-size: 1.5rem;
  }

  span {
    color: ${({ theme }) => `${theme.colors.green}`};
    font-size: 1rem;
    vertical-align: middle;
  }
`;

const CoinDetailsGrid = ({ name, rank, marketCap, volume24H, supplyTotal }) => (
  <Grid>
    <GridItem>
      <Rank rank={rank} />
    </GridItem>
    <GridItem>
      <h2>Market Cap</h2>
      <p>{marketCap}</p>
    </GridItem>
    <GridItem>
      <h2>24H Volume</h2>
      <p>{volume24H}</p>
    </GridItem>
    <GridItem>
      <h2>Supply</h2>
      <p>
        {`${supplyTotal}`} <span>{`${name}`}</span>
      </p>
    </GridItem>
  </Grid>
);

CoinDetailsGrid.propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  marketCap: PropTypes.string.isRequired,
  volume24H: PropTypes.string.isRequired,
  supplyTotal: PropTypes.string.isRequired,
};

export default CoinDetailsGrid;

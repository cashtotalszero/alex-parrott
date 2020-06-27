/* eslint-disable react/jsx-one-expression-per-line */
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 20px;
  column-gap: 5px;
  row-gap: 5px;
`;

const GridHeader = styled.div`
  grid-area: span 1 / span 2;
  text-align: center;
`;

const GridItem = styled.div`
  padding: 30px;
  font-size: 30px;
  text-align: left;
  background-color: ${({ theme }) => `${theme.colors.palette6}`};

  h2 {
    color: ${({ theme }) => `${theme.colors.blue}`};
    text-transform: uppercase;
    font-size: 1.25rem;
    padding: 10px 0;
    margin: 0;
  }

  p {
    color: ${({ theme }) => `${theme.colors.black}`};
    font-size: 1rem;
  }

  span {
    color: ${({ theme }) => `${theme.colors.green}`};
    font-weight: bold;
  }
`;

const CoinDetailsGrid = ({ name, rank, marketCap, volume24H, supplyTotal, price }) => (
  <Grid>
    <GridHeader>
      <h1>{price}</h1>
    </GridHeader>
    <GridItem>
      <h2>Rank</h2>
      <p>{rank}</p>
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
  price: PropTypes.string.isRequired,
  marketCap: PropTypes.string.isRequired,
  volume24H: PropTypes.string.isRequired,
  supplyTotal: PropTypes.string.isRequired,
};

export default CoinDetailsGrid;

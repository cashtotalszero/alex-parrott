import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getCoinImageSrc } from '../utilities/crypto';

const StyledCoinInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  padding: 0 10px 0 50px;
`;

const Title = styled.div`
  padding: 0 20px 0 10px;

  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 0;
  }
  h2 {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
  }
`;

const CoinHeader = ({ name, id, price }) => (
  <StyledCoinInfo>
    <div>
      <Image src={getCoinImageSrc(id)} />
    </div>

    <Title>
      <h1>{name}</h1>
      <h2>{id}</h2>
    </Title>
    <span>{price}</span>
  </StyledCoinInfo>
);

CoinHeader.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CoinHeader;

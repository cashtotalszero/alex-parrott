import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getCoinImageSrc } from '../utilities/crypto';

const StyledCoinInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  padding: 0 10px;
`;

const Title = styled.div`
  padding: 0 10px;

  h1 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin: 0;
  }
  h2 {
    font-size: 0.75rem;
    line-height: 1.25rem;
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
    {/* <span>{price}</span> */}
  </StyledCoinInfo>
);

CoinHeader.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CoinHeader;

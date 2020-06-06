import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: ${({ maxWidth }) => maxWidth || ''};
  background-color: ${({ theme }) => theme.colors.white};
  /* overflow: scroll; */
  /* margin: 20px; */
`;
export default StyledCard;

// .card {
//   padding: 1rem;
//   border-radius: 5px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
// }

const Card = (props) => {
  const { children } = props;

  return <StyledCard {...props}>{children}</StyledCard>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

// export default Card;

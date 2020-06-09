import styled from 'styled-components';
import PropTypes from 'prop-types';

import CustomHead from './CustomHead';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Card = styled.div`
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: ${({ maxWidth }) => maxWidth || ''};
  background-color: ${({ theme }) => theme.colors.white};
`;

const Page = ({ children }) => (
  <StyledPage>
    <CustomHead />
    <Card maxWidth="950px">{children}</Card>
  </StyledPage>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;

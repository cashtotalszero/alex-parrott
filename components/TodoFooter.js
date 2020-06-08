import styled from 'styled-components';

import FilterLink from '../containers/TodoFilterLink';
import { VisibilityFilters } from '../actions';

const StyledFilters = styled.div`
  display: flex;
`;

const Footer = () => {
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

  return (
    <StyledFilters>
      <FilterLink filter={SHOW_ALL}>All</FilterLink>
      <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
    </StyledFilters>
  );
};

export default Footer;

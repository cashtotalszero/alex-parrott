import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const StyledText = styled.span`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  opacity: ${({ completed }) => (completed ? '0.5' : '1')};
`;

const TodoItem = ({ onClick, completed, text }) => (
  <StyledListItem>
    <StyledText completed={completed}>{text}</StyledText>
    <Button onClick={onClick} minWidth="150px">
      Toggle Done
    </Button>
  </StyledListItem>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;

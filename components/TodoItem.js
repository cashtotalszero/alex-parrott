import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const StyledText = styled.span`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  opacity: ${({ completed }) => (completed ? '0.5' : '1')};
  padding-right: 5px;
`;

const TodoItem = ({ onClick, completed, text }) => (
  <li>
    <Checkbox checked={completed} onChange={onClick}>
      <StyledText completed={completed}>{text}</StyledText>
    </Checkbox>
  </li>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;

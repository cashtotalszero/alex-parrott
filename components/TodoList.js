import PropTypes from 'prop-types';
import styled from 'styled-components';

import { VisibilityFilters } from '../actions';
import Todo from './TodoItem';

const StyledList = styled.ul`
  padding: 20px 0;
`;

const TodoList = ({ todos, toggleTodo, activeFilter }) => {
  const emptyListString = () => {
    const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

    switch (activeFilter) {
      case SHOW_COMPLETED:
        return 'You have no completed items.';
      case SHOW_ACTIVE:
        return 'You have no active items.';
      case SHOW_ALL:
        return 'Your list is empty.';
      default:
        return '';
    }
  };

  if (!todos.length) {
    return <p>{emptyListString()}</p>;
  }

  return (
    <StyledList>
      {todos.map((todo) => {
        const { id, completed, text } = todo;
        return <Todo key={id} completed={completed} text={text} onClick={() => toggleTodo(id)} />;
      })}
    </StyledList>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default TodoList;

import { useRef } from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ onSubmit }) => {
  const input = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.current.value.trim()) {
      return;
    }
    onSubmit(input.current.value);
    input.current.value = '';
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input ref={input} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodo;

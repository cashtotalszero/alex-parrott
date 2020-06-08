import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const StyledInput = styled.div`
  padding: 10px 0;
`;

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
    <>
      <form onSubmit={submitHandler}>
        <StyledInput>
          <input ref={input} />
        </StyledInput>
        <Button type="submit" width="100%">
          Add Todo
        </Button>
      </form>
    </>
  );
};

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodo;

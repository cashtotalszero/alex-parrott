import { connect } from 'react-redux';
import { addTodo } from '../actions';
import AddTodo from '../components/TodoAdd';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => dispatch(addTodo(value)),
});

export default connect(null, mapDispatchToProps)(AddTodo);

import Footer from './TodoFooter';
import AddTodo from '../containers/TodoAdd';
import VisibleTodoList from '../containers/TodoVisibleList';

const TodoApp = () => (
  <>
    <h1>Redux To Do List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </>
);

export default TodoApp;

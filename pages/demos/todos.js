import Page from '../../components/Page';

import Footer from '../../components/TodoFooter';
import AddTodo from '../../containers/TodoAdd';
import VisibleTodoList from '../../containers/TodoVisibleList';

const TodoAppPage = () => (
  <Page>
    <h1>Redux To Do List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Page>
);

export default TodoAppPage;

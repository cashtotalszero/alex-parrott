import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import skills from './skills';

export default combineReducers({
  todos,
  visibilityFilter,
  skills,
});

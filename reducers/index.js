import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import skills from './skills';
import crypto from './crypto';

export default combineReducers({
  todos,
  visibilityFilter,
  skills,
  crypto,
});

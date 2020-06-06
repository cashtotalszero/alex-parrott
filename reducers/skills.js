import { FETCH_SKILLS_REQUEST, FETCH_SKILLS_SUCCESS, FETCH_SKILLS_FAIL } from '../actions';

const skills = (
  state = {
    isFetching: false,
    data: [],
    lastUpdated: null,
    error: '',
  },
  action,
) => {
  switch (action.type) {
    case FETCH_SKILLS_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: [],
        lastUpdated: null,
        error: '',
      };
    case FETCH_SKILLS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        lastUpdated: action.receivedAt,
      };
    case FETCH_SKILLS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default skills;

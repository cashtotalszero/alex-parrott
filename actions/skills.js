export const FETCH_SKILLS_REQUEST = 'FETCH_SKILLS_REQUEST';
export const FETCH_SKILLS_SUCCESS = 'FETCH_SKILLS_SUCCESS';
export const FETCH_SKILLS_FAIL = 'FETCH_SKILLS_FAIL';

export const requestSkills = () => ({
  type: FETCH_SKILLS_REQUEST,
});

export const receiveSkills = (data) => ({
  type: FETCH_SKILLS_SUCCESS,
  data,
  receivedAt: Date.now(),
});

export const failedSkills = (error) => ({
  type: FETCH_SKILLS_FAIL,
  error,
});

export const fetchSkills = () => (dispatch) => {
  dispatch(requestSkills());

  return fetch('/api/skills')
    .then((response) => {
      if (response.status === 200) {
        response.json().then((json) => {
          dispatch(receiveSkills(json));
        });
      } else {
        dispatch(failedSkills(response.statusText));
      }
    })
    .catch((e) => dispatch(failedSkills(e.message)));
};

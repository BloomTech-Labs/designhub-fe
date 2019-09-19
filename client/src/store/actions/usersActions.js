import axios from 'axios';
axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

export const INIT_USER = 'INIT_USER';
export const ONBOARD_SUCCESS = 'ONBOARD_SUCCESS';
export const ONBOARD_START = 'ONBOARD_START';
export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const SET_LOADING = 'SET_LOADING';
export const SET_LOGGEDIN = 'SET_LOGGEDIN';

export const initUser = user => async dispatch => {
  dispatch({ type: SET_LOADING });
  try {
    const { id } = user;
    const res = await axios.get(`api/v1/users/${id}`);
    const [thisUser] = res.data;
    console.log('usersActions initUser() res.data', thisUser);

    dispatch({ type: INIT_USER, payload: thisUser });
    const { username } = thisUser;
    if (username === null || username === '') {
      dispatch({ type: ONBOARD_START });
    } else {
      dispatch({ type: SET_LOGGEDIN });
    }
  } catch (err) {
    console.log('usersActions initUser() ERROR', err);
  }
};

export const updateUser = (id, changes) => async dispatch => {
  dispatch({ type: UPDATE_USER_START });
  try {
    const res = await axios.put(`/api/v1/users/${id}`, changes);
    console.log('usersActions updateUser() res.data', res.data);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
  } catch (err) {
    console.log('usersActions updateUser() ERROR', err);
    dispatch({ type: UPDATE_USER_FAILURE, error: err });
  }
};

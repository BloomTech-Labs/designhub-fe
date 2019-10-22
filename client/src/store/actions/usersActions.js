import axios from 'axios';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';
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
    const res = await axiosWithAuth().post('api/v1/users/', user);
    const [userFromResponse] = res.data.user;
    dispatch({ type: INIT_USER, payload: userFromResponse });
    const { username } = userFromResponse;
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
    const updates = res.data[0];
    dispatch({ type: UPDATE_USER_SUCCESS, payload: updates });
    dispatch({ type: SET_LOGGEDIN });
    return true;
  } catch (err) {
    console.log('usersActions updateUser() ERROR', err);
    dispatch({ type: UPDATE_USER_FAILURE, error: err });
  }
};

import axios from 'axios';
axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

export const SET_LOADING = 'SET_LOADING';

export const INIT_USER = 'INIT_USER';
export const initUser = user => async dispatch => {
  dispatch({ type: SET_LOADING });
  try {
    const { id } = user;
    const res = await axios.get(`api/v1/users/${id}`);
    const [thisUser] = res.data;
    console.log('usersActions initUser() res.data', thisUser);

    dispatch({ type: INIT_USER, payload: thisUser });
    if (thisUser.username === null) {
      dispatch({ type: ONBOARD_START });
    }
  } catch (err) {
    console.log('usersActions initUser() ERROR', err);
  }
};

export const ONBOARD_SUCCESS = 'ONBOARD_SUCCESS';
export const ONBOARD_START = 'ONBOARD_START';

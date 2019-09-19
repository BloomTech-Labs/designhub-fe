import axios from 'axios';

export const SET_LOADING = 'SET_LOADING';

export const INIT_USER = 'INIT_USER';
export const initUser = user => async dispatch => {
  dispatch({ type: SET_LOADING });
  try {
    const { id } = user;
    axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;
    const res = await axios.get(`api/v1/users/${id}`);
    // this object shape will change soon
    const [thisUser] = res.data.data;
    dispatch({ type: INIT_USER, payload: thisUser });
    console.log('usersActions initUser() res.data.data', thisUser);
    if (thisUser.username === null) {
      dispatch({ type: ONBOARD_START });
    }
  } catch (err) {
    console.log('usersActions initUser() ERROR', err);
  }
};

export const ONBOARD_SUCCESS = 'ONBOARD_SUCCESS';
export const ONBOARD_START = 'ONBOARD_START';

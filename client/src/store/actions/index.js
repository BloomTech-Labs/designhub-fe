import { axiosWithAuth } from '../../utilities/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
};

export const LOGOUT_START = 'LOGIN_START';
export const LOGOUT_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_FAILURE = 'LOGIN_FAILURE';

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_START });
};

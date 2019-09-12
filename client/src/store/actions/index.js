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

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = () => dispatch => {
  dispatch({ type: SIGNUP_START });
};

export const GET_ALL_USERS_START = 'GET_USERS_START';
export const GET_ALL_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_USERS_FAILURE';

export const getUsers = () => dispatch => {
  dispatch({ type: GET_ALL_USERS_START });
  return axiosWithAuth()
    .get('/api/v1/users')
    .then(res => {
      dispatch({ type: GET_ALL_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_USERS_FAILURE, error: err });
    });
};

export const GET_ALL_PROJECTS_START = 'GET_ALL_PROJECTS_START';
export const GET_ALL_PROJECTS_SUCCESS = 'GET_ALL_PROJECTS_SUCCESS';
export const GET_ALL_PROJECTS_FAILURE = 'GET_ALL_PROJECTS_FAILURE';

export const getAllProjects = () => dispatch => {
  dispatch({ type: GET_ALL_PROJECTS_START });
  return axiosWithAuth()
    .get('/api/v1/projects')
    .then(res => {
      dispatch({ type: GET_ALL_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_PROJECTS_FAILURE, error: err });
    });
};

export const ADD_PROJECT_START = 'ADD_PROJECT_START';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

export const addProject = project => dispatch => {
  dispatch({ type: ADD_PROJECT_START });
  return axiosWithAuth()
    .post('/api/v1/projects', project)
    .then(res => {
      dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_PROJECT_FAILURE, error: err });
    });
};

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

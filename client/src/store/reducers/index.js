import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from '../actions';

const initialState = {
  error: {},
  message: null,
  currentUser: {},
  users: [],
  projects: [],
  teams: [],
  isLoading: false,
  isLoggedIn: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: {},
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: {},
        currentUser: action.payload.user,
        isLoggedIn: true,
        isLoading: false,
        currentUser: action.payload,
        message: action.payload.message
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoggedIn: false,
        isLoading: false
      };
    case LOGOUT_START:
      return {
        ...state,
        error: {},
        isLoading: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        error: {},
        isLoading: false,
        isLoggedIn: false,
        currentUser: {}
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case SIGNUP_START:
      return {
        ...state,
        error: {},
        isLoading: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: {},
        isLoading: false,
        message: action.payload
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case GET_USERS_START:
      return {
        ...state,
        error: {},
        isLoading: true,
        users: []
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        error: {},
        isLoading: false,
        users: action.payload
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

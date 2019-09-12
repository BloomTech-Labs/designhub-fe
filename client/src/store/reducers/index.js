import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../actions';

const initialState = {
  error: {},
  user: {},
  isLoading: false,
  isLoggedIn: localStorage.getItem('token')
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
        user: action.payload,
        isLoading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
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
        user: {}
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

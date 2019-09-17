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
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_SINGLE_USER_START,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from '../actions';

const initialState = {
  error: null,
  message: null,
  currentUser: null,
  singleUser: null,
  allUsers: null,
  isLoading: false,
  isLoggedIn: false
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: action.payload.user,
        isLoggedIn: true,
        isLoading: false,
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
        error: null,
        isLoading: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null
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
        error: null,
        isLoading: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        message: action.payload.message,
        user: action.payload.user
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case GET_ALL_USERS_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        allUsers: action.payload
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case GET_SINGLE_USER_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        singleUser: action.payload.data[0]
      };
    case GET_SINGLE_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case UPDATE_USER_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        allUsers: [...state.allUsers, action.payload]
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

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
  GET_ALL_PROJECTS_START,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_FAILURE,
  ADD_PROJECT_START,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from '../actions';

const initialState = {
  error: null,
  message: null,
  currentUser: null,
  singleUser: null,
  users: null,
  projects: null,
  teams: null,
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
        error: {},
        isLoading: true,
        users: []
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        error: {},
        isLoading: false,
        users: action.payload
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
        error: {},
        isLoading: true
      };
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        error: {},
        isLoading: false,
        singleUser: action.payload
      };
    case GET_SINGLE_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case GET_ALL_PROJECTS_START:
      return {
        ...state,
        error: {},
        isLoading: true
      };
    case GET_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        error: {},
        isLoading: false,
        projects: action.payload
      };
    case GET_ALL_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case ADD_PROJECT_START:
      return {
        ...state,
        error: {},
        isLoading: true
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: {},
        projects: [...state.projects, ...action.payload]
      };
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case UPDATE_USER_START:
      return {
        ...state,
        error: {},
        isLoading: true
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        error: {},
        isLoading: false,
        users: [...state.users, action.payload]
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

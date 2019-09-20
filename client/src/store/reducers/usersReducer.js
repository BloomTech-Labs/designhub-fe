import {
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

import {
  INIT_USER,
  ONBOARD_START,
  ONBOARD_SUCCESS,
  SET_LOADING,
  SET_LOGGEDIN
} from '../actions/usersActions';

const initialState = {
  error: null,
  message: null,
  currentUser: null,
  singleUser: null,
  allUsers: [],
  isLoading: false,
  loggedIn: false,
  onboarding: false
};

export const usersReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case INIT_USER:
      return {
        ...state,
        currentUser: payload,
        isLoading: false
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SET_LOGGEDIN:
      return {
        ...state,
        loggedIn: true
      };
    case ONBOARD_START:
      return {
        ...state,
        onboarding: true
      };
    case ONBOARD_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        onboarding: false
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
        isLoading: true
      };
    case UPDATE_USER_SUCCESS:
      const changes = { ...state.currentUser, ...payload };
      return {
        ...state,
        currentUser: changes,
        isLoading: false,
        onboarding: false
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

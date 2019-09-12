import {
  GET_ALL_PROJECTS_START,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_FAILURE,
  GET_SINGLE_PROJECT_START,
  GET_SINGLE_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_FAILURE,
  ADD_PROJECT_START,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE
} from '../actions';

const initialState = {
  error: null,
  message: null,
  projects: null,
  singleProject: null,
  isLoading: false
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        projects: action.payload
      };
    case GET_ALL_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case GET_SINGLE_PROJECT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        singleProject: action.payload
      };
    case GET_SINGLE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case ADD_PROJECT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        projects: [...state.projects, ...action.payload]
      };
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

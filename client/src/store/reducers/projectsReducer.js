import {
  GET_ALL_PROJECTS_START,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_FAILURE,
  GET_SINGLE_PROJECT_START,
  GET_SINGLE_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_FAILURE,
  GET_USERS_PROJECTS_START,
  GET_USERS_PROJECTS_SUCCESS,
  GET_USERS_PROJECTS_FAILURE,
  ADD_PROJECT_START,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  UPDATE_PROJECT_START,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  DELETE_PROJECT_START,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,

  GET_RECENT_PROJECTS_START,
  GET_RECENT_PROJECTS_SUCCESS,
  GET_RECENT_PROJECTS_FAILURE

} from '../actions';

const initialState = {
  error: null,
  allProjects: [],
  singleProject: null,
  usersProjects: [],
  usersRecentProjects: [],  
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
        allProjects: action.payload
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
        error: action.payload, //error status code (401 or 404) is assigned to error
        isLoading: false
      };
    case GET_USERS_PROJECTS_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_USERS_PROJECTS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        usersProjects: action.payload
      };
    case GET_USERS_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_RECENT_PROJECTS_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_RECENT_PROJECTS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        usersRecentProjects: action.payload
      };
    case GET_RECENT_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload,
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
        allProjects: [...state.allProjects, action.payload]
      };
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case UPDATE_PROJECT_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        allProjects: [...state.allProjects, action.payload]
      };
    case UPDATE_PROJECT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case DELETE_PROJECT_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case DELETE_PROJECT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

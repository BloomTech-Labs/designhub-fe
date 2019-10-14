import {
  STAR_PROJECT_START,
  STAR_PROJECT_SUCCESS,
  STAR_PROJECT_FAILURE,
  UNSTAR_PROJECT_START,
  UNSTAR_PROJECT_SUCCESS,
  UNSTAR_PROJECT_FAILURE,
  GET_STARRED_PROJECTS_START,
  GET_STARRED_PROJECTS_SUCCESS,
  GET_STARRED_PROJECTS_FAILURE,
  GET_PROJECT_STAR_COUNT_START,
  GET_PROJECT_STAR_COUNT_SUCCESS,
  GET_PROJECT_STAR_COUNT_FAILURE
} from '../actions';

const initialState = {
  error: null,
  isLoading: false,
  starredProjects: [],
  projectStarCount: null
};

export const starsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STAR_PROJECT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case STAR_PROJECT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case STAR_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case UNSTAR_PROJECT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case UNSTAR_PROJECT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case UNSTAR_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_STARRED_PROJECTS_START:
      return {
        ...state,
        error: null,
        isLoading: true,
        starredProjects: []
      };
    case GET_STARRED_PROJECTS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        starredProjects: action.payload
      };
    case GET_STARRED_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_PROJECT_STAR_COUNT_START:
      return {
        ...state,
        error: null,
        isLoading: true,
        projectStarCount: null
      };
    case GET_PROJECT_STAR_COUNT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        projectStarCount: action.payload
      };
    case GET_PROJECT_STAR_COUNT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

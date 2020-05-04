import {
  CREATE_HEATMAP_START,
  CREATE_HEATMAP_SUCCESS,
  CREATE_HEATMAP_FAILURE,
  GET_HEATMAP_START,
  GET_HEATMAP_SUCCESS,
  GET_HEATMAP_FAILURE,
  GET_ALL_CONTRIBS_START,
  GET_ALL_CONTRIBS_SUCCESS,
  GET_ALL_CONTRIBS_FAILURE,
  GET_CONTRIBS_COUNT_START,
  GET_CONTRIBS_COUNT_SUCCESS,
  GET_CONTRIBS_COUNT_FAILURE,
  UPDATE_HEATMAP_START,
  UPDATE_HEATMAP_SUCCESS,
  UPDATE_HEATMAP_FAILURE,
  DELETE_HEATMAP_START,
  DELETE_HEATMAP_SUCCESS,
  DELETE_HEATMAP_FAILURE
} from '../actions';

const initialState = {
  heatmap: null,
  contributions: null,
  contributionCount: null
};

export const heatmapReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_HEATMAP_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case CREATE_HEATMAP_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case CREATE_HEATMAP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_HEATMAP_START:
      return {
        ...state,
        error: null,
        isLoading: true,
        heatmap: null
      };
    case GET_HEATMAP_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        heatmap: action.payload
      };
    case GET_HEATMAP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_ALL_CONTRIBS_START:
      return {
        ...state,
        error: null,
        isLoading: true,
        contributions: null
      };
    case GET_ALL_CONTRIBS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        contributions: action.payload
      };
    case GET_ALL_CONTRIBS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_CONTRIBS_COUNT_START:
      return {
        ...state,
        error: null,
        isLoading: true,
        contributionCount: null
      };
    case GET_CONTRIBS_COUNT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        contributionCount: action.payload
      };
    case GET_CONTRIBS_COUNT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case UPDATE_HEATMAP_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case UPDATE_HEATMAP_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case UPDATE_HEATMAP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case DELETE_HEATMAP_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case DELETE_HEATMAP_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case DELETE_HEATMAP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

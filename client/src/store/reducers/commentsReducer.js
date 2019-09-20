import {
  GET_COMMENTS_START,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  UPDATE_COMMENT_START,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  DELETE_COMMENT_START,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
} from '../actions';

const initialState = {
  error: null,
  message: null,
  projectComments: [],
  isLoading: false
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        projectComments: action.payload
      };
    case GET_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case ADD_COMMENT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        projectComments: [...state.projectComments, action.payload]
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case UPDATE_COMMENT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        projectComments: [...state.projectComments, action.payload]
      };
    case UPDATE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case DELETE_COMMENT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

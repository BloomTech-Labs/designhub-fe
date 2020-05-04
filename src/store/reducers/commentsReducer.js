import {
  GET_PROJECT_COMMENTS_START,
  GET_PROJECT_COMMENTS_SUCCESS,
  GET_PROJECT_COMMENTS_FAILURE,
  GET_PHOTO_COMMENTS_START,
  GET_PHOTO_COMMENTS_SUCCESS,
  GET_PHOTO_COMMENTS_FAILURE,
  ADD_PROJECT_COMMENT_START,
  ADD_PROJECT_COMMENT_SUCCESS,
  ADD_PROJECT_COMMENT_FAILURE,
  ADD_PHOTO_COMMENT_START,
  ADD_PHOTO_COMMENT_SUCCESS,
  ADD_PHOTO_COMMENT_FAILURE,
  UPDATE_COMMENT_START,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  DELETE_COMMENT_START,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
} from '../actions';

const initialState = {
  error: null,
  isLoading: false,
  projectComments: [],
  photoComments: []
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_COMMENTS_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_PROJECT_COMMENTS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        projectComments: action.payload
      };
    case GET_PROJECT_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_PHOTO_COMMENTS_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_PHOTO_COMMENTS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        photoComments: action.payload
      };
    case GET_PHOTO_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_PROJECT_COMMENT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ADD_PROJECT_COMMENT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        projectComments: [...state.projectComments, action.payload]
      };
    case ADD_PROJECT_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_PHOTO_COMMENT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ADD_PHOTO_COMMENT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        photoComments: [...state.photoComments, action.payload]
      };
    case ADD_PHOTO_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
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
        isLoading: false
      };
    case UPDATE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
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
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

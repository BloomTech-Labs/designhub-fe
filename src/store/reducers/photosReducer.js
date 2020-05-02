import {
  GET_PROJECT_PHOTOS_START,
  GET_PROJECT_PHOTOS_SUCCESS,
  GET_PROJECT_PHOTOS_FAILURE,
  GET_SINGLE_PHOTO_START,
  GET_SINGLE_PHOTO_SUCCESS,
  GET_SINGLE_PHOTO_FAILURE,
  ADD_PROJECT_PHOTO_START,
  ADD_PROJECT_PHOTO_SUCCESS,
  ADD_PROJECT_PHOTO_FAILURE,
  DELETE_PHOTO_START,
  DELETE_PHOTO_SUCCESS,
  DELETE_PHOTO_FAILURE
} from '../actions';

const initialState = {
  error: null,
  isLoading: false,
  projectPhotos: [],
  singlePhoto: null
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_PHOTOS_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_PROJECT_PHOTOS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        projectPhotos: action.payload
      };
    case GET_PROJECT_PHOTOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_SINGLE_PHOTO_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_SINGLE_PHOTO_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        singlePhoto: action.payload
      };
    case GET_SINGLE_PHOTO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_PROJECT_PHOTO_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ADD_PROJECT_PHOTO_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case ADD_PROJECT_PHOTO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case DELETE_PHOTO_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case DELETE_PHOTO_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case DELETE_PHOTO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

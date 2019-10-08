import {
  GET_FOLLOWERS_START,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
  GET_FOLLOWING_START,
  GET_FOLLOWING_SUCCESS,
  GET_FOLLOWING_FAILURE,
  GET_FOLLOWERS_COUNT_START,
  GET_FOLLOWERS_COUNT_SUCCESS,
  GET_FOLLOWERS_COUNT_FAILURE,
  GET_FOLLOWING_COUNT_START,
  GET_FOLLOWING_COUNT_SUCCESS,
  GET_FOLLOWING_COUNT_FAILURE,
  ADD_FOLLOW_START,
  ADD_FOLLOW_SUCCESS,
  ADD_FOLLOW_FAILURE,
  DELETE_FOLLOW_START,
  DELETE_FOLLOW_SUCCESS,
  DELETE_FOLLOW_FAILURE,
  GET_IS_FOLLOWED_START,
  GET_IS_FOLLOWED_SUCCESS,
  GET_IS_FOLLOWED_FAILURE
} from '../actions';

const initialState = {
  error: null,
  isLoading: false,
  followers: [],
  following: [],
  followersCount: null,
  followingCount: null,
  isFollowed: false
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLLOWERS_START:
      return {
        ...state,
        error: null,
        isLoading: true,
        followers: []
      };
    case GET_FOLLOWERS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        followers: action.payload
      };
    case GET_FOLLOWERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_FOLLOWING_START:
      return {
        ...state,
        error: null,
        isLoading: true,
        following: []
      };
    case GET_FOLLOWING_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        following: action.payload
      };
    case GET_FOLLOWING_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_FOLLOWERS_COUNT_START:
      return {
        ...state,
        error: null,
        isLoading: true,
        followersCount: null
      };
    case GET_FOLLOWERS_COUNT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        followersCount: action.payload
      };
    case GET_FOLLOWERS_COUNT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_FOLLOWING_COUNT_START:
      return {
        ...state,
        error: null,
        isLoading: true,
        followingCount: null
      };
    case GET_FOLLOWING_COUNT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        followingCount: action.payload
      };
    case GET_FOLLOWING_COUNT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_FOLLOW_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ADD_FOLLOW_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case ADD_FOLLOW_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case DELETE_FOLLOW_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case DELETE_FOLLOW_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case DELETE_FOLLOW_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_IS_FOLLOWED_START:
      return {
        ...state,
        error: null,
        isLoading: true,
        isFollowed: false
      };
    case GET_IS_FOLLOWED_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        isFollowed: action.payload
      };
    case GET_IS_FOLLOWED_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

import {
  GET_INVITES_BY_USER_START,
  GET_INVITES_BY_USER_SUCCESS,
  GET_INVITES_BY_USER_FAILURE,
  GET_USERS_FROM_INVITES_START,
  GET_USERS_FROM_INVITES_SUCCESS,
  GET_USERS_FROM_INVITES_FAILURE,
  CREATE_PROJECT_INVITE_START,
  CREATE_PROJECT_INVITE_SUCCESS,
  CREATE_PROJECT_INVITE_FAILURE,
  ACCEPT_INVITE_START,
  ACCEPT_INVITE_SUCCESS,
  ACCEPT_INVITE_FAILURE,
  UPDATE_INVITE_START,
  UPDATE_INVITE_SUCCESS,
  UPDATE_INVITE_FAILURE,
  DELETE_INVITE_START,
  DELETE_INVITE_SUCCESS,
  DELETE_INVITE_FAILURE,
  GET_INVITE_START,
  GET_INVITE_SUCCESS,
  GET_INVITE_FAILURE
} from '../actions/index';

const initialState = {
  userInvites: [],
  isLoading: false,
  invite: {},
  error: null,
  usersFromInvites: [],
  loadingUsers: false,
  loadUsersError: '',
  isDeleting: false,
};



export const invitesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_FROM_INVITES_START:
      return {
        ...state,
        usersFromInvites: [],
        loadingUsers: true,
        loadUsersError: ''
      };
    case GET_USERS_FROM_INVITES_SUCCESS:
      const loadingUsers = action.payload.lastOne ? false : state.loadingUsers;
      console.log(action.payload);
      const nondupe = state.usersFromInvites.every(user => {
        return user.email !== action.payload.user.email;
      })

      if (!nondupe || !action.payload.user) {
        return {
          ...state,
          loadingUsers
        };
      } else {
        return {
          ...state,
          usersFromInvites: [...state.usersFromInvites, action.payload.user],
          loadingUsers
        };
      }
    case GET_USERS_FROM_INVITES_FAILURE:
      return {
        ...state,
        usersFromInvites: [],
        loadingUsers: false,
        loadUsersError: action.payload
      };
    case GET_INVITES_BY_USER_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_INVITES_BY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInvites: action.payload        
      };      
    case GET_INVITES_BY_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_INVITE_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_INVITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        invite: action.payload
      };
    case GET_INVITE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case CREATE_PROJECT_INVITE_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case CREATE_PROJECT_INVITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        invite: action.payload
      };
    case CREATE_PROJECT_INVITE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ACCEPT_INVITE_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ACCEPT_INVITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        invite: action.payload
      };
    case ACCEPT_INVITE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case UPDATE_INVITE_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case UPDATE_INVITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        invite: action.payload
      };
    case UPDATE_INVITE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_INVITE_START:
      return {
        ...state,
        error: null,
        isDeleting: true
      };
    case DELETE_INVITE_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        usersFromInvites: state.usersFromInvites.filter(user => user.email !== action.payload)
      };
    case DELETE_INVITE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      };
    default:
      return state;
  }
};

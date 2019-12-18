import {

    GET_ALL_CATEGORY_NAMES_START,
    GET_ALL_CATEGORY_NAMES_SUCCESS, 
    GET_ALL_CATEGORY_NAMES_FAILURE,
    GET_ASSIGNED_CATEGORIES_START,
    GET_ASSIGNED_CATEGORIES_SUCCESS,
    GET_ASSIGNED_CATEGORIES_FAILURE,
    ADD_CATEGORY_TO_PROJECT_START,
    ADD_CATEGORY_TO_PROJECT_SUCCESS,
    ADD_CATEGORY_TO_PROJECT_FAILURE,
    GET_CATEGORIES_BY_USERID_START,
    GET_CATEGORIES_BY_USERID_SUCCESS,
    GET_CATEGORIES_BY_USERID_FAILURE,
    GET_CATEGORY_BY_CATEGORYID_START,
    GET_CATEGORY_BY_CATEGORYID_SUCCESS, 
    GET_CATEGORY_BY_CATEGORYID_FAILURE,
    GET_CATEGORIES_BY_PROJECTID_START,
    GET_CATEGORIES_BY_PROJECTID_SUCCESS,
    GET_CATEGORIES_BY_PROJECTID_FAILURE,
    DELETE_CATEGORY_FROM_PROJECT_START,
    DELETE_CATEGORY_FROM_PROJECT_SUCCESS,
    DELETE_CATEGORY_FROM_PROJECT_FAILURE,
    GET_PROJECTS_BY_CATEGORYID_START,
    GET_PROJECTS_BY_CATEGORYID_SUCCESS,
    GET_PROJECTS_BY_CATEGORYID_FAILURE

  } from '../actions/index';
   

  const initialState = {
    categoryNames: [],
    assignedCategories: [],
    addedCategory: {},
    userCategories: [],
    category: [],
    projectCategories: [], //categories added to a project
    projectsByCategory: [],
    isLoading: false,    
    error: null       
  };  


  export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_CATEGORY_NAMES_START:
        return {
          ...state,
          error: null,
          isLoading: true
        };
      case GET_ALL_CATEGORY_NAMES_SUCCESS:
        return {
          ...state,
          isLoading: false,
          categoryNames: action.payload
        };
      case GET_ALL_CATEGORY_NAMES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      case GET_ASSIGNED_CATEGORIES_START:
        return {
            ...state,
            error: null,
            isLoading: true
        };
      case GET_ASSIGNED_CATEGORIES_SUCCESS:
        return {
            ...state,
            isLoading: false,
            assignedCategories: action.payload
        };
       case GET_ASSIGNED_CATEGORIES_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        };
        case ADD_CATEGORY_TO_PROJECT_START:
        return {
            ...state,
            error: null,
            isLoading: true
        };
      case ADD_CATEGORY_TO_PROJECT_SUCCESS:
        return {
            ...state,
            isLoading: false,
            addedCategory: action.payload
        };
       case ADD_CATEGORY_TO_PROJECT_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        };
        case GET_CATEGORIES_BY_USERID_START:
        return {
            ...state,
            error: null,
            isLoading: true
        };
      case GET_CATEGORIES_BY_USERID_SUCCESS:
        return {
            ...state,
            isLoading: false,
            userCategories: action.payload
        };
       case GET_CATEGORIES_BY_USERID_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        };
        case GET_CATEGORY_BY_CATEGORYID_START:
        return {
            ...state,
            error: null,
            isLoading: true
        };
      case GET_CATEGORY_BY_CATEGORYID_SUCCESS:
        return {
            ...state,
            isLoading: false,
            category: action.payload
        };
       case GET_CATEGORY_BY_CATEGORYID_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        };
        case GET_CATEGORIES_BY_PROJECTID_START:
        return {
            ...state,
            error: null,
            isLoading: true
        };
      case GET_CATEGORIES_BY_PROJECTID_SUCCESS:
        return {
            ...state,
            isLoading: false,
            projectCategories: action.payload
        };
       case GET_CATEGORIES_BY_PROJECTID_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        };
        case DELETE_CATEGORY_FROM_PROJECT_START:
        return {
            ...state,
            error: null,
            isLoading: true
        };
      case DELETE_CATEGORY_FROM_PROJECT_SUCCESS:
        return {
            ...state,
            isLoading: false,
            error: null
        };
       case DELETE_CATEGORY_FROM_PROJECT_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        };

        case GET_PROJECTS_BY_CATEGORYID_START:
        return {
            ...state,
            error: null,
            isLoading: true
        };
      case GET_PROJECTS_BY_CATEGORYID_SUCCESS:
        return {
            ...state,
            isLoading: false,
            projectsByCategory: action.payload            
        };
       case GET_PROJECTS_BY_CATEGORYID_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        };

      default:
        return state;
    }
  };
  
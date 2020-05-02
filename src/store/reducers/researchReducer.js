import {
    GET_PROJECT_RESEARCH_START,
    GET_PROJECT_RESEARCH_SUCCESS,
    GET_PROJECT_RESEARCH_FAILURE,
    GET_SINGLE_RESEARCH_START,
    GET_SINGLE_RESEARCH_SUCCESS,
    GET_SINGLE_RESEARCH_FAILURE,
    ADD_PROJECT_RESEARCH_START,
    ADD_PROJECT_RESEARCH_SUCCESS,
    ADD_PROJECT_RESEARCH_FAILURE,
    DELETE_PROJECT_RESEARCH_START,
    DELETE_PROJECT_RESEARCH_SUCCESS,
    DELETE_PROJECT_RESEARCH_FAILURE
} from '../actions';

const initialState = {
    error: null,
    isLoading: false,
    projectResearch: [],
    singleResearch: null
};

export const researchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECT_RESEARCH_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case GET_PROJECT_RESEARCH_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                projectResearch: action.payload
            };
        case GET_PROJECT_RESEARCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case GET_SINGLE_RESEARCH_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case GET_SINGLE_RESEARCH_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                singleResearch: action.payload
            };
        case GET_SINGLE_RESEARCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case ADD_PROJECT_RESEARCH_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case ADD_PROJECT_RESEARCH_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false
            };
        case ADD_PROJECT_RESEARCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case DELETE_PROJECT_RESEARCH_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case DELETE_PROJECT_RESEARCH_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false
            };
        case DELETE_PROJECT_RESEARCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};

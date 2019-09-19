import {
  GET_ALL_PROJECTS_START,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_FAILURE,
  GET_SINGLE_PROJECT_START,
  GET_SINGLE_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_FAILURE,
  ADD_PROJECT_START,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  UPDATE_PROJECT_START,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  DELETE_PROJECT_START,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE
} from '../actions';

const DUMMY_PROJECTS = [
  {
    project_id: 1,
    name: 'Project One',
    description:
      'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
    figma: null,
    invision: 'http://google.com',
    mainImg:
      'https://cdn.dribbble.com/users/182336/screenshots/7150621/media/b0a6aa5b2a19029479da7d91972b2774.png'
  },
  {
    project_id: 2,
    name: 'Project Two',
    description:
      'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
    figma: null,
    invision: 'http://google.com',
    mainImg:
      'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
  },
  {
    project_id: 3,
    name: 'Project Three',
    description:
      'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
    figma: 'http://google.com',
    invision: null,
    mainImg:
      'https://cdn.dribbble.com/users/3281732/screenshots/7150760/media/a11dae58a8eee44d242417ae6a6bed3c.jpg'
  },
  {
    project_id: 4,
    name: 'Project Four',
    description:
      'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
    figma: null,
    invision: null,
    mainImg:
      'https://cdn.dribbble.com/users/674925/screenshots/7147175/media/ca03b14f14639eddf76bd01174c9f2c5.png'
  },
  {
    project_id: 5,
    name: 'Project Five',
    description:
      'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
    figma: null,
    invision: null,
    mainImg:
      'https://cdn.dribbble.com/users/1430543/screenshots/7151173/media/c6109e2cedff65261c8a5f33ce618bba.jpg'
  },
  {
    project_id: 6,
    name: 'Project Six',
    description:
      'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
    figma: null,
    invision: null,
    mainImg:
      'https://cdn.dribbble.com/users/1312159/screenshots/7148680/image.png'
  },
  {
    project_id: 7,
    name: 'Project Seven',
    description:
      'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
    figma: null,
    invision: null,
    main:
      'https://cdn.dribbble.com/users/2151039/screenshots/7148065/media/2cf88366ac2a35660345ca8226a97085.png'
  },
  {
    project_id: 8,
    name: 'Project Eight',
    description:
      'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
    figma: null,
    invision: null,
    mainImg:
      'https://cdn.dribbble.com/users/1160700/screenshots/7150660/media/610f9cc1a848c9ec6ba0121a4c569a9f.png'
  }
];

const initialState = {
  error: null,
  message: null,
  allProjects: [...DUMMY_PROJECTS],
  singleProject: null,
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
        allProjects: action.payload.data
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
        singleProject: action.payload.data[0]
      };
    case GET_SINGLE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.error,
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

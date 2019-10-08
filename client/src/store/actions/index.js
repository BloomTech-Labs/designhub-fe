import { axiosWithAuth } from '../../utilities/axiosWithAuth';

//Users
export const GET_ALL_USERS_START = 'GET_USERS_START';
export const GET_ALL_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_USERS_FAILURE';
export const GET_SINGLE_USER_START = 'GET_SINGLE_USER_START';
export const GET_SINGLE_USER_SUCCESS = 'GET_SINGLE_USER_SUCCESS';
export const GET_SINGLE_USER_FAILURE = 'GET_SINGLE_USER_FAILURE';
export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

// Projects
export const GET_ALL_PROJECTS_START = 'GET_ALL_PROJECTS_START';
export const GET_ALL_PROJECTS_SUCCESS = 'GET_ALL_PROJECTS_SUCCESS';
export const GET_ALL_PROJECTS_FAILURE = 'GET_ALL_PROJECTS_FAILURE';
export const ADD_PROJECT_START = 'ADD_PROJECT_START';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';
export const GET_SINGLE_PROJECT_START = 'GET_SINGLE_PROJECT_START';
export const GET_SINGLE_PROJECT_SUCCESS = 'GET_SINGLE_PROJECT_SUCCESS';
export const GET_SINGLE_PROJECT_FAILURE = 'GET_SINGLE_PROJECT_FAILURE';
export const UPDATE_PROJECT_START = 'UPDATE_PROJECT_START';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
export const UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE';
export const DELETE_PROJECT_START = 'DELETE_PROJECT_START';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';
export const GET_USERS_PROJECTS_START = 'GET_USERS_PROJECTS_START';
export const GET_USERS_PROJECTS_SUCCESS = 'GET_USERS_PROJECTS_SUCCESS';
export const GET_USERS_PROJECTS_FAILURE = 'GET_USERS_PROJECTS_FAILURE';

//Comments
export const GET_PROJECT_COMMENTS_START = 'GET_PROJECT_COMMENTS_START';
export const GET_PROJECT_COMMENTS_SUCCESS = 'GET_PROJECT_COMMENTS_SUCCESS';
export const GET_PROJECT_COMMENTS_FAILURE = 'GET_PROJECT_COMMENTS_FAILURE';
export const GET_PHOTO_COMMENTS_START = 'GET_PHOTO_COMMENTS_START';
export const GET_PHOTO_COMMENTS_SUCCESS = 'GET_PHOTO_COMMENTS_SUCCESS';
export const GET_PHOTO_COMMENTS_FAILURE = 'GET_PHOTO_COMMENTS_FAILURE';
export const ADD_PROJECT_COMMENT_START = 'ADD_PROJECT_COMMENT_START';
export const ADD_PROJECT_COMMENT_SUCCESS = 'ADD_PROJECT_COMMENT_SUCCESS';
export const ADD_PROJECT_COMMENT_FAILURE = 'ADD_PROJECT_COMMENT_FAILURE';
export const ADD_PHOTO_COMMENT_START = 'ADD_PHOTO_COMMENT_START';
export const ADD_PHOTO_COMMENT_SUCCESS = 'ADD_PHOTO_COMMENT_SUCCESS';
export const ADD_PHOTO_COMMENT_FAILURE = 'ADD_PHOTO_COMMENT_FAILURE';
export const UPDATE_COMMENT_START = 'UPDATE_COMMENT_START';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';
export const DELETE_COMMENT_START = 'DELETE_COMMENT_START';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';

// Users Actions
export const getAllUsers = () => dispatch => {
  dispatch({ type: GET_ALL_USERS_START });
  return axiosWithAuth()
    .get('/api/v1/users')
    .then(res => {
      dispatch({ type: GET_ALL_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_USERS_FAILURE, error: err });
    });
};

export const getSingleUser = id => dispatch => {
  dispatch({ type: GET_SINGLE_USER_START });
  return axiosWithAuth()
    .get(`/api/v1/users/${id}`)
    .then(res => {
      dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SINGLE_USER_FAILURE, error: err });
    });
};

export const updateUser = (id, changes) => dispatch => {
  dispatch({ type: UPDATE_USER_START });
  return axiosWithAuth()
    .put(`/api/v1/users/${id}`, changes)
    .then(res => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAILURE, error: err });
    });
};

// Projects Actions
export const getAllProjects = () => dispatch => {
  dispatch({ type: GET_ALL_PROJECTS_START });
  return axiosWithAuth()
    .get('/api/v1/projects')
    .then(res => {
      dispatch({ type: GET_ALL_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_PROJECTS_FAILURE, error: err });
    });
};

export const addProject = project => dispatch => {
  dispatch({ type: ADD_PROJECT_START });
  return axiosWithAuth()
    .post('/api/v1/projects', project)
    .then(res => {
      dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_PROJECT_FAILURE, error: err });
    });
};

export const getSingleProject = id => dispatch => {
  dispatch({ type: GET_SINGLE_PROJECT_START });
  return axiosWithAuth()
    .get(`/api/v1/projects/${id}`)
    .then(res => {
      dispatch({ type: GET_SINGLE_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SINGLE_PROJECT_FAILURE, error: err });
    });
};

export const updateProject = (id, changes) => dispatch => {
  dispatch({ type: UPDATE_PROJECT_START });
  return axiosWithAuth()
    .put(`/api/v1/projects/${id}`, changes)
    .then(res => {
      dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_PROJECT_FAILURE, error: err });
    });
};

export const deleteProject = id => dispatch => {
  dispatch({ type: DELETE_PROJECT_START });
  return axiosWithAuth()
    .delete(`/api/v1/projects/${id}`)
    .then(res => {
      dispatch({ type: DELETE_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_PROJECT_FAILURE, error: err });
    });
};

export const getProjectsByUser = id => dispatch => {
  dispatch({ type: GET_USERS_PROJECTS_START });
  return axiosWithAuth()
    .get(`/api/v1/projects/recent/${id}`)
    .then(res => {
      dispatch({ type: GET_USERS_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USERS_PROJECTS_FAILURE, payload: err });
    });
};

//Comments Actions
export const getProjectComments = projectId => dispatch => {
  dispatch({ type: GET_PROJECT_COMMENTS_START });
  return axiosWithAuth()
    .get(`/api/v1/comments/project/${projectId}`)
    .then(res => {
      dispatch({ type: GET_PROJECT_COMMENTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_PROJECT_COMMENTS_FAILURE, payload: err });
    });
};

export const getPhotoComments = photoId => dispatch => {
  dispatch({ type: GET_PHOTO_COMMENTS_START });
  return axiosWithAuth()
    .get(`/api/v1/comments/photo/${photoId}`)
    .then(res => {
      dispatch({ type: GET_PHOTO_COMMENTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_PHOTO_COMMENTS_FAILURE, payload: err });
    });
};

export const addProjectComment = comment => dispatch => {
  dispatch({ type: ADD_PROJECT_COMMENT_START });
  return axiosWithAuth()
    .post('/api/v1/comments/project', comment)
    .then(res => {
      dispatch({
        type: ADD_PROJECT_COMMENT_SUCCESS,
        payload: res.data.data[0]
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_PROJECT_COMMENT_FAILURE,
        payload: err.data.message
      });
    });
};

export const addPhotoComment = comment => dispatch => {
  dispatch({ type: ADD_PHOTO_COMMENT_START });
  return axiosWithAuth()
    .post('/api/v1/comments/photo', comment)
    .then(res => {
      dispatch({
        type: ADD_PHOTO_COMMENT_SUCCESS,
        payload: res.data.data[0]
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_PHOTO_COMMENT_FAILURE,
        payload: err.data.message
      });
    });
};

export const updateComment = (changes, id) => dispatch => {
  dispatch({ type: UPDATE_COMMENT_START });
  return axiosWithAuth()
    .put(`/api/v1/comments/${id}`, changes)
    .then(res => {
      dispatch({
        type: UPDATE_COMMENT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_COMMENT_FAILURE,
        payload: err.data.message
      });
    });
};

export const deleteComment = id => dispatch => {
  dispatch({ type: DELETE_COMMENT_START });
  return axiosWithAuth()
    .delete(`/api/v1/comments/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_COMMENT_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_COMMENT_FAILURE,
        payload: err.data.message
      });
    });
};

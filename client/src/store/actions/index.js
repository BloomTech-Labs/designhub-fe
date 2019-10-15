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

//Photos
export const GET_PROJECT_PHOTOS_START = 'GET_PROJECT_PHOTOS_START';
export const GET_PROJECT_PHOTOS_SUCCESS = 'GET_PROJECT_PHOTOS_SUCCESS';
export const GET_PROJECT_PHOTOS_FAILURE = 'GET_PROJECT_PHOTOS_FAILURE';
export const GET_SINGLE_PHOTO_START = 'GET_SINGLE_PHOTO_START';
export const GET_SINGLE_PHOTO_SUCCESS = 'GET_SINGLE_PHOTO_SUCCESS';
export const GET_SINGLE_PHOTO_FAILURE = 'GET_SINGLE_PHOTO_FAILURE';
export const ADD_PROJECT_PHOTO_START = 'ADD_PROJECT_PHOTO_START';
export const ADD_PROJECT_PHOTO_SUCCESS = 'ADD_PROJECT_PHOTO_SUCCESS';
export const ADD_PROJECT_PHOTO_FAILURE = 'ADD_PROJECT_PHOTO_FAILURE';
export const DELETE_PHOTO_START = 'DELETE_PHOTO_START';
export const DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS';
export const DELETE_PHOTO_FAILURE = 'DELETE_PHOTO_FAILURE';

//Followers
export const GET_FOLLOWERS_START = 'GET_FOLLOWERS_START';
export const GET_FOLLOWERS_SUCCESS = 'GET_FOLLOWERS_SUCCESS';
export const GET_FOLLOWERS_FAILURE = 'GET_FOLLOWERS_FAILURE';
export const GET_FOLLOWING_START = 'GET_FOLLOWING_START';
export const GET_FOLLOWING_SUCCESS = 'GET_FOLLOWING_SUCCESS';
export const GET_FOLLOWING_FAILURE = 'GET_FOLLOWING_FAILURE';
export const GET_FOLLOWERS_COUNT_START = 'GET_FOLLOWERS_COUNT_START';
export const GET_FOLLOWERS_COUNT_SUCCESS = 'GET_FOLLOWERS_COUNT_SUCCESS';
export const GET_FOLLOWERS_COUNT_FAILURE = 'GET_FOLLOWERS_COUNT_FAILURE';
export const GET_FOLLOWING_COUNT_START = 'GET_FOLLOWING_COUNT_START';
export const GET_FOLLOWING_COUNT_SUCCESS = 'GET_FOLLOWING_COUNT_SUCCESS';
export const GET_FOLLOWING_COUNT_FAILURE = 'GET_FOLLOWING_COUNT_FAILURE';
export const ADD_FOLLOW_START = 'ADD_FOLLOW_START';
export const ADD_FOLLOW_SUCCESS = 'ADD_FOLLOW_SUCCESS';
export const ADD_FOLLOW_FAILURE = 'ADD_FOLLOW_FAILURE';
export const DELETE_FOLLOW_START = 'DELETE_FOLLOW_START';
export const DELETE_FOLLOW_SUCCESS = 'DELETE_FOLLOW_SUCCESS';
export const DELETE_FOLLOW_FAILURE = 'DELETE_FOLLOW_FAILURE';
export const GET_IS_FOLLOWED_START = 'GET_IS_FOLLOWED_START';
export const GET_IS_FOLLOWED_SUCCESS = 'GET_IS_FOLLOWED_SUCCESS';
export const GET_IS_FOLLOWED_FAILURE = 'GET_IS_FOLLOWED_FAILURE';

//Stars
export const STAR_PROJECT_START = 'STAR_PROJECT_START';
export const STAR_PROJECT_SUCCESS = 'STAR_PROJECT_SUCCESS';
export const STAR_PROJECT_FAILURE = 'STAR_PROJECT_FAILURE';
export const UNSTAR_PROJECT_START = 'UNSTAR_PROJECT_START';
export const UNSTAR_PROJECT_SUCCESS = 'UNSTAR_PROJECT_SUCCESS';
export const UNSTAR_PROJECT_FAILURE = 'UNSTAR_PROJECT_FAILURE';
export const GET_STARRED_PROJECTS_START = 'GET_STARRED_PROJECTS_START';
export const GET_STARRED_PROJECTS_SUCCESS = 'GET_STARRED_PROJECTS_SUCCESS';
export const GET_STARRED_PROJECTS_FAILURE = 'GET_STARRED_PROJECTS_FAILURE';
export const GET_PROJECT_STAR_COUNT_START = 'GET_PROJECT_STAR_COUNT_START';
export const GET_PROJECT_STAR_COUNT_SUCCESS = 'GET_PROJECT_STAR_COUNT_SUCCESS';
export const GET_PROJECT_STAR_COUNT_FAILURE = 'GET_PROJECT_STAR_COUNT_FAILURE';
export const GET_STAR_STATUS_START = 'GET_STAR_STATUS_START';
export const GET_STAR_STATUS_SUCCESS = 'GET_STAR_STATUS_SUCCESS';
export const GET_STAR_STATUS_FAILURE = 'GET_STAR_STATUS_FAILURE';

//Heatmap
export const CREATE_HEATMAP_START = 'CREATE_HEATMAP_START';
export const CREATE_HEATMAP_SUCCESS = 'CREATE_HEATMAP_SUCCESS';
export const CREATE_HEATMAP_FAILURE = 'CREATE_HEATMAP_FAILURE';
export const GET_HEATMAP_START = 'GET_HEATMAP_START';
export const GET_HEATMAP_SUCCESS = 'GET_HEATMAP_SUCCESS';
export const GET_HEATMAP_FAILURE = 'GET_HEATMAP_FAILURE';
export const GET_ALL_CONTRIBS_START = 'GET_ALL_CONTRIBS_START';
export const GET_ALL_CONTRIBS_SUCCESS = 'GET_ALL_CONTRIBS_SUCCESS';
export const GET_ALL_CONTRIBS_FAILURE = 'GET_ALL_CONTRIBS_FAILURE';
export const GET_CONTRIBS_COUNT_START = 'GET_TOTAL_HEATMAP_CONTRIBS_START';
export const GET_CONTRIBS_COUNT_SUCCESS = 'GET_TOTAL_HEATMAP_CONTRIBS_SUCCESS';
export const GET_CONTRIBS_COUNT_FAILURE = 'GET_TOTAL_HEATMAP_CONTRIBS_FAILURE';
export const UPDATE_HEATMAP_START = 'UPDATE_HEATMAP_START';
export const UPDATE_HEATMAP_SUCCESS = 'UPDATE_HEATMAP_SUCCESS';
export const UPDATE_HEATMAP_FAILURE = 'UPDATE_HEATMAP_FAILURE';
export const DELETE_HEATMAP_START = 'DELETE_HEATMAP_START';
export const DELETE_HEATMAP_SUCCESS = 'DELETE_HEATMAP_SUCCESS';
export const DELETE_HEATMAP_FAILURE = 'DELETE_HEATMAP_FAILURE';

//Stars

//############# ACTIONS #############
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

export const getSingleUser = (id, theirId) => dispatch => {
  console.log('hello world from action');
  dispatch({ type: GET_SINGLE_USER_START });
  return axiosWithAuth()
    .get(`/api/v1/users/${id}`)
    .then(res => {
      dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: res.data[0] });
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
      return res;
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
      dispatch({ type: GET_SINGLE_PROJECT_SUCCESS, payload: res.data[0] });
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
      return true;
    })
    .catch(err => {
      dispatch({ type: UPDATE_PROJECT_FAILURE, error: err });
      return false;
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
      return res;
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
      return res;
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

//Photos Actions
export const getProjectPhotos = projectId => dispatch => {
  dispatch({ type: GET_PROJECT_PHOTOS_START });
  return axiosWithAuth()
    .get(`/api/v1/photo/projects/${projectId}`)
    .then(res => {
      dispatch({ type: GET_PROJECT_PHOTOS_SUCCESS, payload: res.data });
      return res;
    })
    .catch(err => {
      dispatch({ type: GET_PROJECT_PHOTOS_FAILURE, payload: err.data });
    });
};

export const getSinglePhoto = photoId => dispatch => {
  dispatch({ type: GET_SINGLE_PHOTO_START });
  return axiosWithAuth()
    .get(`/api/v1/photo/projects/one/${photoId}`)
    .then(res => {
      dispatch({ type: GET_SINGLE_PHOTO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SINGLE_PHOTO_FAILURE, payload: err.data });
    });
};

export const addPhoto = photo => dispatch => {
  dispatch({ type: ADD_PROJECT_PHOTO_START });
  return axiosWithAuth()
    .post('/api/v1/photo/projects', photo)
    .then(res => {
      dispatch({ type: ADD_PROJECT_PHOTO_SUCCESS });
      return res;
    })
    .catch(err => {
      dispatch({ type: ADD_PROJECT_PHOTO_FAILURE, payload: err.data });
    });
};

export const deletePhoto = photoId => dispatch => {
  dispatch({ type: DELETE_PHOTO_START });
  return axiosWithAuth()
    .delete(`/api/v1/photo/projects/${photoId}`)
    .then(res => {
      dispatch({ type: DELETE_PHOTO_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: DELETE_PHOTO_FAILURE, payload: err.data });
    });
};

//Followers Actions
export const getFollowers = userId => dispatch => {
  dispatch({ type: GET_FOLLOWERS_START });
  return axiosWithAuth()
    .get(`/api/v1/followers/followers/${userId}`)
    .then(res => {
      dispatch({ type: GET_FOLLOWERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_FOLLOWERS_FAILURE, payload: err.data });
    });
};

export const getFollowersCount = userId => dispatch => {
  dispatch({ type: GET_FOLLOWERS_COUNT_START });
  return axiosWithAuth()
    .get(`/api/v1/followers/count/followers/${userId}`)
    .then(res => {
      dispatch({
        type: GET_FOLLOWERS_COUNT_SUCCESS,
        payload: res.data[0].count
      });
    })
    .catch(err => {
      dispatch({ type: GET_FOLLOWERS_COUNT_FAILURE, payload: err.data });
    });
};

export const getFollowing = userId => dispatch => {
  dispatch({ type: GET_FOLLOWING_START });
  return axiosWithAuth()
    .get(`/api/v1/followers/following/${userId}`)
    .then(res => {
      dispatch({ type: GET_FOLLOWING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_FOLLOWING_FAILURE, payload: err.data });
    });
};

export const getFollowingCount = userId => dispatch => {
  dispatch({ type: GET_FOLLOWING_COUNT_START });
  return axiosWithAuth()
    .get(`/api/v1/followers/count/following/${userId}`)
    .then(res => {
      dispatch({
        type: GET_FOLLOWING_COUNT_SUCCESS,
        payload: res.data[0].count
      });
    })
    .catch(err => {
      dispatch({ type: GET_FOLLOWING_COUNT_FAILURE, payload: err.data });
    });
};

export const addFollow = followObject => dispatch => {
  dispatch({ type: ADD_FOLLOW_START });
  return axiosWithAuth()
    .post('/api/v1/followers', followObject)
    .then(res => {
      dispatch({
        type: ADD_FOLLOW_SUCCESS
      });
    })
    .catch(err => {
      dispatch({ type: ADD_FOLLOW_FAILURE, payload: err.data });
    });
};

export const deleteFollow = (myId, theirId) => dispatch => {
  dispatch({ type: DELETE_FOLLOW_START });
  return axiosWithAuth()
    .post(`/api/v1/followers/unfollow/${myId}`, theirId)
    .then(res => {
      dispatch({ type: DELETE_FOLLOW_SUCCESS, payload: res.data.message });
    })
    .catch(err => {
      dispatch({ type: DELETE_FOLLOW_FAILURE, payload: err.data });
    });
};

export const getIsFollowed = (myId, theirId) => dispatch => {
  dispatch({ type: GET_IS_FOLLOWED_START });
  return axiosWithAuth()
    .get(`/api/v1/followers/${myId}/${theirId}`)
    .then(res => {
      dispatch({ type: GET_IS_FOLLOWED_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_IS_FOLLOWED_FAILURE, payload: err.data });
    });
};

//Stars Actions
export const starProject = starObject => dispatch => {
  dispatch({ type: STAR_PROJECT_START });
  return axiosWithAuth()
    .post('/api/v1/star/', starObject)
    .then(res => {
      dispatch({ type: STAR_PROJECT_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: STAR_PROJECT_FAILURE, payload: err.data });
    });
};

export const unstarProject = (userId, projectId) => dispatch => {
  dispatch({ type: UNSTAR_PROJECT_START });
  return axiosWithAuth()
    .post(`/api/v1/star/unstar/${projectId}`, userId)
    .then(res => {
      dispatch({ type: UNSTAR_PROJECT_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: UNSTAR_PROJECT_FAILURE, payload: err.data });
    });
};

export const getStarredProjects = userId => dispatch => {
  dispatch({ type: GET_STARRED_PROJECTS_START });
  return axiosWithAuth()
    .get(`/api/v1/star/${userId}`)
    .then(res => {
      dispatch({ type: GET_STARRED_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_STARRED_PROJECTS_FAILURE, payload: err.data });
    });
};

export const getProjectStarCount = userId => dispatch => {
  dispatch({ type: GET_PROJECT_STAR_COUNT_START });
  return axiosWithAuth()
    .get(`/api/v1/star/count/${userId}`)
    .then(res => {
      dispatch({ type: GET_PROJECT_STAR_COUNT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_PROJECT_STAR_COUNT_FAILURE, payload: err.data });
    });
};

//Heatmap Actions
export const createHeatmap = userId => dispatch => {
  dispatch({ type: CREATE_HEATMAP_START });
  return axiosWithAuth()
    .post('/api/v1/heatmap', userId)
    .then(res => {
      dispatch({ type: CREATE_HEATMAP_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: CREATE_HEATMAP_FAILURE, payload: err.data.message });
    });
};

export const getHeatmapsFromUserId = userId => dispatch => {
  dispatch({ type: GET_HEATMAP_START });
  return axiosWithAuth()
    .get(`/api/v1/heatmap/${userId}`)
    .then(res => {
      dispatch({ type: GET_HEATMAP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_HEATMAP_FAILURE, payload: err.data.message });
    });
};

export const getAllContributionsFromUserId = userId => dispatch => {
  dispatch({ type: GET_ALL_CONTRIBS_START });
  return axiosWithAuth()
    .get(`/api/v1/heatmap/all/${userId}`)
    .then(res => {
      dispatch({ type: GET_ALL_CONTRIBS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_CONTRIBS_FAILURE, payload: err.data.message });
    });
};

export const getContributionsCount = userId => dispatch => {
  dispatch({ type: GET_CONTRIBS_COUNT_START });
  return axiosWithAuth()
    .get(`/api/v1/heatmap/count/${userId}`)
    .then(res => {
      dispatch({ type: GET_CONTRIBS_COUNT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_CONTRIBS_COUNT_FAILURE, payload: err.data.message });
    });
};

export const updateHeatmap = (changes, userId) => dispatch => {
  dispatch({ type: UPDATE_HEATMAP_START });
  return axiosWithAuth()
    .put(`/api/v1/heatmap/${userId}`, changes)
    .then(res => {
      dispatch({ type: UPDATE_HEATMAP_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: UPDATE_HEATMAP_FAILURE, payload: err.data.message });
    });
};

export const deleteHeatmap = id => dispatch => {
  dispatch({ type: DELETE_HEATMAP_START });
  return axiosWithAuth()
    .delete(`/api/v1/heatmap/${id}`)
    .then(res => {
      dispatch({ type: DELETE_HEATMAP_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: DELETE_HEATMAP_FAILURE, payload: err.data.message });
    });
};

export const getStarStatus = (userId, projectId) => dispatch => {
  dispatch({ type: GET_STAR_STATUS_START });
  return axiosWithAuth()
    .get(`/api/v1/star/status/${userId}/${projectId}`)
    .then(res => {
      console.log('getStarStatus', res.data.isStarred);

      dispatch({ type: GET_STAR_STATUS_SUCCESS, payload: res.data.isStarred });
    })
    .catch(err => {
      dispatch({ type: GET_STAR_STATUS_FAILURE, payload: err.message });
    });
};

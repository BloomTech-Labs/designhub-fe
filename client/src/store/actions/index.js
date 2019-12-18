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
export const GET_USER_BY_EMAIL_START = 'GET_USER_BY_EMAIL_START';
export const GET_USER_BY_EMAIL_SUCCESS = 'GET_USER_BY_EMAIL_SUCCESS';
export const GET_USER_BY_EMAIL_FAILURE = 'GET_USER_BY_EMAIL_FAILURE';

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

export const GET_RECENT_PROJECTS_START = 'GET_RECENT_PROJECTS_START';
export const GET_RECENT_PROJECTS_SUCCESS = 'GET_RECENT_PROJECTS_SUCCESS';
export const GET_RECENT_PROJECTS_FAILURE = 'GET_RECENT_PROJECTS_FAILURE';

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
export const FOLLOW_NOTIFICATION_START = 'FOLLOW_NOTIFICATION_START';
export const FOLLOW_NOTIFICATION_SUCCESS = 'FOLLOW_NOTIFICATION_SUCCESS';
export const FOLLOW_NOTIFICATION_FAILURE = 'FOLLOW_NOTIFICATION_FAILURE';

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

//project invites
export const GET_INVITES_BY_USER_START = "GET_INVITES_BY_USER_START";
export const GET_INVITES_BY_USER_SUCCESS = "GET_INVITES_BY_USER_SUCCESS";
export const GET_INVITES_BY_USER_FAILURE = "GET_INVITES_BY_USER_FAILURE";
export const GET_INVITE_START = "GET_INVITE_START";
export const GET_INVITE_SUCCESS = "GET_INVITE_SUCCESS";
export const GET_INVITE_FAILURE = "GET_INVITE_FAILURE";
export const GET_INVITES_BY_PROJECTID_START = "GET_INVITES_BY_PROJECTID_START";
export const GET_INVITES_BY_PROJECTID_SUCCESS = "GET_INVITES_BY_PROJECTID_SUCCESS";
export const GET_INVITES_BY_PROJECTID_FAILURE = "GET_INVITES_BY_PROJECTID_FAILURE";
export const CREATE_PROJECT_INVITE_START = "CREATE_PROJECT_INVITE_START";
export const CREATE_PROJECT_INVITE_SUCCESS = "CREATE_PROJECT_INVITE_SUCCESS";
export const CREATE_PROJECT_INVITE_FAILURE = "CREATE_PROJECT_INVITE_FAILURE";
export const ACCEPT_INVITE_START = "ACCEPT_INVITE_START";
export const ACCEPT_INVITE_SUCCESS = "ACCEPT_INVITE_SUCCESS";
export const ACCEPT_INVITE_FAILURE = "ACCEPT_INVITE_FAILURE";
export const UPDATE_INVITE_START = "UPDATE_INVITE_START";
export const UPDATE_INVITE_SUCCESS = "UPDATE_INVITE_SUCCESS";
export const UPDATE_INVITE_FAILURE = "UPDATE_INVITE_FAILURE";
export const DELETE_INVITE_START = "DELETE_INVITE_START";
export const DELETE_INVITE_SUCCESS = "DELETE_INVITE_SUCCESS";
export const DELETE_INVITE_FAILURE = "DELETE_INVITE_FAILURE";
export const GET_USERS_FROM_INVITES_START = 'GET_USERS_FROM_INVITES_START';
export const GET_USERS_FROM_INVITES_SUCCESS = 'GET_USERS_FROM_INVITES_SUCCESS';
export const GET_USERS_FROM_INVITES_FAILURE = 'GET_USERS_FROM_INVITES_FAILURE';

//project categories
export const GET_ALL_CATEGORY_NAMES_START = "GET_ALL_CATEGORY_NAMES_START";
export const GET_ALL_CATEGORY_NAMES_SUCCESS = "GET_ALL_CATEGORY_NAMES_SUCCESS";
export const GET_ALL_CATEGORY_NAMES_FAILURE = "GET_ALL_CATEGORY_NAMES_FAILURE";

export const GET_ASSIGNED_CATEGORIES_START = "GET_ASSIGNED_PROJECT_CATEGORIES_START";
export const GET_ASSIGNED_CATEGORIES_SUCCESS = "GET_ASSIGNED_PROJECT_CATEGORIES_SUCCESS";
export const GET_ASSIGNED_CATEGORIES_FAILURE = "GET_ASSIGNED_PROJECT_CATEGORIES_FAILURE";

export const ADD_CATEGORY_TO_PROJECT_START = "ADD_CATEGORY_TO_PROJECT_START";
export const ADD_CATEGORY_TO_PROJECT_SUCCESS = "ADD_CATEGORY_TO_PROJECT_SUCCESS";
export const ADD_CATEGORY_TO_PROJECT_FAILURE = "ADD_CATEGORY_TO_PROJECT_FAILURE";

export const GET_CATEGORIES_BY_USERID_START = "GET_CATEGORIES_BY_USERID_START";
export const GET_CATEGORIES_BY_USERID_SUCCESS = "GET_CATEGORIES_BY_USERID_SUCCESS";
export const GET_CATEGORIES_BY_USERID_FAILURE = "GET_CATEGORIES_BY_USERID_FAILURE";

export const GET_CATEGORY_BY_CATEGORYID_START = " GET_CATEGORY_BY_CATEGORYID_START";
export const  GET_CATEGORY_BY_CATEGORYID_SUCCESS = " GET_CATEGORY_BY_CATEGORYID_SUCCESS";
export const  GET_CATEGORY_BY_CATEGORYID_FAILURE = " GET_CATEGORY_BY_CATEGORYID_FAILURE";

export const GET_CATEGORIES_BY_PROJECTID_START = "GET_CATEGORIES_BY_PROJECTID_START";
export const GET_CATEGORIES_BY_PROJECTID_SUCCESS = "GET_CATEGORIES_BY_PROJECTID_SUCCESS";
export const GET_CATEGORIES_BY_PROJECTID_FAILURE = "GET_CATEGORIES_BY_PROJECTID_FAILURE";

export const DELETE_CATEGORY_FROM_PROJECT_START = "DELETE_CATEGORY_FROM_PROJECT_START";
export const DELETE_CATEGORY_FROM_PROJECT_SUCCESS = "DELETE_CATEGORY_FROM_PROJECT_SUCCESS";
export const DELETE_CATEGORY_FROM_PROJECT_FAILURE = "DELETE_CATEGORY_FROM_PROJECT_FAILURE";

export const GET_PROJECTS_BY_CATEGORYID_START = "GET_PROJECTS_BY_CATEGORYID_START";
export const GET_PROJECTS_BY_CATEGORYID_SUCCESS = "GET_PROJECTS_BY_CATEGORYID_SUCCESS";
export const GET_PROJECTS_BY_CATEGORYID_FAILURE = "GET_PROJECTS_BY_CATEGORYID_FAILURE";

export const UPDATE_PROJECT_CATEGORY_START = "UPDATE_PROJECT_CATEGORY_START";
export const UPDATE_PROJECT_CATEGORY_SUCCESS = "UPDATE_PROJECT_CATEGORY_SUCCESS";
export const UPDATE_PROJECT_CATEGORY_FAILURE = "UPDATE_PROJECT_CATEGORY_FAILURE";



//############# ACTIONS #############

//project categories

export const getAllCategoryNames = () => dispatch => {
  dispatch({ type: GET_ALL_CATEGORY_NAMES_START });
  return axiosWithAuth()
    .get('/api/v1/categories/all')
    .then(res => {
      dispatch({ type: GET_ALL_CATEGORY_NAMES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_CATEGORY_NAMES_FAILURE, error: err });
    });
};

export const getAssignedCategories = () => dispatch => {
  dispatch({ type: GET_ASSIGNED_CATEGORIES_START });
  return axiosWithAuth()
    .get('/api/v1/categories/projects/all')
    .then(res => {
      dispatch({ type: GET_ASSIGNED_CATEGORIES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ASSIGNED_CATEGORIES_FAILURE, error: err });
    });
}

export const addCategoryToProject = (category) => dispatch => {

  dispatch({ type: ADD_CATEGORY_TO_PROJECT_START });
  return axiosWithAuth()
    .post('/api/v1/categories/add', category)
    .then(res => {
      dispatch({ type: ADD_CATEGORY_TO_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_CATEGORY_TO_PROJECT_FAILURE, error: err });
    });

}

export const getCategoriesByUserId = (id) => dispatch => {
  dispatch({ type: GET_CATEGORIES_BY_USERID_START });
  return axiosWithAuth()
    .get(`/api/v1/categories/user/${id}`)
    .then(res => {
      dispatch({ type: GET_CATEGORIES_BY_USERID_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_CATEGORIES_BY_USERID_FAILURE, error: err });
    });
}

export const getCategoryByCategoryId = (id) => dispatch => {
  dispatch({ type: GET_CATEGORY_BY_CATEGORYID_START });
  return axiosWithAuth()
    .get(`/api/v1/categories/${id}`)
    .then(res => {
      dispatch({ type: GET_CATEGORY_BY_CATEGORYID_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_CATEGORY_BY_CATEGORYID_FAILURE, error: err });
    });
}

export const getCategoriesByProjectId = (id) => dispatch => {
  dispatch({ type: GET_CATEGORIES_BY_PROJECTID_START });
  return axiosWithAuth()
    .get(`/api/v1/categories/projects/${id}`)
    .then(res => {
      dispatch({ type: GET_CATEGORIES_BY_PROJECTID_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_CATEGORIES_BY_PROJECTID_FAILURE, error: err });
    });
}

export const deleteCategoryFromProject = (id) => dispatch => {
  dispatch({ type: DELETE_CATEGORY_FROM_PROJECT_START })
  return axiosWithAuth()
    .delete(`api/v1/categories/project/${id}`)
    .then(res => {
      dispatch({ type: DELETE_CATEGORY_FROM_PROJECT_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: DELETE_CATEGORY_FROM_PROJECT_FAILURE, payload: err.message })
    })
}

//update a project's assigned category by project_category id
export const updateProjectCategory = (id, changes) => dispatch => {
  dispatch({ type: UPDATE_PROJECT_CATEGORY_START })
  return axiosWithAuth()
    .put(`api/v1/categories/project/${id}`, changes)
    .then(res => {
      dispatch({ type: UPDATE_PROJECT_CATEGORY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: UPDATE_PROJECT_CATEGORY_FAILURE, payload: err.message })
    })
}

export const getProjectsByCategoryId = (id) => dispatch => {
  dispatch({ type: GET_PROJECTS_BY_CATEGORYID_START });
  return axiosWithAuth()
    .get(`/api/v1/categories/projects/category/${id}`)
    .then(res => {
      dispatch({ type: GET_PROJECTS_BY_CATEGORYID_SUCCESS, payload: res.data });
      console.log("projs by category in action creator", res.data);
    })
    .catch(err => {
      dispatch({ type: GET_PROJECTS_BY_CATEGORYID_FAILURE, error: err });
    });
}


//project invites
export const getInviteById = (id) => dispatch => {
  dispatch({ type: GET_INVITE_START })
  return axiosWithAuth()
    .get(`api/v1/projectInvites/invite/${id}`)
    .then(res => {
      dispatch({ type: GET_INVITE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_INVITE_FAILURE, payload: err.message })
    })
}

export const createProjectInvite = invite => dispatch => {
  dispatch({ type: CREATE_PROJECT_INVITE_START })
  return axiosWithAuth()
    .post('api/v1/projectInvites/create', invite)
    .then(res => {
      dispatch({ type: CREATE_PROJECT_INVITE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: CREATE_PROJECT_INVITE_FAILURE, payload: err.message })
    })
}

export const getInvitesByUser = () => dispatch => {
  dispatch({ type: GET_INVITES_BY_USER_START })
  return axiosWithAuth()
    .get('/api/v1/projectInvites')
    .then(res => {
      dispatch({ type: GET_INVITES_BY_USER_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_INVITES_BY_USER_FAILURE, payload: err.message })
    })
}

export const getInvitesByProjectId = (id) => dispatch => {
  dispatch({ type: GET_INVITES_BY_PROJECTID_START })
  return axiosWithAuth()
    .get(`/api/v1/projectInvites/${id}`)
    .then(res => {
      dispatch({ type: GET_INVITES_BY_PROJECTID_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_INVITES_BY_PROJECTID_FAILURE, payload: err.message })
    })
}

export const acceptInvite = (id) => dispatch => {
  dispatch({ type: ACCEPT_INVITE_START })
  return axiosWithAuth()
    .put(`/api/v1/projectInvites/accept/${id}`)
    .then(res => {
      dispatch({ type: ACCEPT_INVITE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ACCEPT_INVITE_FAILURE, payload: err.message })
    })
}

export const updateInvite = (id, changes) => dispatch => {
  dispatch({ type: UPDATE_INVITE_START })
  return axiosWithAuth()
    .put(`/api/v1/projectInvites/${id}`, changes)
    .then(res => {
      dispatch({ type: UPDATE_INVITE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: UPDATE_INVITE_FAILURE, payload: err.message })
    })
}

export const deleteInvite = (invite) => dispatch => {
  dispatch({ type: DELETE_INVITE_START })
  return axiosWithAuth()
    .delete(`/api/v1/projectInvites/${invite.id}`)
    .then(res => {
      dispatch({ type: DELETE_INVITE_SUCCESS, payload: invite.email })
    })
    .catch(err => {
      dispatch({ type: DELETE_INVITE_FAILURE, payload: err.message })
    })
}

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

// Users Actions
export const getUserByEmail = (email) => dispatch => {
  dispatch({ type: GET_USER_BY_EMAIL_START });
  return axiosWithAuth()
    .get(`/api/v1/users/mail/${email}`)
    .then(res => {
      dispatch({ type: GET_USER_BY_EMAIL_SUCCESS, payload: res.data[0] });
    })
    .catch(err => {
      dispatch({ type: GET_USER_BY_EMAIL_FAILURE, error: err });
    });
};


export const getSingleUser = (id, theirId) => dispatch => {
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

export const getUsersFromInvites = (invites) => dispatch => {
  dispatch({ type: GET_USERS_FROM_INVITES_START });
  if (invites.length === 0) {
    dispatch({ type: GET_USERS_FROM_INVITES_SUCCESS, payload: { lastOne: true } });
  }
  invites.forEach((invite, index) => {
    const lastOne = index === invites.length - 1;
    if (!invite.userId) {
      dispatch({ type: GET_USERS_FROM_INVITES_SUCCESS, payload: { user: { email: invite.email }, lastOne } });
    }
    else {
      axiosWithAuth()
        .get(`/api/v1/users/mail/${invite.email}`)
        .then(res => {
          dispatch({
            type: GET_USERS_FROM_INVITES_SUCCESS,
            payload: {
              user: res.data[0],
              lastOne
            }
          });
        })
        .catch(err => {
          dispatch({ type: GET_USERS_FROM_INVITES_FAILURE, payload: 'Failed to retrieve collaborators.' });
          return err;
        })
    }

  })
}

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
  // Temporary fix
  delete project.projectInvites;
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
      //assigns the error status code (401 or 404) returned from the server to payload
      dispatch({ type: GET_SINGLE_PROJECT_FAILURE, payload: err.response ? err.response.status : "An error occured retrieving that project" });
    });
};

export const updateProject = (id, changes) => dispatch => {
  dispatch({ type: UPDATE_PROJECT_START });
  // Deleting this property as it causes a 400 response
  delete changes.projectInvites;
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

//getRecentProjectByUserId - BE
export const getRecentProjectsByUser = id => dispatch => {
  dispatch({ type: GET_RECENT_PROJECTS_START });
  return axiosWithAuth()
    .get(`/api/v1/projects/recent/${id}`)
    .then(res => {
      dispatch({ type: GET_RECENT_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_RECENT_PROJECTS_FAILURE, payload: err });
    });
};

//getProjectByUserId
export const getProjectsByUser = id => dispatch => {
  dispatch({ type: GET_USERS_PROJECTS_START });
  return axiosWithAuth()
    .get(`/api/v1/projects/users/${id}`)
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
        payload: err.message
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
        payload: err.message
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
        payload: err.message
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
        payload: err.message
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
      dispatch({ type: GET_PROJECT_PHOTOS_FAILURE, payload: err.message });
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
      dispatch({ type: GET_SINGLE_PHOTO_FAILURE, payload: err.message });
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
      dispatch({ type: ADD_PROJECT_PHOTO_FAILURE, payload: err.message });
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
      dispatch({ type: DELETE_PHOTO_FAILURE, payload: err.message });
    });
};

//Followers Actions

export const followNotification = (
  followId,
  activeUser,
  theirId
) => dispatch => {
  dispatch({ type: FOLLOW_NOTIFICATION_START });
  return axiosWithAuth()
    .post('api/v1/invite/follow', {
      activeUsername: activeUser.username,
      invitedUserId: theirId,
      activeUserId: activeUser.id,
      followersId: followId,
      activeUserAvatar: activeUser.avatar,
      type: 'follow'
    })
    .then(res => {
      dispatch({ type: FOLLOW_NOTIFICATION_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: FOLLOW_NOTIFICATION_FAILURE, payload: err.message });
    });
};

export const getFollowers = userId => dispatch => {
  dispatch({ type: GET_FOLLOWERS_START });
  return axiosWithAuth()
    .get(`/api/v1/followers/followers/${userId}`)
    .then(res => {
      dispatch({ type: GET_FOLLOWERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_FOLLOWERS_FAILURE, payload: err.message });
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
      dispatch({ type: GET_FOLLOWERS_COUNT_FAILURE, payload: err.message });
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
      dispatch({ type: GET_FOLLOWING_FAILURE, payload: err.message });
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
      dispatch({ type: GET_FOLLOWING_COUNT_FAILURE, payload: err.message });
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
      return res;
    })
    .catch(err => {
      dispatch({ type: ADD_FOLLOW_FAILURE, payload: err.message });
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
      dispatch({ type: DELETE_FOLLOW_FAILURE, payload: err.message });
    });
};

export const getIsFollowed = (myId, theirId) => dispatch => {
  dispatch({ type: GET_IS_FOLLOWED_START });
  return axiosWithAuth()
    .get(`/api/v1/followers/${myId}/${theirId}`)
    .then(res => {
      dispatch({ type: GET_IS_FOLLOWED_SUCCESS, payload: res.data.isFollowed });
    })
    .catch(err => {
      dispatch({ type: GET_IS_FOLLOWED_FAILURE, payload: err.message });
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
      dispatch({ type: STAR_PROJECT_FAILURE, payload: err.message });
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
      dispatch({ type: UNSTAR_PROJECT_FAILURE, payload: err.message });
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
      dispatch({ type: GET_STARRED_PROJECTS_FAILURE, payload: err.message });
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
      dispatch({ type: GET_PROJECT_STAR_COUNT_FAILURE, payload: err.message });
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
      dispatch({ type: CREATE_HEATMAP_FAILURE, payload: err.message });
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
      dispatch({ type: GET_HEATMAP_FAILURE, payload: err.message });
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
      dispatch({ type: GET_ALL_CONTRIBS_FAILURE, payload: err.message });
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
      dispatch({ type: GET_CONTRIBS_COUNT_FAILURE, payload: err.message });
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
      dispatch({ type: UPDATE_HEATMAP_FAILURE, payload: err.message });
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
      dispatch({ type: DELETE_HEATMAP_FAILURE, payload: err.message });
    });
};

export const getStarStatus = (userId, projectId) => dispatch => {
  dispatch({ type: GET_STAR_STATUS_START });
  return axiosWithAuth()
    .get(`/api/v1/star/status/${userId}/${projectId}`)
    .then(res => {
      dispatch({ type: GET_STAR_STATUS_SUCCESS, payload: res.data.isStarred });
    })
    .catch(err => {
      dispatch({ type: GET_STAR_STATUS_FAILURE, payload: err.message });
    });
};

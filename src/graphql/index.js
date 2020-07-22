/*
  QUERIES
*/

export { default as GET_PROJECT_BY_ID_QUERY } from './queries/projects/project';
export { default as GET_ALL_PROJECTS_QUERY } from './queries/projects/projects';
export { default as GET_USER_BY_ID_QUERY } from './queries/users/user';
export { default as GET_ALL_USERS_QUERY } from './queries/users/users';

/*
MUTATIONS
*/

export { default as ADD_COMMENT_MUTATION } from './mutations/comments/addComments';
// export { default as ADD_PHOTO_COMMENT_MUTATION } from './mutations/comments/addPhotoComments';
export { default as ADD_PROJECT_MUTATION } from './mutations/projects/addProject';
export { default as ADD_PROJECT_PHOTO_MUTATION } from './mutations/projects/addProjectPhoto';
export { default as ADD_USER_MUTATION } from './mutations/users/addUser';
// export { default as ADD_CATEGORY_MUTATION } from './mutations/categories/addCategory';
// export { default as ADD_HEATMAP_MUTATION } from './mutations/heatmap/addHeatmap';
// export { default as ADD_INVITE_MUTATION } from './mutations/invites/addInvite';
// export { default as ADD_INVITE_COMMENTS_QUERY } from './mutations/invites/addInviteComments';
// export { default as ADD_INVITE_FOLLOW_MUTATION } from './mutations/invites/addInviteFollow';
// export { default as ADD_INVITE_STARED_MUTATION } from './mutations/invites/addInviteStarred';
export { default as ADD_FOLLOWER_MUTATION } from './mutations/users/addFollower';
// export { default as ADD_STARED_MUTATION } from './mutations/users/addStarred';
// export { default as ADD_USER_RESEARCH_MUTATION } from './mutations/users/addUserResearch';
// export { default as ADD_USER_RESEARCHING_MUTATION } from './mutations/users/addUserResearching';
// export { default as UPDATE_CATEGORY_MUTATION } from './mutations/categories/updateCategory';
// export { default as UPDATE_COMMENT_MUTATION } from './mutations/comments/updateComments';
// export { default as UPDATE_PHOTO_COMMENT_MUTATION } from './mutations/comments/updatePhotoComments';
export { default as UPDATE_PROJECT_MUTATION } from './mutations/projects/updateProject';
export { default as UPDATE_USER_MUTATION } from './mutations/users/updateUser';
// export { default as UPDATE_INVITE_MUTATION } from './mutations/invites/updateInvites';
// export { default as UPDATE_PROJECT_INVITE_MUTATION } from './mutations/invites/updateProjectInvite';
// export { default as UPDATE_PROJECT_INVITES_MUTATION } from './mutations/invites/updateProjectInvites';
export { default as UPDATE_PROJECT_PHOTO_MUTATION } from './mutations/projects/updateProjectPhoto';
// export { default as DELETE_HEATMAP_MUTATION } from './mutations/heatmap/deleteHeatmap';
// export { default as DELETE_PHOTO_COMMENT_MUTATION } from './mutations/comments/deletePhotoComments';
export { default as DELETE_PROJECT_PHOTO_MUTATION } from './mutations/projects/deleteProjectPhoto';
// export { default as DELETE_USER_RESEARCH_MUTATION } from './mutations/users/deleteUserResearch';
// export { default as DELETE_STARED_MUTATION } from './mutations/users/deleteStarred';
// export { default as DELETE_PROJECT_INVITE_MUTATION } from './mutations/invites/deleteProjectInvite';
// export { default as DELETE_CATEGORY_MUTATION } from './mutations/categories/deleteCategory';
export { default as DELETE_FOLLOWER_MUTATION } from './mutations/users/deleteFollower';
export { default as DELETE_PROJECT_MUTATION } from './mutations/projects/deleteProject';
// export { default as DELETE_INVITE_MUTATION } from './mutations/invites/deleteInvite';
export { default as DELETE_COMMENTS_MUTATION } from './mutations/comments/deleteComments';
export { default as DELETE_USER_MUTATION } from './mutations/users/deleteUser';
export { default as SEARCH_MUTATION } from './mutations/users/search';

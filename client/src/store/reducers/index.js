import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { projectsReducer } from './projectsReducer';
import { photosReducer } from './photosReducer';
import { teamsReducer } from './teamsReducer';
import { followersReducer } from './followersReducer';
import { commentsReducer } from './commentsReducer';
import { starsReducer } from './starsReducer';
import { invitesReducer } from './invitesReducer';
import { researchReducer } from './researchReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  teams: teamsReducer,
  photos: photosReducer,
  followers: followersReducer,
  comments: commentsReducer,
  stars: starsReducer,
  invites: invitesReducer,
  research: researchReducer
});

export default rootReducer;

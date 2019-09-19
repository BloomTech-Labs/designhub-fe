import { combineReducers } from 'redux';

import { usersReducer } from './usersReducer.js';
import { projectsReducer } from './projectsReducer.js';
import { teamsReducer } from './teamsReducer.js';
import { commentsReducer } from './commentsReducer.js';

const rootReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  teams: teamsReducer,
  comments: commentsReducer
});

export default rootReducer;

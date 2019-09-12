import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { projectsReducer } from './projectsReducer';
import { teamsReducer } from './teamsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  teams: teamsReducer
});

export default rootReducer;

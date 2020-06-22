import React, { useEffect } from 'react';

import './App.scss';

import { Route } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';

import Explore from './views/Explore';
import CreateProject from './views/CreateProject';
import Profile from './views/Profile';
import Onboarding from './views/Onboarding';
import LandingPage from './common/LandingPage';
import Project from './views/Project';
import Settings from './views/Settings';
import Search from './views/Search';
import Notifications from './views/Notifications';

import { ADD_USER_MUTATION, GET_USER_BY_ID_QUERY } from './graphql/index';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useAuth0 } from './utilities/auth-spa.js';

export default function App() {
  const { user } = useAuth0();

  const { data, loading } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: { id: user?.sub },
  });
  const [addUser] = useMutation(ADD_USER_MUTATION);
  console.log('GET_USER_DATA', data);

  useEffect(() => {
    addUser({
      variables: {
        data: {
          id: user?.sub,
          email: user?.email,
          avatar: user?.picture,
          // username: user?.nickname,
        },
      },
      refetchQueries: [{ query: GET_USER_BY_ID_QUERY }],
    });
    console.log('AUTHUSER', user);
  }, [user, data]);
  return (
    <>
      <div className="app-wrapper">
        <main className="workspace">
          <Route exact path="/" component={Explore} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/profile/:username" component={Profile} />
          <Route path="/project/:id" component={Project} />
          <Route path="/search" component={Search} />
          <Route path="/onboarding" component={Onboarding} />
          <PrivateRoute path="/notifications" component={Notifications} />
          <PrivateRoute path="/create-project" component={CreateProject} />
          <PrivateRoute path="/settings" component={Settings} />
        </main>
      </div>
    </>
  );
}

import React, { useEffect, Suspense } from 'react';

import './App.scss';

import { Route } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import { useHistory } from 'react-router';
import Explore from './views/Explore';
import CreateProject from './views/CreateProject';
import Profile from './views/Profile';
import Onboarding from './views/Onboarding';
import LandingPage from './common/LandingPage';
import Project from './views/Project';
import Settings from './views/Settings';
import Search from './views/Search';
import Notifications from './views/Notifications';
import Loading from './common/Loading';
import Callback from './common/Callback';

import {
  ADD_USER_MUTATION,
  GET_USER_BY_ID_QUERY,
  GET_ALL_PROJECTS_QUERY,
  GET_ALL_USERS_QUERY,
} from './graphql/index';
import { useMutation, useQuery } from '@apollo/react-hooks';

import { useAuth0 } from './utilities/auth-spa.js';

export default function App() {
  /*  USER STATE   */

  const { user, loading } = useAuth0();
  const history = useHistory();
  const { data: userData, loading: gqlLoading } = useQuery(
    GET_USER_BY_ID_QUERY,
    {
      variables: { id: user?.sub },
    }
  );
  //console.log('GET_USER_DATA_GQL', userData);

  const { data: allUsers } = useQuery(GET_ALL_USERS_QUERY);

  const [addUser] = useMutation(ADD_USER_MUTATION);

  /*   PROJECT STATE   */
  const { data: allProjects } = useQuery(GET_ALL_PROJECTS_QUERY);

  useEffect(() => {
    addUser({
      variables: {
        data: {
          id: user?.sub,
          email: user?.email,
          avatar: user?.picture,
          // username: is not included in adding user to DB, the null username is used to send the new user to /onboarding from ./Loginbar
        },
      },

      refetchQueries: [{ query: GET_USER_BY_ID_QUERY, variables: {id: user?.sub} }],
    });
  }, [loading, gqlLoading, user, addUser]);


  useEffect(() => {
    if (userData?.user?.username === null) return history.push('/onboarding');
    // console.log('EFFECT USER', data?.user?.username)
    //console.log('AUTH0USER', user);
  }, [loading, gqlLoading, user, userData, history]);

  return (
    <>
      <div className="app-wrapper">
        <Suspense fallback={<Loading />}>
          <main className="workspace">
            <Route
              exact
              path="/"
              component={Explore}
              allUsers={allUsers}
              allProjects={allProjects}
            />
            <Route path="/landing" component={LandingPage} />
            <Route path="/profile/:username" component={Profile} />
            <Route
              path="/project/:id"
              component={Project}
              allUsers={allUsers}
              allProjects={allProjects}
            />
            <Route path="/search" component={Search} />
            <Route path="/onboarding" component={Onboarding} />
            <Route
              exact
              path="/callback"
              render={() => <Callback userData={userData} />}
            />
            <PrivateRoute path="/notifications" component={Notifications} />
            <PrivateRoute path="/create-project" component={CreateProject} />
            <PrivateRoute
              path="/settings"
              component={() => <Settings activeUser={userData?.user} />}
            />
            {/* <PrivateRoute exact path="/settings/privacy" component={Privacy} /> */}
          </main>
        </Suspense>
      </div>
    </>
  );
}

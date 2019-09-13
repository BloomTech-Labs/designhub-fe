import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from './auth-wrapper.js';
import FakeProfile from './components/FakeProfile.js';
import Heatmap from './components/Heatmap.js';
import Navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute.js';
import UserProfile_LI from './components/UserProfile_LI';
import './App.scss';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/profile" component={UserProfile_LI} />
        <PrivateRoute exact path="/fake-profile" component={FakeProfile} />
        <Route exact path="/heatmap" component={Heatmap} />
      </Switch>
    </div>
  );
}

export default App;

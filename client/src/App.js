import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import UserProfile_LI from './components/UserProfile_LI';

function App() {
  return (
    <div className="App">
      <Route exact path="/profile" component={UserProfile_LI} />
    </div>
  );
}

export default App;

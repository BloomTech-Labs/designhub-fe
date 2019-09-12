import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import UserProfile_LI from './components/UserProfile_LI';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/profile" component={UserProfile_LI} />
    </div>
  );
}

export default App;

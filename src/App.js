import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import LandingPage from '../src/views/landing-page';
import Auth from "./views/auth";

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route 
        path="/"
        exact
        component={LandingPage}/>

        <Route 
        path="/auth"
        component={Auth}/>

      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ServerBurnUp from './components/ServerBurnUp';
import ServerSchedule from './components/ServerSchedule';
import ApplicationsBurnUp from './components/ApplicationsBurnUp'
import AppSchedule from './components/AppSchedule';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ServerBurnUp />
            <ServerSchedule />
          </Route>
          <Route exact path='/apps'>
            <ApplicationsBurnUp />
            <AppSchedule />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

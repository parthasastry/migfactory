import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ServerBurnUp from './components/ServerBurnUp';
import ServerSchedule from './components/ServerSchedule';
import ApplicationsBurnUp from './components/ApplicationsBurnUp'
import AppSchedule from './components/AppSchedule';
import NavBar from './components/NavBar';
import About from './components/About';
import Contacts from './components/Contacts';
import Inventory from './components/Inventory';

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
          <Route exact path='/inventory'>
            <Inventory />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contacts'>
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

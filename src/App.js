import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ServerDashboard from './components/ServerDashboard';
import ServerSchedule from './components/ServerSchedule';

function App() {
  return (
    <div className="App">
        <h1>Dashboard</h1>
        <ServerDashboard />
        <div class="ui divider"></div>
        <ServerSchedule />
    </div>
  );
}

export default App;

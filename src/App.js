

import React from 'react';

import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import AppPage from './pages/AppPage';

function App() {
  return (
    <Router>
  <Route exact path="/" component={Home}/>
  <Route exact path='/app' component={AppPage}/>
  </Router>
  );
}

export default App;


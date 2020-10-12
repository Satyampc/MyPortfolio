import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './components/';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./components/Resume";
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/portfolio' component={Home}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/portF' component={Portfolio}/>
      <Route path='/contacts' component={Contacts}/>
    </>
  );
}

export default App;

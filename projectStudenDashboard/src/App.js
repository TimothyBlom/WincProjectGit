import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './Components/Home';
import Evelyn from './Components/Evelyn'
import Aranka from './Components/Aranka'
import Navigation from './Components/Navigation'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route exact path='/' component={Home}/>
        <Route exact path='/Evelyn' component={Evelyn}/>
        <Route exact path='/Aranka' component={Aranka}/>
      </BrowserRouter>
    );
  }
}
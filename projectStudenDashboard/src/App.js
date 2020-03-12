import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from './Components/Navigation'
import Home from './Components/Home';
import Evelyn from './Students/Evelyn'
import Aranka from './Students/Aranka'
import Floris from './Students/Floris'
import Hector from './Students/Hector'
import Martina from './Students/Martina'
import Maurits from './Students/Maurits'
import Rahima from './Students/Rahima'
import Sandra from './Students/Sandra'
import Storm from './Students/Storm'
import Wietske from './Students/Wietske'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route exact path='/' component={Home}/>
        <Route exact path='/Aranka' component={Aranka}/>
        <Route exact path='/Evelyn' component={Evelyn}/>
        <Route exact path='/Floris' component={Floris}/>
        <Route exact path='/Hector' component={Hector}/>
        <Route exact path='/Martina' component={Martina}/>
        <Route exact path='/Maurits' component={Maurits}/>
        <Route exact path='/Rahima' component={Rahima}/>
        <Route exact path='/Sandra' component={Sandra}/>
        <Route exact path='/Storm' component={Storm}/>
        <Route exact path='/Wietske' component={Wietske}/>
      </BrowserRouter>
    );
  }
}
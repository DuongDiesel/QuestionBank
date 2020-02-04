import React from 'react';
import logo from './logo.svg';
import './App.css';
import {firebaseQuestionBank} from './firebaseConnect'
import * as firebase from "firebase"
import { Component } from 'react';
import Admin from './Page/Admin.js';
import Guest from './Page/Guest.js';
import Home from './Page/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  constructor(props){
    super(props);
    this.state ={}
  }

  addData = (item) => {
    firebaseQuestionBank.push(item)
  }

  render(){
    //console.log(firebaseConnect);  
    
  return (
    <Router>  
      <div>    
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/guest" component={Guest} />
        <Route exact path="/home" component={Home} />
      </div>                 
    </Router>
    );
  }
}
export default App;

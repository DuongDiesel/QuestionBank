import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './../Component/Header/Header.js';
import adminApp from './../Component/Admin/adminApp';
  
export default class DieuhuongURL extends Component {
    render() {
        return (            
            <Router>  
            <div>    
            <Route exact path="/admin" component={adminApp} />
            </div>                 
          </Router>
          
        );
    }
}

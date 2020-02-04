import React, { Component } from 'react'
import logo from './../logo.svg';
import TopMenu from './../Component/TopMenu/TopMenu.js';
import Header from './../Component/Header/Header.js';
import Content from './../Component/Content/Content.js';
import Footer from './../Component/Footer/Footer';
import {firebaseQuestionBank} from './../firebaseConnect'
import * as firebase from "firebase"
import Tuluan from './../Component/Tuluan/tuluan';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Tracnghiem from '../Component/TracNghiem/Tracnghiem';

export default class Guest extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <TopMenu/>
                    <Header/>
                    <div className="container">
                        <div className="row pt-5">
                        
                        <Tuluan getData={(item) => this.addData(item)}/>
                        <Tracnghiem getData={(item) => this.addData(item)}/>
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
        )
    }
}

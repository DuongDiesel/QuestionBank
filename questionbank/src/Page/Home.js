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


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <TopMenu/>
                    <Header/>
                    <div className="container">
                        <div className="row pt-5">
                        <Content tieude="Tin 1" vitri1="order-lg-2" image="./img/01.jpg" noidung="noi dung tin 1"/>                        
                      
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
        )
    }
}

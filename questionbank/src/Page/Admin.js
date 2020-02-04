import React, { Component } from 'react'
import logo from './../logo.svg';
import TopMenu from './../Component/TopMenu/TopMenu.js';
import Header from './../Component/Header/Header.js';
import Content from './../Component/Content/Content.js';
import Footer from './../Component/Footer/Footer';
import {firebaseQuestionBank} from './../firebaseConnect'
import * as firebase from "firebase"
import Tuluan from './../Component/Tuluan/tuluan';
import Search from '../Component/SearchBar/Search';
import UserDataTable from '../Component/UserDataTable/UserDataTable';
import AddUser from '../Component/AddUser/AddUser'
export default class Admin extends Component {
    render() {
        return (
            <div>
            <div className="App">
                <TopMenu/>
                <Header/>
                <div className="container">
                    <div className="row">                    
                        <Search/>
                        <UserDataTable/>
                        <AddUser/>
                    </div>
                </div>

                <Footer/>
            </div>
        </div>
        )
    }
}

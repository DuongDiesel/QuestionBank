import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu.js';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Content.js';
import Footer from './Component/Footer/Footer';
import {firebaseQuestionBank} from './firebaseConnect'
import * as firebase from "firebase"
import { Component } from 'react';
import Tuluan from './Component/Tuluan/tuluan';

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
    <div className="App">
      <TopMenu/>
      <Header/>
      <div className="container">
        <div className="row pt-5">
          <Content tieude="Tin 1" vitri1="order-lg-2" image="./img/01.jpg" noidung="noi dung tin 1"/>
          <Content tieude="Tin 2" image="./img/02.jpg" noidung="noi dung tin 1" />
          <Content tieude="Tin 3" vitri1="order-lg-2" image="./img/03.jpg" noidung="noi dung tin 1" />
          <Tuluan getData={(item) => this.addData(item)}/>
        
        </div>
      </div>

     <Footer/>
    </div>
    );
  }
}
export default App;

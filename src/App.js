import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'


import './App.css';
import   './components/back/sidebar.css'


import SideBar from './components/back/sideBar'
import Routes from './components/back/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}  />
        <Routes/>
        
      </BrowserRouter>
        
      </div>
    );
  }
}

export default App;

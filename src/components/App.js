import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import store from "../index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import PrivateRoute from "../components/private-route/PrivateRoute";
import Dashboard from "../components/back/dashboard";
import { Provider } from "react-redux"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
        <BrowserRouter>
     <Routes/>
     
     </BrowserRouter>
     </div>
    );
  }
}

export default App;

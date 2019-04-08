import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
// insaf
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

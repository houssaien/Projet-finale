import React, { Component } from 'react';
import SideBar from './sideBar';
class Dashboard extends Component {
    state = {  }
    render() { 
        return ( <div>
             <SideBar/>
            <h1>Hello Admin</h1>
        </div> );
    }
}
 
export default Dashboard;
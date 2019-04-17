import React, { Component } from 'react';


import './user-management.css'
import ListDon from './listeDon';
import SideBar from './sideBar';


class DonManagement extends Component {
    state = {  }
    render() { 
        return (<div> 
            <SideBar/>
            
           
          <ListDon/>
          </div>);
    }
}
 
export default DonManagement;
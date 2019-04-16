import React, { Component } from 'react';


import './user-management.css'
import SideBar from './sideBar';
import ListService from './liste-service'


class ServiceManagement extends Component {
    state = {  }
    render() { 
        return (<div> 
            <SideBar/>
            
           
          <ListService/>
          </div>);
    }
}
 
export default ServiceManagement;
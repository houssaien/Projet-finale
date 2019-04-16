import React, { Component } from 'react';


import './user-management.css'
import SideBar from './sideBar';
import ListEvents  from './liste-service'


class EventManagement extends Component {
    state = {  }
    render() { 
        return (<div> 
            <SideBar/>
            
           
          <ListEvents />
          </div>);
    }
}
 
export default EventManagement;
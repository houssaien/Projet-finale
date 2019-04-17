import React, { Component } from 'react';
import { MDBBtn, MDBBtnGroup } from "mdbreact";
import {Link} from 'react-router-dom'

import './user-management.css'
import ListeUser from './ListeUser';
import SideBar from './sideBar';


class UserManagement extends Component {
    state = {  }
    render() { 
        return (<div> 
            <SideBar/>
            
            
            {/* <MDBBtnGroup>
           <Link to='./add-user'> <MDBBtn color="light" size="lg" className="management-user">
            <i className="fas fa-user-check  user-admin"></i>
            <br/>
            Add user
            </MDBBtn>
            </Link>
            <Link to='./edit-user'> <MDBBtn color="light" size="lg" className="management-user">
            <i className="fas fa-user-edit  user-admin"></i>
            <br/>
            Edit user
            </MDBBtn>
            </Link>
            
            
          </MDBBtnGroup>  */}
          <ListeUser/>
          </div>);
    }
}
 
export default UserManagement;
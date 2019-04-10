import React, { Component } from 'react';
import { MDBBtn, MDBBtnGroup } from "mdbreact";
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import './user-management.css'
import ListeUser from './ListeUser';


class UserManagement extends Component {
    state = {  }
    render() { 
        return (<div> 
            <MDBBtnGroup>
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
            
            
          </MDBBtnGroup> 
          <ListeUser/>
          </div>);
    }
}
 
export default UserManagement;
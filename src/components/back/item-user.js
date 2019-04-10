import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';


import './formuser.css'

class ItemUser extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    const {item}=this.props

  return (

    <MDBTable striped className="Table-user" >
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Location</th>
          <th>Delete</th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.location}</td>
          <td><i class="fas fa-times-circle delete"></i></td>
        </tr>
       
      </MDBTableBody>
    </MDBTable>
  );
}
}
export default ItemUser;
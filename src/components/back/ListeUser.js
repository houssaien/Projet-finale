import React, { Component } from 'react';
import {connect} from 'react-redux'
import { MDBTable,  MDBTableHead } from 'mdbreact';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import ItemUser from './item-user'
import './user-management.css'
class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {users}=this.props
        return ( 
            <MDBContainer>
      <MDBRow>
      <MDBCol size="12"  sm="6" lg="8" >
            <div className="ListeUsers">
                <MDBTable  className="Table-user" >
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
      </MDBTable>

        <div className='liste-user'>
        <tr><td>
        {
            users.map((el,index)=><ItemUser item={el} key={index} id={index}/>)
        }
        </td></tr>
         </div>         
         </div> 
         </MDBCol>
         </MDBRow>
         </MDBContainer>
        );
    }
} 

const mapStateToProps=(state)=>
{  return {
    users:state.reducerusers
}
}
 
export default connect(mapStateToProps)(ListUser);
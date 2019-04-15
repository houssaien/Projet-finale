import React, { Component } from 'react';
import { MDBTable, MDBTableBody} from 'mdbreact';



import './formuser.css'

class ItemUser extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    const {item}=this.props

  return (
<div>

    <MDBTable className="Table-user" >
     
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
    </div>
  );
}
}
export default ItemUser;
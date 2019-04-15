import React, { Component } from 'react';
import { Table } from 'reactstrap';



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

     <Table striped>
     
     <tbody>
        <tr>
          <td>1</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.location}</td>
          <td><i class="fas fa-times-circle delete"></i></td>
        </tr>
<<<<<<< HEAD
       
      </tbody>
   </Table>
=======
       </MDBTableBody>
      
    </MDBTable>
>>>>>>> origin/insaf
    </div>
  );
}
}
export default ItemUser;
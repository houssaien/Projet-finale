import React, { Component } from 'react';
import { MDBTable, MDBTableBody} from 'mdbreact';



import './formuser.css'

class ItemBien extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    const {item}=this.props

  return (
<div>

<tbody>
        
          
     

      
          <td>1</td>
         
          <td>{item.title}</td>
          <td>{item.description}</td>
          <th>{item.date}</th>
          <th>{item.location}</th>
          <th>{item.imageUrl}</th>
          
       
          
          </tbody>
 
    </div>
  );
}
}
export default ItemBien;
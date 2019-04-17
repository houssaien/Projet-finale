import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import { Button, Table } from 'reactstrap';
import {Link} from 'react-router-dom'
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
      
<Table responsive>       
      <thead > 
                <tr >
               
        <th className='col-lg-2'>{item._id}</th>
        <th className='col-lg-2'>{item.name}</th>
        <th className='col-lg-2'>{item.email}</th>
                                      
                 
        <th className='col-lg-4'>
                   

                    <Link to={`/detail-user/${item._id}`}>
            <Button color="warning">Détail</Button>
            </Link>

            

            
                  </th>

                    
                </tr>
              
                </thead>
       
     
       </Table>
         
         
 
    </div>
  );
}
}

export default ItemUser;
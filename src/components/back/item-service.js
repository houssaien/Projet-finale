import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import { Button, Table } from 'reactstrap';
import {Link} from 'react-router-dom'
import './formuser.css'

class ItemService extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    deleteService=()=>
    {  const {item} = this.props
    axios.delete(`/delete-service/${item._id}`)   
  .then(()=>this.props.deleteServiceReducer(item._id)) 
  .catch((err)=>alert(err)) 
    }
    render() { 
    const {item}=this.props

  return (
<div>
      
<Table responsive>       
      <thead > 
                <tr >
               
        <th className='col-lg-2'>{item._id}</th>
        <th className='col-lg-2'>{item.title}</th>
        <th className='col-lg-2'>{item.location}</th>
                                      
                 
        <th className='col-lg-6'>
                   

                    <Link to={`/detail-Service/${item._id}`}>
            <Button color="warning">Détail</Button>
            </Link>

            <Link to={`/editservice/${item._id}`}>
            <Button color="info">Modifier</Button>
            </Link>

            <Button color="danger"  onClick={this.deleteService}>Supprimer</Button>{' '}
                  </th>

                    
                </tr>
              
                </thead>
       
     
       </Table>
         
         
 
    </div>
  );
}
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteServiceReducer:_id=>
        {
            dispatch({
                type:'REMOVE_SERVICE',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(ItemService);
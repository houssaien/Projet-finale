import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import { Button, Table } from 'reactstrap';
import {Link} from 'react-router-dom'
import './formuser.css'

class ItemEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    deleteEvent=()=>
    {  const {item} = this.props
    axios.delete(`/delete-event/${item._id}`)   
  .then(()=>this.props.deleteEventReducer(item._id)) 
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
                   

                    <Link to={`/detail-event/${item._id}`}>
            <Button color="warning">Détail</Button>
            </Link>

            <Link to={`/edit-event/${item._id}`}>
            <Button color="info">Modifier</Button>
            </Link>

            <Button color="danger"  onClick={this.deleteEvent}>Supprimer</Button>{' '}
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
        deleteEventReducer:_id=>
        {
            dispatch({
                type:'REMOVE_EVENT',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(ItemEvent);
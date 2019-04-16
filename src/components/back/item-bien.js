import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import  { Fragment } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Button, Table } from 'reactstrap';
import {Link} from 'react-router-dom'
import './formuser.css'

class ItemBien extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    deleteBien=()=>
    {  const {item} = this.props
    axios.delete(`/delete-bien/${item._id}`)   
  .then(()=>this.props.deleteBienReducer(item._id)) 
  .catch((err)=>alert(err)) 
    }
    render() { 
    const {item}=this.props

  return (
<div>
 

        
          
     
<Table responsive>       
      <thead >
      



                
                <tr >
               
        <th className='col-lg-2'>
        
        
        {item._id}</th>
        <th className='col-lg-2'>{item.title}</th>
        <th className='col-lg-2'>{item.location}</th>
                                      
                 
        <th className='col-lg-6'>
                   

                    <Link to={`/detail-bien/${item._id}`}>
            <Button color="warning">Détail</Button>
            </Link>

            <Link to={`/editbien/${item._id}`}>
            <Button color="info">Modifier</Button>
            </Link>

            <Button color="danger"  onClick={this.deleteBien}>Supprimer</Button>{' '}
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
        deleteBienReducer:_id=>
        {
            dispatch({
                type:'REMOVE_BIEN',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(ItemBien);
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
    const {item,num}=this.props

  return (
<div>
 

        
          
     
<Table responsive>       
      <thead >
      



                
                <tr >
               
        <th className='col-lg-2'>
        
        
        {num}</th>
        <th className='col-lg-2'>{item.title}</th>
        <th className='col-lg-2'>{item.Categbien}</th>
        <th className='col-lg-2'>{item.confirmation === "en attente"?
          
          <Button color="danger" size="sm" outline>
          {item.confirmation}</Button>
      
      
        :<Button color="success" size="sm" outline>{item.confirmation}</Button>
      }
        </th>                  
                 
        <th className='col-lg-4'>
                   

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
import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import  { Fragment } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Button, Table } from 'reactstrap';
import {Link} from 'react-router-dom'
import './formuser.css'


class ItemDon extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    deleteDon=()=>
    {  const {item} = this.props
    axios.delete(`/delete-dons/${item._id}`)   
  .then(()=>this.props.deleteDonReducer(item._id)) 
  .catch((err)=>alert(err)) 
    }
    render() { 
      const {item,num}=this.props

  return (
<div>
 

        
          
     
<Table responsive>       
      <thead >
      



                
                <tr >
               
        <th className='col-lg-2'>{num}</th>
        <th className='col-lg-2'>{item.title}</th>
        <th className='col-lg-2'>{item.location}</th>
        <th className='col-lg-2'>{item.confirmation === "en attente"?
          
          <Button color="danger" size="sm" outline>
          {item.confirmation}</Button>
      
      
        :<Button color="success" size="sm" outline>{item.confirmation}</Button>
      }
        </th>                            
                 
        <th className='col-lg-4'>
                   

                    <Link to={`/detail-don/${item._id}`}>
            <Button color="warning">Détail</Button>
            </Link>

            <Link to={`/editdon/${item._id}`}>
            <Button color="info">Modifier</Button>
            </Link>

            <Button color="danger"  onClick={this.deleteDon}>Supprimer</Button>{' '}
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
        deleteDonReducer:_id=>
        {
            dispatch({
                type:'REMOVE_DON',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(ItemDon);
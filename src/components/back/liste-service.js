

import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Table,Button } from 'reactstrap';
import  { Fragment } from "react";
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import {Link} from 'react-router-dom'

class ListService extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  }
    }
     
        componentDidMount=()=>{
          axios.get('/get-service').then((res)=>this.props.updateServiceReducer(res.data))
      }

      
    
    render() { 
        const {service}=this.props
        return ( 
            <div >
           
                 <Container>
                 <Row>
          <Col  sm={{ size: 'auto', offset: 1 }} >
          <br/>   <br/>   <br/>
          <h1>Gestion des Services</h1>
          <Container>
        <Row>
        <Col xs="12" sm="10"> </Col>

        <Col xs="12" sm="2">  
        <Link to='/add-service'>
        <Button color="success">Ajouter Service</Button>{' '}
        </Link>
        </Col>
        
                 </Row></Container>
               <Table responsive>         
      <thead>
          <tr>
          <th>N°</th>
          <th>Titre</th>
        
          
          <th>Location</th>
          <th>Image</th>
          <th>Date</th>
          <th>Action</th>
          </tr>
        </thead>
     
     
        <tbody>
      {service.map((ItemService, i) => {
        return (
          <Fragment>
            <tr key={i}  >
              
              <td>{i}</td>
              <td>{ItemService.title}</td>
              <td>{ItemService.location}</td>
              <td>{ItemService.imageUrl}</td>
                <td>{ItemService.date}</td>
                <td>
                <Button color="warning">Détails</Button>{' '}
                <Link to='/remove-service'> 
                   <Button color="danger">Supprimer</Button>{' '}
                </Link>
                </td>
            </tr>
            
          </Fragment>
        );
      })}
    </tbody>


         </Table>
         </Col></Row>
         </Container>
         </div> 
        );
    }
} 

const mapStateToProps=(state)=>
{  return {
    service:state.reducerservices
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
      updateServiceReducer:services=>
        {
            dispatch({
                type:'UPDATE_SERVICE',
                services
            })
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(ListService);

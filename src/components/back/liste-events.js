import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Table,Button } from 'reactstrap';
import  { Fragment } from "react";
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import {Link} from 'react-router-dom'

class ListEvents extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  }
    }
     
        componentDidMount=()=>{
          axios.get('/get-event').then((res)=>this.props.updateEventsReducer(res.data))
      }

      
    
    render() { 
        const {events}=this.props
        return ( 
            <div >
           
                 <Container>
                 <Row>
          <Col  sm={{ size: 'auto', offset: 1 }} >
          <br/>   <br/>   <br/>
          <h1>Gestion des Evenements</h1>
          <Container>
        <Row>
        <Col xs="12" sm="10"> </Col>

        <Col xs="12" sm="2">  
        <Link to='/add-event'>
        <Button color="success">Ajouter Event</Button>{' '}
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
      {events.map((ItemEvent, i) => {
        return (
          <Fragment>
            <tr key={i}  >
              
              <td>{i}</td>
              <td>{ItemEvent.title}</td>
              <td>{ItemEvent.location}</td>
              <td>{ItemEvent.imageUrl}</td>
                <td>{ItemEvent.date}</td>
                <td>
                <Button color="warning">Détails</Button>{' '}
                <Link to='/remove-event'> 
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
    event:state.reducerevents
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
      updateEventReducer:events=>
        {
            dispatch({
                type:'UPDATE_EVENT',
                events
            })
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(ListEvents);

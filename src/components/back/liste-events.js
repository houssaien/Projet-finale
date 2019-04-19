
import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Table,Button } from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import {Link} from 'react-router-dom'
import ItemEvent from './item-event'

class ListEvent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  }
    }
     
        componentDidMount=()=>{
          axios.get('/get-event').then((res)=>this.props.updateEventReducer(res.data))
      }

      
    
    render() { 
        const {events}=this.props
        return ( 
          <div>
          <div className="bord">
        
               <Container>
              
        <br/>   <br/>   <br/>
        <h1>Gestion des Events</h1>
        <Container>
      <Row>
      <Col xs="12" sm="9"> </Col>
      <Col xs="12" sm="3">  
      <Link to='/add-event'>
          
           
      <Button color="success">Ajouter Event</Button></Link></Col>
               </Row></Container>
         
             <Table responsive>       
    <thead >
    
        <tr>
        <th className='col-lg-2'>N°</th>
        <th className='col-lg-2'>Titre</th>
      
        
        <th className='col-lg-2'>Location</th>
        <th className='col-lg-2'>Confirmation</th>
        
       
        <th className='col-lg-4'>Action</th>
        </tr>
       
      </thead>
     
   
      </Table>
  
          {
             events.map((el,index)=>
          <ItemEvent key={index} item={el} num={index} />
      )}  
 

 
       
    
       </Container>
       </div>
      
       </div> 
        );
    }
} 

const mapStateToProps=(state)=>
{  return {
    events:state.reducerevents
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

 
export default connect(mapStateToProps,mapDispatchToProps)(ListEvent);
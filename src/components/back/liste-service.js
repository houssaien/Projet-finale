

import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Table,Button } from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import {Link} from 'react-router-dom'
import ItemService from './item-service'

class ListService extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  }
    }
     
        componentDidMount=()=>{
          axios.get('/get-service').then((res)=>this.props.updateServiceReducer(res.data))
      }

      
    
    render() { 
        const {services}=this.props
        return ( 
          <div>
          <div className="bord">
        
               <Container>
              
        <br/>   <br/>   <br/>
        <h1>Gestion des Services</h1>
        <Container>
      <Row>
      <Col xs="12" sm="9"> </Col>
      <Col xs="12" sm="3">  
      <Link to='/add-service'>
          
           
      <Button color="success">Ajouter Service</Button></Link></Col>
               </Row></Container>
         
             <Table responsive>       
    <thead >
    
        <tr>
        <th className='col-lg-2'>N°</th>
        <th className='col-lg-2'>Titre</th>
      
        
        <th className='col-lg-2'>Location</th>
        
       
        <th className='col-lg-6'>Action</th>
        </tr>
       
      </thead>
     
   
      </Table>
  
          {
             services.map((el,index)=>
          <ItemService key={index} item={el}/>
      )}  
 


       
    
       </Container>
       </div>
      
       </div> 
        );
    }
} 

const mapStateToProps=(state)=>
{  return {
    services:state.reducerservices
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

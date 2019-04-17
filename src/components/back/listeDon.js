import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Table,Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import './liste-bien.css'
import axios from 'axios'

import { Container, Row, Col } from 'reactstrap';
// import Pagination from "react-js-pagination";
import ItemDon from './item-don'

class ListDon extends Component {

    constructor(props)
    {
      
        super(props)
        this.state={
          activePage: 1
        }
    }
    componentDidMount=()=>{
        axios.get('/get-dons').then((res)=>this.props.updateDonReducer(res.data))
    }
    
    

    

    render() { 
      
        const {dons}=this.props
        return ( 
         <div>
            <div className="bord">
          
                 <Container>
                
          <br/>   <br/>   <br/>
          <h1>Gestion des Don</h1>
          <Container>
        <Row>
        <Col xs="12" sm="9"> </Col>
        <Col xs="12" sm="3">  
        <Link to='/add-don'>
            
             
        <Button color="success">Ajouter Don</Button></Link></Col>
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
               dons.map((el,index)=>
            <ItemDon key={index} item={el}/>
        )}  
   


         
      
         </Container>
         </div>
        
         </div> 
        );
    }
} 

const mapStateToProps=(state)=>
{  return {
    dons:state.reducersdons
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
        updateDonReducer:dons=>
        {
            dispatch({
                type:'UPDATE_DON',
                dons
            })
        }
        
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(ListDon);
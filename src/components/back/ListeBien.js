import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Table,Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import './liste-bien.css'
import axios from 'axios'

import { Container, Row, Col } from 'reactstrap';
// import Pagination from "react-js-pagination";
import BienItem from './item-bien'

class ListBien extends Component {

    constructor(props)
    {
      
        super(props)
        this.state={
          activePage: 1
        }
    }
    componentDidMount=()=>{
        axios.get('/get-biens').then((res)=>this.props.updateBienReducer(res.data))
    }
    
    

    

    render() { 
      
        const {biens}=this.props
        return ( 
         <div>
            <div className="bord">
          
                 <Container>
                
          <br/>   <br/>   <br/>
          <h1>Gestion des Bien</h1>
          <Container>
        <Row>
        <Col xs="12" sm="9"> </Col>
        <Col xs="12" sm="3">  
        <Link to='/add-bien'>
            
             
        <Button color="success">Ajouter Bien</Button></Link></Col>
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
               biens.map((el,index)=>
            <BienItem key={index} item={el} num={index}/>
        )}  
   


         
      
         </Container>
         </div>
        
         </div> 
        );
    }
} 

const mapStateToProps=(state)=>
{  return {
    biens:state.reducersbiens
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
        updateBienReducer:biens=>
        {
            dispatch({
                type:'UPDATE_BIEN',
                biens
            })
        }
        
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(ListBien);
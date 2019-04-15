import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Table,Button } from 'reactstrap';
import  { Fragment } from "react";
import { Container, Row, Col } from 'reactstrap';
import ItemBien from './item-bien'

class ListBien extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {  isOpen: false}
    }
        toggle(){
            this.setState({
              isOpen: !this.state.isOpen
            });
        }
    
    render() { 
        const {biens}=this.props
        return ( 
            <div >
           
                 <Container>
                 <Row>
          <Col  sm={{ size: 'auto', offset: 1 }} >
          <br/>   <br/>   <br/>
          <h1>Gestion des Bien</h1>
                 <Button color="success">Ajouter Bien</Button>{' '}
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
      {biens.map((ItemBien, i) => {
        return (
          <Fragment>
            <tr key={i} >
              
              <td>{i}</td>
              <td>{ItemBien.title}</td>
              <td>{ItemBien.location}</td>
              <td>{ItemBien.imageUrl}</td>
                <td>{ItemBien.date}</td>
                <td>
                <Button color="warning">Détails</Button>{' '}
        <Button color="danger">Supprimer</Button>{' '}
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
    biens:state.reducersbiens
}
}
 
export default connect(mapStateToProps)(ListBien);
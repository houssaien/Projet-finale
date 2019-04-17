import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Table,Button } from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import {Link} from 'react-router-dom'
import ItemUser from './item-user'

class ListUser extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  }
    }
     
        componentDidMount=()=>{
          axios.get('/get-user').then((res)=>this.props.updateUserReducer(res.data))
      }

      
    
    render() { 
        const {users}=this.props
        return ( 
          <div>
          <div className="bord">
        
               <Container>
              
        <br/>   <br/>   <br/>
        <h1>Gestion des Users</h1>
        {/* <Container>
      <Row>
      <Col xs="12" sm="9"> </Col>
      <Col xs="12" sm="3">  
      <Link to='/add-user'>
          
           
      <Button color="success">Ajouter User</Button></Link></Col>
               </Row></Container>
          */}
             <Table responsive>       
    <thead >
    
        <tr>
        <th className='col-lg-2'>N°</th>
        <th className='col-lg-2'>Name</th>
      
        
        <th className='col-lg-2'>Email</th>
        
       
        <th className='col-lg-4'></th>
        </tr>
       
      </thead>
     
   
      </Table>
  
          {
             users.map((el,index)=>
          <ItemUser key={index} item={el}/>
      )}  
 


       
    
       </Container>
       </div>
      
       </div> 
        );
    }
} 

const mapStateToProps=(state)=>
{  return {
    users:state.reducerusers
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
      updateUserReducer:users=>
        {
            dispatch({
                type:'UPDATE_USER',
                users
            })
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(ListUser);
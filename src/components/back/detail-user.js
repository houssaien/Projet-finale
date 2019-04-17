import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import './detail.css'
import SideBar from './sideBar';
class DetailUser extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            email:'',
            phone:'',
            location:''
        }
    }

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    componentDidMount=()=>

    {
        this.setState({
            ...this.props.users.filter(el=>el._id===this.props._id)[0]
        })
    }
    editUser=()=>
    {
       axios.put(`/edit-user/${this.state._id}`,{
        name:this.state.name,
        email:this.state.email,
        phone: this.state.phone,
        location:this.state.location
     }) 
      .then(()=>this.props.detailUserReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        return (
            <div>     
                   <SideBar/>
                   
            <Container>

            <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}> 
            <div className='detail-container'>
           <center> <h1>Détail User</h1></center>

           
           <h5> Name :</h5>
              {this.state.name}
              <br/>
            <h5>Email :</h5>
             {this.state.email}
             <br/>
            <h5>Location :</h5>
             {this.state.location}
             <br/>
            <h5> Phone : </h5>
             {this.state.phone}
             <br/>
             

             
             <Link to='/user-management'>
             {/* <button >Cancel</button> */}
             <Button  color="info" className="button-detail">Cancel</Button>{' '}
             </Link>
            

           </div>
            </Col>
             </Row>
             </Container>
              
             </div> 
         );
    }
}

const mapStateToProps=(state)=>
{
    return {
        users:state.reducerusers
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        detailUserReducer:detailuser=>
        {
            dispatch({
                type:'DETAIL_USER',
                detailuser
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(DetailUser);
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import './detail.css'
import Sidebar from './sideBar'
class DetailService extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            title:"",
            description:'',
            imageUrl:'',
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
            ...this.props.services.filter(el=>el._id===this.props._id)[0]
        })
    }
    editService=()=>
    {
       axios.put(`/edit-service/${this.state._id}`,{
        title:this.state.title,
        description:this.state.description,
        imageUrl:this.state.imageUrl,
        location:this.state.location
     }) 
      .then(()=>this.props.detailServiceReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        return ( 
            <div>
                <Sidebar/>
                
            <Container>

            <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className='detail-container'>
            <center><h1>Détail Service</h1></center>

           
           <h5> title :</h5>
              {this.state.title}
              <br/>
            <h5> description :</h5>
             {this.state.description}
             <br/>
             <h5>imageUrl :</h5>
             <center><img src={this.state.imageUrl} /></center>
             
             <br/>
             <h5>location :</h5>
             {this.state.location}
             <br/>

             
             <Link to='/Liste-services'>
             {/* <button onClick={this.editService}>Modifier Service</button> */}
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
        services:state.reducerservices
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        detailServiceReducer:detailservice=>
        {
            dispatch({
                type:'DETAIL_SERVICE',
                detailservice
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(DetailService);
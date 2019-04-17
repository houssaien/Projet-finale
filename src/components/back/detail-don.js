import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import './detail.css'
import SideBar from './sideBar'
class DetailDon extends Component {
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
            ...this.props.dons.filter(el=>el._id===this.props._id)[0]
        })
    }
    editEvent=()=>
    {
       axios.put(`/edit-event/${this.state._id}`,{
        title:this.state.title,
        description:this.state.description,
        imageUrl:this.state.imageUrl,
        location:this.state.location
     }) 
      .then(()=>this.props.detailEventReducer({...this.state})) 
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
            <center><h1>Détail Event</h1></center>

           
           <h5> title :</h5>
              {this.state.title}
              <br/>
             <h5>description :</h5>
             {this.state.description}
             <br/>
             <h5>imageUrl :</h5>
             {this.state.imageUrl}
             <br/>
             <h5>location :</h5>
             {this.state.location}
            <br/>
             
             <Link to='/Liste-events'>
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
        dons:state.reducersdons
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        detailEventReducer:detaildon=>
        {
            dispatch({
                type:'DETAIL_DON',
                detaildon
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(DetailDon);
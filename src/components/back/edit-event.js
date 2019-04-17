import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import { Button, Form, Input} from 'reactstrap';

import SideBar from './sideBar'

class EditEvent extends Component {
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
            ...this.props.events.filter(el=>el._id===this.props._id)[0]
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
      .then(()=>this.props.editEventReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        return ( 
            <div>
                <SideBar/>
                
                <Container>
                <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
                <div className="bord">
            <div className='add-contact-container'>
            <center><h1>Modifier Event</h1></center>
            <Form>
            title :
             {/* <input  type='text' name='title' value={this.state.title} onChange={this.handleChange}/> */}
             <Input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
             description :
             {/* <input  type='text' name='description' value={this.state.description} onChange={this.handleChange}/> */}
             <Input type="textarea" name="description" value={this.state.description} onChange={this.handleChange}/>

             imageUrl :
             {/* <input  type='text' name='imageUrl' value={this.state.imageUrl} onChange={this.handleChange}/> */}
             
             <Input type="text" name="imageUrl"   value={this.state.imageUrl} onChange={this.handleChange} placeholder="Image de Event" />

             location :
             {/* <input  type='text' name='location' value={this.state.location} onChange={this.handleChange}/> */}
             <Input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
            
             <Link to='/Liste-events'>
             <Button onClick={this.editEvent}color="info">Modifier Event</Button>
             </Link>
            </Form>
            </div>
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
        events:state.reducerevents
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        editEventReducer:editevent=>
        {
            dispatch({
                type:'EDIT_EVENT',
                editevent
            })
        }
    }
}



 
export default connect(mapStateToProps,mapDispatchToProps)(EditEvent);
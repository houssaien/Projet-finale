import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';

import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';

import SideBar from './sideBar'

class EditDon extends Component {
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
    editDon=()=>
    {
       axios.put(`/edit-dons/${this.state._id}`,{
        title:this.state.title,
        description:this.state.description,
        imageUrl:this.state.imageUrl,
        location:this.state.location
     }) 
      .then(()=>this.props.editDonReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        console.log(this.props.Dons)
        return (
            <div> 
            <SideBar/>
           
            <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}> 
                <div className="bord">
                <div className='add-contact-container'>

            <center><h1>Modifier Don</h1></center>
            <Form>
            title :
             {/* <input  type='text' name='title' value={this.state.title} onChange={this.handleChange}/> */}
             <Input type="text" name="title" value={this.state.title} onChange={this.handleChange} />

             description :
             {/* <input  type='text' name='description' value={this.state.description} onChange={this.handleChange}/> */}
             <Input type="textarea" name="description"  value={this.state.description} onChange={this.handleChange}/>
             imageUrl :
             {/* <input  type='text' name='imageUrl' value={this.state.imageUrl} onChange={this.handleChange}/> */}
             <Input type="text" name="imageUrl"   value={this.state.imageUrl} onChange={this.handleChange}/>
             location :
             {/* <input  type='text' name='location' value={this.state.location} onChange={this.handleChange}/> */}
             <Input type="text" name="location" value={this.state.location} onChange={this.handleChange}required/>
             <Link to='/Liste-dons'>
             <Button onClick={this.editDon} color="info">Modifier Don</Button>
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
        dons:state.reducersdons
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        editDonReducer:editdon=>
        {
            dispatch({
                type:'EDIT_DON',
                editdon
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(EditDon);
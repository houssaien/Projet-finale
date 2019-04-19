import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import { Button, Form, Input} from 'reactstrap';

import SideBar from './sideBar'

class EditService extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            title:"",
            description:'',
            imageUrl:'',
            location:'',
            confirmation:'',
            Categservice:''
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
        location:this.state.location,
        confirmation:this.state.confirmation,
        Categservice:this.state.Categservice,
     }) 
      .then(()=>this.props.editServiceReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        console.log(this.props.Services)
        return ( 
            <div>
                <SideBar/>
                <br/>
                <Container>
                <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
                <div className="bord">
            <div className='add-contact-container'>
            <center><h1>Modifier Service</h1></center>
            <Form>
            title :
             {/* <input  type='text' name='title' value={this.state.title} onChange={this.handleChange}/> */}
             <Input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
             description :
             {/* <input  type='text' name='description' value={this.state.description} onChange={this.handleChange}/> */}
             <Input type="textarea" name="description" value={this.state.description} onChange={this.handleChange}/>

             imageUrl :
             {/* <input  type='text' name='imageUrl' value={this.state.imageUrl} onChange={this.handleChange}/> */}
             
             <Input type="text" name="imageUrl"  accept="image/*" value={this.state.imageUrl} onChange={this.handleChange} placeholder="Image de Service" />

             Lieu :
             {/* <input  type='text' name='location' value={this.state.location} onChange={this.handleChange}/> */}
             <Input type="select" name="location" onChange={this.handleChange} required>
             <option>{this.state.location}</option>
             <option>Ariana</option>
            <option>Béja</option>
            <option>Ben Arous</option>
            <option>Bizerte</option>
            <option>Gabès</option>
            <option>Gafsa</option>
            <option>Jendouba</option>
            <option>Kairouan</option>
            <option>Kasserine</option>
            <option>Kébili</option>
            <option>Kef</option>
            <option>Mahdia</option>
            <option>Manouba	</option>
            <option>Médenine</option>
            <option>Monastir</option>
            <option>Nabeul</option>
            <option>Sfax</option>
            <option>Sidi Bouzid	</option>
            <option>Siliana</option>
            <option>Sousse</option>
            <option>Tataouine</option>
            <option>Tozeur</option>
            <option>Tunis</option>
            <option>Zaghouan</option>
            </Input>



             Confirmation :
             {/* <input  type='text' name='location' value={this.state.location} onChange={this.handleChange}/> */}
             <Input type="select" name="confirmation" onChange={this.handleChange} required>
             <option>{this.state.confirmation}</option>
            <option>en attente</option>
            <option>confirme</option>
            </Input>
            

             Categservice :
             {/* <input  type='text' name='location' value={this.state.location} onChange={this.handleChange}/> */}
             <Input type="select" name="Categservice" value={this.state.Categservice} onChange={this.handleChange} required>
             <option>{this.state.Categservice}</option>
             <option>Beauté Bien-être</option>
            <option>Travail</option>
            <option>Maison</option>
            <option>Aide à la personne</option>
            <option>Cours</option>
            <option>Loisirs</option>
            <option>Bricolage</option>
            <option>Véhicules</option>
            <option>Vacances</option>
            <option>Mode</option>
            </Input>


          

             <Link to='/Liste-services'>
             <Button onClick={this.editService}color="info">Modifier Service</Button>
             </Link>
            </Form>
            </div> </div>
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
        editServiceReducer:editservice=>
        {
            dispatch({
                type:'EDIT_SERVICE',
                editservice
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(EditService);
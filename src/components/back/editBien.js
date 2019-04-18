import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import './detail.css'
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';


import SideBar from './sideBar'

class EditBien extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            title:"",
            description:'',
            imageUrl:'',
            location:'',
            confirmation:'en attente'
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
            ...this.props.biens.filter(el=>el._id===this.props._id)[0]
        })
    }
    editBien=()=>
    {
       axios.put(`/edit-bien/${this.state._id}`,{
        title:this.state.title,
        description:this.state.description,
        imageUrl:this.state.imageUrl,
        location:this.state.location,
        confirmation:this.state.confirmation
     }) 
      .then(()=>this.props.editBienReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        console.log(this.props.biens)
        return ( 
            <div> 
            <SideBar/>
            
            <center>
                <br/>
            <Card className="card">
            <center>
      
      </center>
      <CardActionArea>
      <h1>  Modifier Bien </h1>
      </CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Titre: 
          </Typography>
          <Typography component="p">
          
          <Input type="text" name="title"  value={this.state.title} onChange={this.handleChange} />
          </Typography>
        <br/>
          <Typography gutterBottom variant="h5" component="h2">
          Description: 
          </Typography>

          <Typography component="p">
          <Input type="text" name="description"  value={this.state.description} onChange={this.handleChange}/>
          </Typography> 

          <br/>
          <Typography gutterBottom variant="h5" component="h2">
          Lieu: 
          </Typography>
          <Typography component="p">
          <Input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
          </Typography> 
          <br/>
          <Typography gutterBottom variant="h5" component="h2">
          Etat: 
          </Typography>
          <Typography component="p">
          <Input type="select" name="confirmation" onChange={this.handleChange} required>
             <option>-- Selectionner votre Confirmation --</option>
            <option>En attente</option>
            <option>confirme</option>
            </Input>
          </Typography> 

          <br/>
          <Typography gutterBottom variant="h5" component="h2">
          Image: 
          </Typography>
          <Typography component="p">
          <Input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange}/>
          </Typography> 
        </CardContent>
        <br/>
        <br/>
      <center>
     
   
      <Link to='/Bien-Management'>
             <Button onClick={this.editBien} >Modifier Bien</Button>
             </Link>
            
<br/>
     
      </center>
      
    </Card>
    </center>
            
            
            </div>
            
            
         );
    }
}

const mapStateToProps=(state)=>
{
    return {
        biens:state.reducersbiens
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        editBienReducer:editbien=>
        {
            dispatch({
                type:'EDIT_BIEN',
                editbien
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(EditBien);
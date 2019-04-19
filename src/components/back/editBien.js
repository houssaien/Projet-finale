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
          <Input type="textarea" name="description"  value={this.state.description} onChange={this.handleChange}/>
          </Typography> 

          <br/>
          <Typography gutterBottom variant="h5" component="h2">
          Lieu: 
          </Typography>
          <Typography component="p">
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

          </Typography> 
          <br/>
          <Typography gutterBottom variant="h5" component="h2">
          Etat: 
          </Typography>
          <Typography component="p">
          <Input type="select" name="confirmation" onChange={this.handleChange} required>
             <option>{this.state.confirmation}</option>
            <option>En attente</option>
            <option>confirme</option>
            </Input>
          </Typography> 

          <br/>
          <Typography gutterBottom variant="h5" component="h2">
          Catégorie : 
          </Typography>
          <Typography component="p">
          <Input type="select" name="Categbien" value={this.state.Categbien} onChange={this.handleChange} required>
             <option>{this.state.Categbien}</option>
             <option>Immobilier</option>
            <option>Véhicules</option>
            <option>Pour la Maison et Jardin</option>
            <option>Loisirs et Divertissement</option>
            <option>Informatique et Multimedia</option>
            <option>Habillement et Bien Etre</option>
            <option>Autres</option>
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
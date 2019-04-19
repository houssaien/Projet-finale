import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import { Button, Form, Input} from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import SideBar from './sideBar'

class EditEvent extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            title:"",
            description:'',
            imageUrl:'',
            location:'',
            confirmation:''
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
        location:this.state.location,
        confirmation:this.state.confirmation
     }) 
      .then(()=>this.props.editEventReducer({...this.state})) 
      .catch((err)=>alert(err))
    }
 
    render() { 
        return ( 
            <div>
                <SideBar/>

                <center>
                <br/>
            <Card className="card">
            <center>
      
      </center>
      <CardActionArea>
      <h1>  Modifier Event </h1>
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
          Lieu :
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
          Image: 
          </Typography>
          <Typography component="p">
          <Input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange}/>
          </Typography> 
        </CardContent>
        <br/>
        <br/>
      <center>
     
             <Link to='/Liste-events'>
             <Button onClick={this.editEvent}color="info">Modifier Event</Button>
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
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './detail.css'
import SideBar from './sideBar';
class DetailService extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            title:"",
            description:'',
            imageUrl:'',
            location:'',
            confirmation:'en attente',
            categservice:''
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
        categservice:this.state.categservice
     }) 
      .then(()=>this.props.detailServiceReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        return ( 
            <div>
            <SideBar/>
            <br/>
            <br/>
            
        
<center>
        <Card className="card">
        <center>
  <CardActionArea>
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
    
      img id="target" src={this.state.imageUrl}    width="20px" height="20px"
      title="Contemplative Reptile"
    />
  </CardActionArea>
  </center>
  <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      Titre: 
      </Typography>
      <Typography component="p">
      {this.state.title}
      </Typography>
    <br/>
      <Typography gutterBottom variant="h5" component="h2">
      Description: 
      </Typography>

      <Typography component="p">
      {this.state.description}
      </Typography> 

      <br/>
      <Typography gutterBottom variant="h5" component="h2">
      Lieu: 
      </Typography>

      <Typography component="p">
      {this.state.location} 
      </Typography> 
      <br/>
      <Typography gutterBottom variant="h5" component="h2">
      Confirmation: 
      </Typography>

      <Typography component="p">
      {this.state.confirmation} 
      </Typography> 

      <br/>
      <Typography gutterBottom variant="h5" component="h2">
      Catégorie: 
      </Typography>

      <Typography component="p">
      {this.state.categservice} 
      </Typography> 






    </CardContent>
  <center>
 

         
  <Link to='/Liste-services'>
             {/* <button onClick={this.editService}>Modifier Service</button> */}
           <center>  <Button  color="info" className="button-detail">Retour</Button>{' '}</center>
             </Link>

 
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
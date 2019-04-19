import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button } from 'reactstrap';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import './detail.css'
import SideBar from './sideBar';
class DetailBien extends Component {
    
    constructor(props)
    {
        const styles = {
            card: {
              maxWidth: 345,
            },
            media: {
              // ⚠️ object-fit is not supported by IE 11.
              objectFit: 'cover',
            },
          };
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
       axios.put(`/getbien/${this.state._id}`,{
        title:this.state.title,
        description:this.state.description,
        imageUrl:this.state.imageUrl,
        location:this.state.location,
        confirmation:this.state.confirmation
     }) 
      .then(()=>this.props.detailBienReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        
        console.log(this.props.biens)
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

        </CardContent>
      <center>
     
   
             <Link to='/Bien-Management'>
            
             <Button color="info">Retour</Button>{' '}
            
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
        biens:state.reducersbiens
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        detailBienReducer:detailbien=>
        {
            dispatch({
                type:'DETAIL_BIEN',
                detailbien
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(DetailBien);
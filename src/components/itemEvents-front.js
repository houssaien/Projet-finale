import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import './event.css'
class ItemEventFront extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          isFlipped: false
         }
         this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    deleteBien=()=>
    {  const {item} = this.props
    axios.delete(`/delete-event/${item._id}`)   
  .then(()=>this.props.deleteEventReducer(item._id)) 
  .catch((err)=>alert(err)) 
    }
    render() { 
      const {item}=this.props

  return (
    <div>
    {item.confirmation === "confirme"?
 

<Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="vertical" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    /// these are optional style, it is not necessary
    style={{ width: '800px', height: '210px',margin:'34px'}} 
 >
    <FrontSide className="front">
      <CardActionArea style={{ width: '230px', height: '170px'}} >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
        
          img id="target" src={item.imageUrl}    
          title="Contemplative Reptile"
          style={{ width: '230px', height: '170px'}} 
        />
      </CardActionArea>
      <CardContent style={{ paddingLeft: '50px'}} >
          <Typography gutterBottom variant="h5" component="h2">
         <div className="titre1"> {item.title}</div>
          <br/>
          
         <div className="titre"> Date et lieu:</div>
          <Typography component="p">
          <i class="far fa-calendar-alt Faicon"></i>{item.date}
          <br/>
          <i class="fas fa-map-marker-alt Faicon"></i>   {item.location} 
          </Typography>
          </Typography>
        
          </CardContent>
    </FrontSide>
    <BackSide className="back"
   >
        <CardContent>
       
          <Typography gutterBottom variant="h5" component="h2">
          
          </Typography>

          <Typography component="p">
        <p>  {item.description}</p>
          </Typography> 

          
         

          <br/>
          <Typography gutterBottom variant="h5" component="h2">
         
          </Typography>

          <Typography component="p">
          {/* {item.Categbien}  */}
          </Typography> 


        </CardContent>
    </BackSide>
  </Flippy>
  
:<div></div>}
  </div>
  );
}
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteEventReducer:_id=>
        {
            dispatch({
                type:'REMOVE_EVENT',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(ItemEventFront); 
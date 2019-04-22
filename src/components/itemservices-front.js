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

class ItemService extends Component {
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

    deleteService=()=>
    {  const {item} = this.props
    axios.delete(`/delete-service/${item._id}`)   
  .then(()=>this.props.deleteServiceReducer(item._id)) 
  .catch((err)=>alert(err)) 
    }
    render() { 
      const {item,num}=this.props

  return (
    <div>
    {item.confirmation === "confirme"?
 
<Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    /// these are optional style, it is not necessary
    style={{ width: '310px', height: '340px', margin:'10px' }} 
 >
    <FrontSide>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
        
          img id="target" src={item.imageUrl}    width="60px" height="60px"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {item.title}
          </Typography>
        
          </CardContent>
    </FrontSide>
    <BackSide
   >
        <CardContent>
       
          <Typography gutterBottom variant="h5" component="h2">
          Description: 
          </Typography>

          <Typography component="p">
        <p>  {item.description}</p>
          </Typography> 

          <br/>
          <Typography gutterBottom variant="h5" component="h2">
          Lieu: 
          </Typography>

          <Typography component="p">
          {item.location} 
          </Typography> 

          <br/>
          <Typography gutterBottom variant="h5" component="h2">
          Catégorie: 
          </Typography>

          <Typography component="p">
          {item.CategService} 
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
        deleteServiceReducer:_id=>
        {
            dispatch({
                type:'REMOVE_SERVICE',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(ItemService); 
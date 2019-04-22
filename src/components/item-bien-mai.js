import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import { Container, Row, Col, CardText } from 'reactstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

class ItemBienMai extends Component {
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
    axios.delete(`/delete-bien/${item._id}`)   
  .then(()=>this.props.deleteBienReducer(item._id)) 
  .catch((err)=>alert(err)) 
    }
    render() { 
      const {item,num}=this.props

  return (
    <div>
    {item.confirmation === "confirme" && item.Categbien === "Pour la Maison et Jardin"?
 
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
         
        
          img id="target" src={item.imageUrl}   
          title="Contemplative Reptile"
        />
      </CardActionArea>

      <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
          {item.title}
          </Typography>
        
          </CardContent>
    </FrontSide>
    <BackSide
   >
        <CardContent>
       
          <Typography gutterBottom variant="h5" component="h5">
          Description: 
          </Typography>

          <Typography component="p">
          <CardText>  {item.description}</CardText>
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
          Télephone: 
          </Typography>

          <Typography component="p">
          {item.tel} 
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
        deleteBienReducer:_id=>
        {
            dispatch({
                type:'REMOVE_BIEN',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(ItemBienMai); 
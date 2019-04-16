import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import SideBar from './sideBar';

 class AddService extends React.Component {
  constructor() {
    super();
 
    this.state = {
      title:"",
      description:"",
      date:"",
      location:"",
      imageUrl:""
  
    }}

  handleChange=(e)=>
  {
     this.setState({
         [e.target.name]:e.target.value
     })
  }

  addservice=()=>
    {
      axios.post('/add-service',{...this.state})
       .then(()=>this.props.addServiceReducer({...this.state}))
       .catch((err)=>alert(err)) 
    }
  render() {
    return (
        <div>
             <SideBar/>
      <Form>
        <FormGroup>
          <Label for="Name Service">Name Service</Label>
          <Input type="text" name="title" value={this.state.title} placeholder="Type Service" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="description" name="description" value={this.state.description} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            value={this.state.date}
            placeholder="date "
            onChange={this.handleChange}
          />
        </FormGroup>
        
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="location" value={this.state.location} placeholder="1234 Main St" onChange={this.handleChange}/>
        </FormGroup>
        
       
        
        {/* <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input id="upload" ref="upload" type="file" accept="image/*" name="imageUrl"
                
           multiple="false"
           onChange={(e) => this.getDailyImage(e)}
           onClick={(e) => e.target.files[0] && this.getDailyImage(e)}
          />

          
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup> */}
       <Link to='/Liste-services'>
        <Button onClick={this.addservice}>Submit</Button>
        </Link>
      </Form>

      
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        addServiceReducer:newservice=>
        {
            dispatch({
                type:'ADD_SERVICE',
                newservice
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(AddService)
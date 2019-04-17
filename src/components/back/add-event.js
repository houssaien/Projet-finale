import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './add-bien.css'
import SideBar from './sideBar'
import { Container, Row, Col } from 'reactstrap';

import { Button, Form, Input} from 'reactstrap';
import axios from 'axios'
class AddEvent extends Component {

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    
    addEvent=()=>
    {
      axios.post('/add-event',{...this.state})
       .then(()=>this.props.addEventReducer({...this.state}))
       .catch((err)=>alert(err)) 
    }
    render() { 
        return ( 
            <div>
                <SideBar/>
                <div className="bord">
                <Container>
                <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
             <center><h1>Ajouter Event</h1></center>
             <br/>
             <Form>
             <Input type="text" name="title"  onChange={this.handleChange} placeholder="Titre de Event" required />
             <br/>
             <Input type="textarea" name="description"  onChange={this.handleChange} placeholder="Description de Event" required/>
        
             <br/>
             <Input type="number" name="tel"  onChange={this.handleChange} placeholder="Votre numéro de télephone" required/>
             <br/>
                
             <Input type="file" name="imageUrl"  accept="image/*" onChange={this.handleChange} placeholder="Image de Event" required/>
<br/>

                <center>
                <br/>
                <Input type="select" name="location" onChange={this.handleChange} placeholder="Selectionner votre gouvernorat" required>
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
             <Link to='/Liste-events'>
             <br/>
             <br/>
          
            <Button onClick={this.addEvent} color="success">Ajouter Event</Button></Link>
            <br/>
             <br/>
             <br/>
            </center>
             
             </Form>
             </Col>
        </Row>
             </Container>
</div>
            </div>
         );
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        addEventReducer:newevent=>
        {
            dispatch({
                type:'ADD_EVENT',
                newevent
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(AddEvent);
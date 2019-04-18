import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './add-bien.css'
import SideBar from './sideBar'
import { Container, Row, Col } from 'reactstrap';

import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import axios from 'axios'
class AddDon extends Component {

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
     
    addDon=()=>
    {
      axios.post('/add-don',{...this.state})
       .then(()=>this.props.addDonReducer({...this.state}))
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
             <center><h1>Ajouter Don</h1></center>
             <br/>
             <Form>
             <Input type="text" name="title"  onChange={this.handleChange} placeholder="Titre de Don" required />
             <br/>
             <Input type="textarea" name="description"  onChange={this.handleChange} placeholder="Description de Don" required/>
        
             <br/>
             <Input type="number" name="tel"  onChange={this.handleChange} placeholder="Votre numéro de télephone" required/>
             <br/>
                
             <Input type="file" name="imageUrl"  accept="image/*" onChange={this.handleChange} placeholder="Image de Don" required/>
<br/>

                <center>
                <br/>
                <Input type="select" name="location" onChange={this.handleChange} placeholder="Selectionner votre gouvernorat" required>
                <option>-- Selectionner votre gouvernorat --</option>
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
             <Link to='/Liste-dons'>
             <br/>
             <br/>
          
            <Button onClick={this.addDon} color="success">Ajouter Don</Button></Link>
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
        addDonReducer:newdon=>
        {
            dispatch({
                type:'ADD_DON',
                newdon
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(AddDon);
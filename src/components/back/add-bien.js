import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './add-bien.css'
import SideBar from './sideBar'
import { Container, Row, Col } from 'reactstrap';

import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import axios from 'axios'
class AddBien extends Component { 

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    
    addBien=()=>
    {
      axios.post('/add-bien',{...this.state})
       .then(()=>this.props.addBienReducer({...this.state}))
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
             <center><h1>Ajouter Bien</h1></center>
             <br/>
             <Form>
             <Input type="text" name="title"  onChange={this.handleChange} placeholder="Titre de Bien" required />
             <br/>
             <Input type="textarea" name="description"  onChange={this.handleChange} placeholder="Description de Bien" required/>
        
             <br/>
             <Input type="number" name="tel"  onChange={this.handleChange} placeholder="Votre numéro de télephone" required/>
             <br/>
                
             <Input type="file" name="imageUrl"  accept="image/*" onChange={this.handleChange} placeholder="Image de Bien" required/>
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
             <Link to='/Bien-Management'>
             <br/>
             <br/>
          
            <Button onClick={this.addBien} color="success">Ajouter Bien</Button></Link>
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
        addBienReducer:newbien=>
        {
            dispatch({
                type:'ADD_BIEN',
                newbien
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(AddBien);
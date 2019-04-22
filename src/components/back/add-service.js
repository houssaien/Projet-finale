import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './add-bien.css'
import SideBar from './sideBar'
import { Container, Row, Col } from 'reactstrap';

import { Button, Form, Input} from 'reactstrap';
import axios from 'axios'
class AddService extends Component {

  constructor(props)
  {
      super(props)
      this.state={
        
          confirmation:'en attente'
      }
  }
    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({imageUrl: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }
    
    addService=()=>
    {
      axios.post('/add-service',{...this.state})
       .then(()=>this.props.addServiceReducer({...this.state}))
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
             <center><h1>Ajouter Service</h1></center>
             <br/>
             <Form>
             <Input type="text" name="title"  onChange={this.handleChange} placeholder="Titre de Service" required />
             <br/>
             <Input type="textarea" name="description"  onChange={this.handleChange} placeholder="Description de Service" required/>
        
             <br/>
             <Input type="number" name="tel"  onChange={this.handleChange} placeholder="Votre numéro de télephone" required/>
             
<br/>

                <center>
                
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
          <br/>

          <Input type="select" name="Categservice" onChange={this.handleChange} placeholder="Selectionner votre gouvernorat" required>
             <option>-- Selectionner Catégorie de votre Service --</option>
            <option>Beauté Bien-être</option>
            <option>Travail</option>
            <option>Aide à la personne</option>
            <option>Cours</option>
            <option>Loisirs</option>
            <option>Bricolage</option>
            <option>Autres</option>
            
            
          </Input>

          <br/>
                
             <Input type="file" name="imageUrl"   onChange={this.onImageChange} />
             <br/>
             <Link to='/Liste-services'>
             <br/>
             <br/>
          
            <Button onClick={this.addService} color="success">Ajouter Service</Button></Link>
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
        addServiceReducer:newservice=>
        {
            dispatch({
                type:'ADD_SERVICE',
                newservice
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(AddService);
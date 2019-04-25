import React, { Component } from 'react';
import {Link} from 'react-router-dom'


  import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Form,FormControl,Button} from 'react-bootstrap';

class NavbarPage extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Navbar bg="light" expand="lg" fixed>
        <Navbar.Brand href="/"><img src="front/img/core-img/logof.png" className="logo-navbar" width="200px" height="100px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Acceuil</Nav.Link>
           
            <NavDropdown title="Echange" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Bien">Biens</NavDropdown.Item>
             
              
              <NavDropdown.Divider />
               <NavDropdown.Item href="/Service">Services</NavDropdown.Item>
            </NavDropdown> 
            <Nav.Link href="/Don">Don</Nav.Link>
            <Nav.Link href="/Evenement">Evements</Nav.Link>
            <Nav.Link href="/Apropos">A propos</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
          <Link to='/Registre'> <Button variant="outline-danger" size="md">Registre</Button></Link>
          <Link to='/Identifier'><Button variant="outline-primary" size="md">Identifier</Button></Link>
          
          </Form>
        </Navbar.Collapse>
      </Navbar>
     </div>       );
    }
}
 
export default NavbarPage;
import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


    import {connect} from 'react-redux'
    import ItemServic from './item-service-cour'
    import Footer from './footer'

import axios from 'axios'

class ServiceCour extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          activePage: 1
        };
      }
    
    
      componentDidMount=()=>{
          axios.get('/get-service').then((res)=>this.props.updateServiceReducer(res.data))
      }
      
    
    
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() { 
      const {services}=this.props
        return ( 
            <div>
              
              
              {/* Background Curve */}
              

               <header class="header-area">
     
        
               


     <Navbar color="white" light expand="md">
 <NavbarBrand href="/"><img src="front/img/core-img/logof.png" className="logo-navbar" width="200px" height="100px" /></NavbarBrand>
 <NavbarToggler onClick={this.toggle} />
 <Collapse isOpen={this.state.isOpen} navbar>
   <Nav className="ml-auto" > 
     <NavItem>
       <NavLink class="classynav nav caret">
       <Link to='/' className="active">
       Acceuil
   </Link>
   </NavLink>
     </NavItem>

     <UncontrolledDropdown nav inNavbar>
       <DropdownToggle nav caret>
       <a>
         Echange
         </a>
       </DropdownToggle>
       <DropdownMenu right>
         <DropdownItem>
         <Link to='/Bien'>
         Echange de bien
   </Link>
        
         </DropdownItem>
         <DropdownItem>
         <Link to='/Service'>
           Echange de service
           </Link>
         </DropdownItem>
         
       </DropdownMenu>
     </UncontrolledDropdown>
     <NavItem>
       <NavLink>
       <Link to='/Don'>
       Don
   </Link>
          </NavLink>
     </NavItem>

     <NavItem>
           <NavLink>
           <Link to='/Evenement'>
           Evements
   </Link></NavLink>
     </NavItem>

     <NavItem>
       <NavLink>
       <Link to='/Apropos'>
       A propos de nous
   </Link></NavLink>
     </NavItem>

     <NavItem>
       <NavLink>
       <Link to='/Contact'>
       Contact
   </Link>
          </NavLink>
     </NavItem>
     
{/* Login / Register */}

<NavItem>
 <a><Link to='/Identifier'>
 S'identifier
   </Link> </a>
   </NavItem>
   <NavItem>
   <span><a><Link to='/Registre'>
   / Registre
   </Link></a></span>
   </NavItem>


   </Nav>
   
 </Collapse>
</Navbar>

</header>
<br/><br/>

<div className="single-welcome-slide">

{/* Background Curve */}

<div className="background-curve">

  <img src="front/img/core-img/curve-1.png"/>       
      
      

              
           
  
     
  
    </div>
   

    <Container>
    <div class="breadcrumb-area">
    <div class="container h-100">
        
        <div class="row h-100 align-items-end">
            <div class="col-12">
                <div class="breadcumb--con">
                <h2 class="title">Echange de Service</h2>
                    
                    <br/>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a><Link to='/'>
                             <i class="fa fa-home"></i>Acceuil</Link></a></li>
                            <li class="breadcrumb-item active" aria-current="page"><Link to='/Bien'>
                            Echange de Service
        </Link></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    </div>
              <Row>
          <Col xs="12" sm="4">
          <ListGroup>
          <ListGroupItem active tag="a"action><h2>Nos Catégories</h2></ListGroupItem>
      <ListGroupItem tag="a"action> <Link to='/Service_Bricolage'>Bricolage</Link></ListGroupItem>
      <ListGroupItem tag="a"action><Link to='/Service_Beaute'>Beauté Bien-être</Link></ListGroupItem>
      <ListGroupItem tag="a"action><Link to='/Service_Travail'>Travail</Link></ListGroupItem>
      <ListGroupItem tag="a"action><Link to='/Service_Aide'>Aide à la personne</Link></ListGroupItem>
      <ListGroupItem tag="a"action><Link to='/Service_Cours'>Cours</Link></ListGroupItem>
      <ListGroupItem tag="a"action><Link to='/Service_Loisirs'>Loisirs</Link></ListGroupItem>
      <ListGroupItem tag="a"action>Autres</ListGroupItem>
        </ListGroup>
         </Col>
        <Col xs="8" >
                          
                  <div className="immm"> 
          {
          
               services.map((el,index)=>
               
              
            <ItemServic key={index} item={el} num={index}/>
          
        
        )}    </div>  
          </Col>
        </Row>
              </Container>

              
        
        
{/* Welcome Content */}





{/* ***** Header Area End ***** */}



{/* ***** Welcome Area Start ***** */}


<Footer/>      
</div>




     
  
    
            </div>
            
         );
    }
}
 
const mapStateToProps=(state)=>
{  return {
    services:state.reducerservices
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
        updateBienReducer:services=>
        {
            dispatch({
                type:'UPDATE_SERVICE',
                services
            })
        }
        
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(ServiceCour);
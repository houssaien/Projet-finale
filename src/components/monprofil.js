import React, { Component } from 'react';
import './App.css';
import {
    FormGroup, Input,
    
  } from 'reactstrap';
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
class Monprofil extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() { 
        return ( 
            <div>
       
       
        <div className="single-welcome-slide">
              {/* Background Curve */}
              <div className="background-curve">
                <img src="front/img/core-img/curve-1.png"/>
              </div>
                    
              
                    <div class="breadcrumb-area">
        <div class="container h-100">
            <div class="row h-100 align-items-end">
                <div class="col-12">
                    <div class="breadcumb--con">
                        <h2 class="title">Modifier Mon Profil</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a><Link to='/'>
                                 <i class="fa fa-home"></i>Acceuil</Link></a></li>
                                 <li class="breadcrumb-item active" aria-current="page">
                                Mon Profile
            </li>
                                <li  class="breadcrumb-item" ><a><Link to='/Monbien'>
                                Mes Biens</Link></a></li>
                                <li class="breadcrumb-item"><a><Link to='/Monservice'>
                                Mes Services</Link></a></li>
                                <li class="breadcrumb-item"><a><Link to='/Mondonation'>
                                Mes Dons</Link></a></li>
                                <li class="breadcrumb-item"><a><Link to='/Monprofil'>
                                Modifier mon Profil</Link></a></li>
                             
                            </ol>
                        </nav>
                        <br/>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                
                                <li class="breadcrumb-item active" aria-current="page">
                                Mon Profile
            </li>  <li class="breadcrumb-item active" aria-current="page"><Link to='/Monprofil'>
              Mon profil
            </Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

       
    
    </div>
    <form action="#" method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control mb-30" name="full-name" placeholder="Nom" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="email" className="form-control mb-30" name="email" placeholder="Prénom" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="email" className="form-control mb-30" name="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="password" className="form-control mb-30" name="email" placeholder="Mote de passe" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control mb-30" name="full-name" placeholder="Télephone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                      <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
            <option>Gouvernorat</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
                     
                     
                      </div>
                    </div>
                    <div className="col-12">
                  <center>  <button className="btn uza-btn btn-3 mt-15">Modifier Mon Compte</button></center>  
                    </div>
                  </div>
                </form>

              <header class="header-area">
     
        
               


             
              <Navbar color="white" light expand="md">
          <NavbarBrand href="/"><img src="front/img/core-img/logof.png" className="logo-navbar" width="200px" height="100px" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" > 
              <NavItem>
                <NavLink class="classynav nav caret">
                <Link to='/'>
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
        
        
              {/* Welcome Content */}
            
           
              </div>
     
    
       
       
       
       
       
        {/* ***** Blog Area End ***** */}
     
        <div className="container">
            <div className="border-line" />
          </div>
        {/* ***** Footer Area Start ***** */}
        <footer className="footer-area section-padding-80-0">
          <div className="container">
            <div className="row justify-content-between">
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  {/* Widget Title */}
                  <h4 className="widget-title">Contactez Nous</h4>
                  {/* Footer Content */}
                  <div className="footer-content mb-15">
                    <h3>(+216) 73 000 000</h3>
                    <p>Sousse, Tunisie</p>
                  </div>
                  <p className="mb-0">
                  <img src="front/img/core-img/logof.png" width="200px" height="150px" />
                    </p>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  {/* Widget Title */}
                  <h4 className="widget-title">badeli</h4>
                  {/* Nav */}
                  <nav>
                    <ul className="our-link">
                      <li><Link to='/'>Acceuil</Link></li>
                      <li><Link to='/Bien'>Echange de produit</Link></li>
                      <li><Link to='/Service'>Echange de service</Link></li>
                      <li><Link to='/Don'>Don</Link></li>
                      <li><Link to='/Evenement'>Evénements</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  {/* Widget Title */}
                  <h4 className="widget-title">Mon compte</h4>
                  {/* Nav */}
                  <nav>
                    <ul className="our-link">
                      <li><Link to='/Registre'>Registre</Link></li>
                      <li><Link to='/Identifier'>S'identifier</Link></li>
                      
                    </ul>
                  </nav>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  {/* Widget Title */}
                  <h4 className="widget-title">A propos Nous</h4>
                  <p>le premier site tunisien pour échange de produit et service</p>
                  {/* Copywrite Text */}
                  <div className="copywrite-text mb-30">
                    <p>© Copyright 2019</p>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="row" style={{marginBottom: '30px'}}>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved 2019
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </div>
          </div>
        </footer>
            </div>
         );
    }
}
 
export default Monprofil;
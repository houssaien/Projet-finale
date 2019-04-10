import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import logo2 from './005.png';
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
class Contact extends Component {
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
                        <h2 class="title">Contactez Nous</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a><Link to='/'>
                                 <i class="fa fa-home"></i>Acceuil</Link></a></li>
                                <li class="breadcrumb-item active" aria-current="page"><Link to='/Contact'>
               Contact
            </Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

       
    
    </div>
                    <section className="uza-about-us-area">
          <div className="container">
            <div className="row align-items-center">
              {/* About Thumbnail */}
            
              
              {/* About Us Content */}
              <section className="uza-contact-area section-padding-80">
        <div className="container">
          <div className="row justify-content-between">
            {/* Contact Form */}
            <div className="col-12 col-lg-8">
              
               
                
                    
                  <div style={{overflow: 'hidden', width: '700px', position: 'relative'}}><iframe src="https://maps.google.com/maps?width=700&height=440&hl=en&q=+(Title)&ie=UTF8&t=p&z=10&iwloc=B&output=embed" scrolling="no" marginHeight={0} marginWidth={0} width={700} height={440} frameBorder={0} /><div style={{position: 'absolute', width: '80%', bottom: '10px', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', color: '#000', textAlign: 'center'}}><small style={{lineHeight: '1.8', fontSize: '2px', background: '#fff'}}>Powered by <a href="https://embedgooglemaps.com/de/">Embedgooglemaps.com/de/</a> &amp; <a href="http://abtof.org.uk/">cheapflightwebsites reviews</a></small></div><style dangerouslySetInnerHTML={{__html: "#gmap_canvas img{max-width:none!important;background:none!important}" }} /></div><br />
                  
                  
                   
                  
              
            </div>
            {/* Single Contact Card */}
            <div className="col-12 col-lg-3">
              <div className="contact-sidebar-area mb-80">
                {/* Single Sidebar Area */}
                <div className="single-contact-card mb-50">
                  <h4>Contactez Nous</h4>
                  <h4>(+216) 73 000 000</h4>
                  <h6>Sousse, Tunisie</h6>
                </div>
                
              </div>
            </div>
          </div>
         
        </div>
      </section>
            </div>
          </div>
         
        
        </section>

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
     
      
        {/* ***** Header Area End ***** */}

        
             
        {/* ***** Welcome Area Start ***** */}
       
       
       
       
       
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
 
export default Contact;
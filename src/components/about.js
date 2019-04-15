import React, { Component } from 'react';
import './App.css';
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
class about extends Component {
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
                        <h2 class="title">A Propos Nous</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a><Link to='/'>
                                 <i class="fa fa-home"></i>Acceuil</Link></a></li>
                                <li class="breadcrumb-item active" aria-current="page"><Link to='/Apropos'>
                A propos de nous
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
              <div className="col-12 col-md-7">
                <div className="about-us-thumbnail mb-80">
                <h1>badeli </h1>
                  <p>badeli est un site d'annonces gratuites de troc et d'échange. Des petites annonces pour le troc et l'échange entre particuliers et professionnels. Des annonces pour échanger des maisons, des voitures, de l'immobilier, des véhicules utilitaires, des jouets, des vêtements, des services. Des échanges et troc d'objets neufs ou d'occasion. Du troc facile et gratuit en déposant des annonces rapidement.  </p>
                  <p>Des milliers d'annonces sur toute la Tunisie pour échanger rapidement. Comme le principe des vide-greniers faites du troc et échanges des objets que vous ne voulez plus, échangez les contre de l'aide ou d'autres objets. Déposez gratuitement votre annonce d’échange ou de troc.</p>
                  <Link to='/Apropos'>    <a className="btn uza-btn btn-2 mt-4">
                  A propos de nous
           </a> </Link> 
                
                  {/* Video Area */}
                  
                </div>
              </div>
              
              {/* About Us Content */}
              <div className="col-12 col-md-5">
                <div className="about-us-content mb-80">
                <img className="im2" src="front/img/bg-img/007.png"  />
                </div>
              </div>
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
        
        
              {/* Welcome Content */}
            
           
              </div>
     
      
        {/* ***** Header Area End ***** */}

        
             
        {/* ***** Welcome Area Start ***** */}
       
       
        {/* ***** Services Area Start ***** */}
        <section className="uza-services-area section-padding-80-0">
          <div className="container">
            <div className="row">
              {/* Section Heading */}
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Nos Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Service Area */}
              <div className="col-12 col-lg-3">
                <div className="single-service-area mb-80">
                  {/* Service Icon */}
                  <div className="service-icon">
                  <i class="fas fa-cart-arrow-down"></i>
                  </div>
                  <h5>Echange de Bien</h5>
                  <p>troquer à peu près tout, que ce soit des objets (auto, moto, vélo, téléphone, jeu vidéo, livre, DVD, électroménager, meuble...)</p>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="single-service-area mb-80">
                  {/* Service Icon */}
                  <div className="service-icon">
                  <i class="fas fa-user-friends"></i>
                  </div>
                  <h5>Echange de Service</h5>
                  <p>troquer à peu près tout, que ce soit des services (échanges de compétences, temps: informatique...)</p>
                </div>
              </div>
              {/* Single Service Area */}
              <div className="col-12 col-lg-3">
                <div className="single-service-area mb-80">
                  {/* Service Icon */}
                  <div className="service-icon">
                  <i class="fas fa-hands-helping"></i>
                  </div>
                  <h5>Don</h5>
                  <p>Espace libre pour donner des biens ou services pour les gens qui ont besoins</p>
                </div>
              </div>
              {/* Single Service Area */}
              <div className="col-12 col-lg-3">
                <div className="single-service-area mb-80">
                  {/* Service Icon */}
                  <div className="service-icon">
                  <i class="fas fa-calendar-check"></i>
                  </div>
                  <h5>Evénement</h5>
                  <p>Participe à des evénements pour troquer à peu près tout, que ce soit des objets ou des services</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Services Area End ***** */}
       
        {/* ***** Blog Area Start ***** */}
        <section className="uza-blog-area">
          {/* Background Curve */}
          <div className="blog-bg-curve">
            <img src="front/img/core-img/curve-4.png" alt />
          </div>
        
          <div className="container">
            <div className="row">
              {/* Section Heading */}
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Comment ça marche?</h2>
                  <p>C'est trés simple</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Blog Post */}
              <div className="col-12 col-lg-4">
                <div className="single-blog-post bg-img mb-80" style={{backgroundImage: 'url(front/img/bg-img/8.jpg)'}}>
                  {/* Post Content */}
                  <div className="post-content">
                    <span className="post-date"><center><span>1</span> </center></span>
                    <a href="#" className="post-title">Poster vos produits ou services</a>
                    <p>Trouvez des produits ou services pour le troc et l'échange entre particuliers et professionnels</p>
                   
                  </div>
                </div>
              </div>
              {/* Single Blog Post */}
              <div className="col-12 col-lg-4">
                <div className="single-blog-post bg-img mb-80" style={{backgroundImage: 'url(front/img/bg-img/9.jpg)'}}>
                  {/* Post Content */}
                  <div className="post-content">
                  <span className="post-date"><center><span>2</span> </center></span>
                    <a href="#" className="post-title">Trouvez autre produits ou services</a>
                    <p>Chercher des produits ou services pour le troc et l'échange entre particuliers et professionnels</p>
                    
                  </div>
                </div>
              </div>
              {/* Single Blog Post */}
              <div className="col-12 col-lg-4">
                <div className="single-blog-post bg-img mb-80" style={{backgroundImage: 'url(front/img/bg-img/10.jpg)'}}>
                  {/* Post Content */}
                  <div className="post-content">
                  <span className="post-date"><center><span>3</span> </center></span>
                    <a href="#" className="post-title">C’est fait!</a>
                    <p>Une fois que vous avez trouvé votre besoins, vous allez contacter des autres personnes toute simplement
                        avec télephone
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
 
export default about;
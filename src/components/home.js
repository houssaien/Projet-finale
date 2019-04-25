import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import logo2 from './005.png';
import logome from './123.png';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
  
  import NavbarPage from './navbarPage'
class home extends Component {
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
                    <br/><br/><br/><br/><br/><br/><br/>
              <Container>
              <Row>
          <Col xs="8"><div>
          <br/>
              
              <img src="front/img/core-img/logof.png" width="200px" height="150px" />
          <br/>  <br/>  <br/>
                        <h1 className="title3">Site tunisien d'échange de produit et service</h1>
                        <br/>
                        <br/>
                        <h3 className="title32">Simple, rapide et efficace</h3>
                        <br/><br/>
                        <Link to='/Apropos'> 
            <a  className="btn uza-btn btn-2" data-animation="fadeInUp" data-delay="700ms">Nos Services</a>
            </Link>
                      </div>
                      
                      
                      </Col>
          <Col xs="4" >
           <img className="img2" src="front/img/bg-img/006.png"  />
           
        
          </Col>
        </Row>
              </Container>






              <header class="header-area">
              <NavbarPage/>
           
        </header>
        
        
              {/* Welcome Content */}
            
           
              </div>
     
      
        {/* ***** Header Area End ***** */}

       
             
      
         
        {/* ***** Welcome Area End ***** */}
        {/* ***** About Us Area Start ***** */}
       
        {/* ***** About Us Area End ***** */}
        {/* ***** Services Area Start ***** */}
        <section className="uza-services-area">
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
        <center>
          <br/> <br/>
        <MDBContainer className="aboutme">
      <MDBCarousel activeItem={1} length={2} slide={true} showControls={false} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
            <img src={logome}  class="img-fluid z-depth-1 rounded-circle" width="200px" height="200px"
      alt="Responsive image" />
      <br/>
      <p class="lead">
           Plus d’une dizaine de sites propose de faire de l’échange de biens. <br/>
           Avant l’échange était uniquement possible sous forme d’abonnement annuel payant, aujourd’hui les règles ont changé. De nouveaux sites tels que Badeli proposent de faire des échanges de biens totalement gratuit.
           
</p>
<p>Ben salem Houssaien | Développeur de site web</p>
<br/>
<br/>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <img src={logome}  class="img-fluid z-depth-1 rounded-circle" width="200px" height="200px"
      alt="Responsive image" />
      <br/>
      <p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>

<p>Nouira Insaf | Développeuse de site web</p>
<br/>
<br/>
            </MDBCarouselItem>
           
           
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    <br/> <br/>
    </center>
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
 
export default home;
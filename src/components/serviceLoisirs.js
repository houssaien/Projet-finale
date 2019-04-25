import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import NavbarPage from './navbarPage'


import ItemService from './item-services-loisirs'
import './listeservices.css'

class ServiceLoisirs extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
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
       <header class="header-area">
     
      <NavbarPage/>

</header>

<section>
       <div>
       
        <div className="single-welcome-slide">
              {/* Background Curve */}
              <div className="background-curve">
                <img src="front/img/core-img/curve-1.png" alt/>
              </div>
                    
              
                    <div class="breadcrumb-area">
        <div class="container h-100">
            <div class="row h-100 align-items-end">
                <div class="col-12">
                    <div class="breadcumb--con">
        
                        <h2 class="title">Echange de Service</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a><Link to='/'>
                                 <i class="fa fa-home"></i>Acceuil</Link></a></li>
                                <li class="breadcrumb-item active" aria-current="page"><Link to='/Service'>
                                Echange de Service
            </Link></li>
                            </ol>
                        </nav>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                       
                
                        <Container>
          <Row>
      <Col sm="4">
      <ListGroup>
      <ListGroupItem active tag="a"action><h2>Nos Catégories</h2></ListGroupItem>
      <ListGroupItem tag="a"action> <Link to='/Service_Bricolage'>Bricolage</Link></ListGroupItem>
      <ListGroupItem tag="a"action><Link to='/Service_Beaute'>Beauté Bien-être</Link></ListGroupItem>
      <ListGroupItem tag="a"action><Link to='/Service_Travail'>Travail</Link></ListGroupItem>
      <ListGroupItem  tag="a"action><Link to='/Service_Aide'>Aide à la personne</Link></ListGroupItem>
      <ListGroupItem tag="a"action><Link to='/Service_Cours'>Cours</Link></ListGroupItem>
      <ListGroupItem tag="a"action><Link to='/Service_Loisirs'>Loisirs</Link></ListGroupItem>
      <ListGroupItem tag="a"action>Autres</ListGroupItem>
      
    </ListGroup>
                  </Col>
      <Col sm="8"> 
      <div className="liste-service">
      {
          
          services.map((el,index)=>
          
         
       <ItemService key={index} item={el} num={index}/>
     
   
   )}  
   </div>
      </Col>
    </Row>
          </Container>
   </div>
          </div>          
           

       
        <br/>


</section> 


        
             
     
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
 
const mapStateToProps=(state)=>
{  return {
    services:state.reducerservices
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
        updateServiceReducer:services=>
        {
            dispatch({
                type:'UPDATE_SERVICE',
                services
            })
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ServiceLoisirs);
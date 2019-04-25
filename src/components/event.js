import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import {connect} from 'react-redux'
import axios from 'axios'
import './event.css'
import NavbarPage from './navbarPage'
import ItemEventFront from './itemEvents-front'
import { MDBCol, MDBIcon } from "mdbreact";
class Events extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          keyword:''
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      componentDidMount=()=>{
        axios.get('/get-event').then((res)=>this.props.updateEventReducer(res.data))
    }
    handle_search  = (event) =>
    {
        
   
       this.setState({keyword:event.target.value})
       axios.get('/get-event').then((res)=> this.props.search(res.data,this.state.keyword))
      

    }
    render() { 
      const {events}=this.props
        return ( 
            <div>
               <header class="header-area">
     
        <NavbarPage/>

</header>
       
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
                        <h2 class="title">Evénements</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a><Link to='/'>
                                 <i class="fa fa-home"></i>Acceuil</Link></a></li>
                                <li class="breadcrumb-item active" aria-current="page"><Link to='/Evenement'>
                                Evénements
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

                    
                    <Col xs="8" >
                    <MDBCol >
       <form className="form-inline mt-4 mb-4">
         <MDBIcon icon="search" />
         <input className="form-control form-control-sm ml-3 w-75" 
                type="text"
                placeholder="Search" 
                aria-label="Search" 
                value={this.state.keyword}
                onChange={this.handle_search}/>
    </form>
    </MDBCol>
    </Col></Row></Container>
          <div className=" container Liste-event" >
         
          {
             events.map((el,index)=>
          <ItemEventFront key={index} item={el} num={index} />
      )} </div> 
          
         
             
        

      
        
        
         
     
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
            </div>
         );
    }
}
const mapStateToProps=(state)=>
{  return {
    events:state.reducerevents
}
}

const mapDispatchToProps=(dispatch)=>
{
  return {
    search: (events,keyword) =>
  {
      dispatch({
          type : 'SEARCH-EVENTS',
          events,
          keyword
          
      })
  },
   
      updateEventReducer:events=>
        {
            dispatch({
                type:'UPDATE_EVENT',
                events
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Events);
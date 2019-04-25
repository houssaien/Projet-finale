import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import { MDBCol, MDBIcon } from "mdbreact";
    import ItemDon from './item-don-front'
    import axios from 'axios'
      import {connect} from 'react-redux'
      import NavbarPage from './navbarPage'
class Don extends Component {
  constructor(props)
  {
    
      super(props)
      this.state={
        activePage: 1,
        keyword:''
      }
  }

  handle_search=(event) =>
  {
      console.log(this.props.biens)
    
     this.setState({keyword:event.target.value})
     axios.get('/get-dons').then((res)=>this.props.search(res.data,this.state.keyword))
    
}
  componentDidMount=()=>{
      axios.get('/get-dons').then((res)=>this.props.updateDonReducer(res.data))
  }
  
  

  
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() { 
      const {dons}=this.props
        return ( 
            <div>
       
       
        <div className="single-welcome-slide">
              {/* Background Curve */}
              <div className="background-curve">
                <img src="front/img/core-img/curve-1.png"/>
              </div>
                    
              <br/> <br/> <br/> <br/> <br/>
                    <div class="breadcrumb-area">
        <div class="container h-100">
            <div class="row h-100 align-items-end">
                <div class="col-12">
                    <div class="breadcumb--con">
                    <h2 class="title">Don</h2>
                    
                    <br/>
                        <h2 class="title"></h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a><Link to='/'>
                                 <i class="fa fa-home"></i>Acceuil</Link></a></li>
                                <li class="breadcrumb-item active" aria-current="page"><Link to='/Don'>
              Don
            </Link></li>
                            </ol>
                            <form className="form-inline mt-4 mb-4">
         <MDBIcon icon="search" />
         <input className="form-control form-control-sm ml-3 w-75" 
                type="text"
                placeholder="Chercher Don" 
                aria-label="Search" 
                value={this.state.keyword}
                onChange={this.handle_search}/>
</form>
                        </nav>
                    </div>
                </div>
                
                <div class="col-8 immm">
               
                
                   {
               dons.map((el,index)=>
            <ItemDon key={index} item={el} num={index}/>
        )}  </div>
           <div class="col-4"></div>
            </div>
        </div>

       
    
    </div>
                    <section className="uza-about-us-area">
          <div className="container">
           
          </div>
         
        
        </section>

              <header class="header-area">
     <NavbarPage/>
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
 

const mapStateToProps=(state)=>
{  return {
    dons:state.reducersdons
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
      search: (dons,keyword) =>
      {
          dispatch({
              type : 'SEARCH_Don',
              dons,
              keyword
          })
  },
        updateDonReducer:dons=>
        {
            dispatch({
                type:'UPDATE_DON',
                dons
            })
        }
        
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Don);
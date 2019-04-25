import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import { MDBCol, MDBIcon } from "mdbreact";
import NavbarPage from './navbarPage'


    import {connect} from 'react-redux'
    import ItemService from './itemservices-front'
    import Footer from './footer'

import axios from 'axios'

class Service extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          activePage: 1,
          keyword:''
        };
      }
    
    
      componentDidMount=()=>{
          axios.get('/get-service').then((res)=>this.props.updateServiceReducer(res.data))
      }
      
      handle_search  = (event) =>
      {
          
     
         this.setState({keyword:event.target.value})
         axios.get('/get-service').then((res)=> this.props.search(res.data,this.state.keyword))
        

      }
    
    
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() { 
      const {services}=this.props
      console.log(services)
        return ( 
            <div>
              
              
              {/* Background Curve */}
              

               <header class="header-area">
     <NavbarPage/>

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
              <Row>
          <Col xs="12" sm="4">
          <div>
 

      
      </div>
          <ListGroup>
          <ListGroupItem className="categ" tag="a"action><h2>Nos Catégories</h2></ListGroupItem>
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
                          
                  <div className="immm"> 
          {
          
          (services).map((el,index)=>
               
              
            <ItemService key={index} item={el} num={index}/>
          
        
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
      search: (services,keyword) =>
    {
        dispatch({
            type : 'SEARCH-SERVICE',
            services,
            keyword
            
        })
    },
    updateServiceReducer:services=>
        {
            dispatch({
                type:'UPDATE_SERVICE',
                services
            })
        }
        
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Service);
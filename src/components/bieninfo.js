import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom'



    import {connect} from 'react-redux'
    import BienItem from './item-bien-info'
    import Footer from './footer'

import axios from 'axios'
import NavbarPage from './navbarPage'

class Bieninfo extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          activePage: 1
        };
      }
    
    
      componentDidMount=()=>{
          axios.get('/get-biens').then((res)=>this.props.updateBienReducer(res.data))
      }
      
    
    
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() { 
      const {biens}=this.props
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
                <h2 class="title">Echange de Bien</h2>
                    
                    <br/>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a><Link to='/'>
                             <i class="fa fa-home"></i>Acceuil</Link></a></li>
                            <li class="breadcrumb-item active" aria-current="page"><Link to='/Bien'>
                            Echange de Bien
        </Link></li>    <li class="breadcrumb-item " aria-current="page">
        Informatique et Multimedia
        </li>
                        </ol>
                    </nav>

                    
                </div>
            </div>
        </div>
    </div>
    </div>
              <Row>
          <Col sm="4">
          <ListGroup>
          <ListGroupItem className="categ" tag="a"action><h2>Nos Catégories</h2></ListGroupItem>
          <ListGroupItem tag="a"action><Link to='/Bien_Immobilier'>Immobilier</Link></ListGroupItem>   
          <ListGroupItem tag="a"action><Link to='/Bien_Véhicules'>Véhicules</Link></ListGroupItem>   
          <ListGroupItem tag="a"action><Link to='/Bien_Maison'>Pour la Maison et Jardin</Link></ListGroupItem>
          <ListGroupItem tag="a"action><Link to='/Bien_Loisir'>Loisirs et Divertissement</Link></ListGroupItem>
          <ListGroupItem tag="a"action><Link to='/Bien_Informatique'>Informatique et Multimedia</Link></ListGroupItem>
          <ListGroupItem tag="a"action><Link to='/Bien_Habillement'>Habillement et Bien Etre</Link></ListGroupItem> 
          <ListGroupItem tag="a"action><Link to='/Bien_Autre'>Autres</Link></ListGroupItem>  
        </ListGroup> 
         
                      </Col>
                          
                      <Col xs="8" >   
                          
                          <div className="immm"> 
          {
          
               biens.map((el,index)=>
               
              
            <BienItem key={index} item={el} num={index}/>
          
        
        )}  
        </div></Col>
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
    biens:state.reducersbiens
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
        updateBienReducer:biens=>
        {
            dispatch({
                type:'UPDATE_BIEN',
                biens
            })
        }
        
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Bieninfo);
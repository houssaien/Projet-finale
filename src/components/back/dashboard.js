import React, { Component } from 'react';
import SideBar from './sideBar';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { MDBBtn, MDBBtnGroup } from "mdbreact";
import {Link} from 'react-router-dom'
import './dashboard.css'

class Dashboard extends Component {
    state = {  }
    render() { 
        return ( <div >
             <SideBar/>
           
             
        <Row>
          <Col>


     
      <div className="admin-dashboard">
      <br/>
      <center><div class="hit-the-floor"><h1>Bienvenu, Admin</h1></div></center>
      <center>
        <br/>
      <MDBBtnGroup>
      <Row>
          <Col   sm={{ size: 6, offset: 1 }}>
      
           <Link to='./Bien-Management'> <MDBBtn color="light" size="lg" className="button-dashboard b1">
            <i className="fab fa-product-hunt link-admin"></i>
            <br/>
            BIEN
            </MDBBtn>
            </Link>
            </Col>
            <Col    sm={{ size: 6, offset: 1 }}>
      
            <Link to='./Liste-services'> <MDBBtn color="light" size="lg" className="button-dashboard b2">
            <i className="fas fa-archive  link-admin"></i>
            <br/>
            SERVICE
            </MDBBtn>
            </Link>
            </Col>
            </Row>
            <Row>
            <Col   sm={{ size: 6, offset: 1 }}>
            <Link to='./Liste-events'> <MDBBtn color="light" size="lg" className="button-dashboard b3">
            <i className="fas fa-calendar-alt  link-admin"></i>
            <br/>
            EVENTS
            </MDBBtn>
            </Link>
            </Col>
            <Col  sm={{ size: 6, offset: 1 }}>
            <Link to='./Liste-dons'> <MDBBtn color="light" size="lg" className="button-dashboard b4">
            <i className="fas fa-hands-helping  link-admin"></i>
            <br/>
            DON
            </MDBBtn>
            </Link>
            </Col>
            </Row>
        </MDBBtnGroup>
        </center>
        </div>
      </Col>
      </Row>
      
    </div>
 
            
         );
    }
}
 
export default Dashboard;
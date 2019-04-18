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
      <center><h1>Bienvenu, Admin</h1></center>
      <MDBBtnGroup>
           <Link to='./add-user'> <MDBBtn color="light" size="lg" className="button-dashboard">
            <i className="fas fa-user-check  link-admin"></i>
            <br/>
            BIEN
            </MDBBtn>
            </Link>
            <Link to='./add-user'> <MDBBtn color="light" size="lg" className="button-dashboard">
            <i className="fas fa-user-check  link-admin"></i>
            <br/>
            SERVICE
            </MDBBtn>
            </Link>
            <Link to='./add-user'> <MDBBtn color="light" size="lg" className="button-dashboard">
            <i className="fas fa-user-check  link-admin"></i>
            <br/>
            EVENTS
            </MDBBtn>
            </Link>
            <Link to='./add-user'> <MDBBtn color="light" size="lg" className="button-dashboard">
            <i className="fas fa-user-check  link-admin"></i>
            <br/>
            DON
            </MDBBtn>
            </Link>
        </MDBBtnGroup>
        </div>
      </Col>
      </Row>
      
    </div>
 
            
         );
    }
}
 
export default Dashboard;
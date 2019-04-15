import React from "react";
import { slide as Menu } from "react-burger-menu";
import { MDBNavbar, MDBNavbarNav, MDBNavItem,  MDBFormInline,} from "mdbreact";
import {Link} from 'react-router-dom'

 

 import './sidebar.css' 
import Logo from  "./images/logof.png"

export default props => {
  
  return ( <div>
    <MDBNavbar  light expand="md"  className='navbar-admin' >
    <MDBNavbarNav left>

            <MDBNavItem active className='navbar-admin-left'>
              <Link to="/notifications"><i class="fas fa-bell notif"></i></Link>
            </MDBNavItem>
            {/* <MDBNavItem>
              <Link to="/compte-our-admin"className='admin-name' >Admin-Compte</Link>
            </MDBNavItem>
            */}
           
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
          </MDBNavbar>
    {/* // Pass on our props */}
    
    <Menu {...props} >
        <img className='sidebar-logo' src={Logo} alt="/" />

    
        <a className="menu-item" href="/Dashbord">
      <i class="fas fa-home icon-sidebar"></i>
        Dashbord
      </a>

      <a className="menu-item" href="/User-Management">
      <i class="fas fa-chalkboard-teacher icon-sidebar"></i>
      Users Management
      </a>

      <a className="menu-item" href="/Liste-services">
      <i class="fas fa-archive icon-sidebar"></i>
      Services Management
      </a>

      <a className="menu-item" href="/ProductManagement">
      <i class="fab fa-product-hunt icon-sidebar"></i>
      Products Management
      </a>
      <a className="menu-item" href="/Events">
      <i class="fas fa-calendar-alt icon-sidebar"></i>
       Events
      </a>
      <a className="menu-item" href="/Don">
      <i class="fas fa-hands-helping icon-sidebar"></i>   
          Don
      </a>
    </Menu>
    </div>
  );
};
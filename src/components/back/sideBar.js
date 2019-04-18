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
              
            </MDBNavItem>
            {/* <MDBNavItem>
              <Link to="/compte-our-admin"className='admin-name' >Admin-Compte</Link>
            </MDBNavItem>
            */}
           
          </MDBNavbarNav>
          <MDBNavbarNav center>              <img src={Logo} alt="/" width="100px" height="150px" />
</MDBNavbarNav>
          <MDBNavbarNav right>
         
            <MDBNavItem>
              <MDBFormInline waves>
              <Link to="/notifications"><i class="fas fa-bell notif" width="10px" height="20px"></i></Link>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
          </MDBNavbar>
    {/* // Pass on our props */}
    
    <Menu {...props} >
        <img className='sidebar-logo' src={Logo} alt="/" />

        <div >
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  
                </div>
                <br/><br/>
        <a className="menu-item" href="/back">
      <i class="fas fa-home icon-sidebar"></i>
        Dashbord
      </a>

      <a className="menu-item" href="/User-Management">
      <i class="fas fa-chalkboard-teacher icon-sidebar"></i>
      Gestion Users 
      </a>

      <a className="menu-item" href="/Liste-services">
      <i class="fas fa-archive icon-sidebar"></i>
      Gestion Services 
      </a>

      <a className="menu-item" href="/Bien-Management">
      <i class="fab fa-product-hunt icon-sidebar"></i>
      Gestion Biens
      </a>
      <a className="menu-item" href="/Liste-events">
      <i class="fas fa-calendar-alt icon-sidebar"></i>
       Events
      </a>
      <a className="menu-item" href="/Liste-dons">
      <i class="fas fa-hands-helping icon-sidebar"></i>   
         Gestion Dons
      </a>
    </Menu>
    </div>
  );
};
import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './home'
import Bien from './bien'
import Contact from './contact'
import Donation from './donation'
import Event from './event'
import Service from './service'
import About from './about'
import Login from './login'
import Registre from './registre'
import Monbien from './monbien'
import Monservice from './monservice'
import Mondonation from './mondonation'
import Monprofil from './monprofil'


import DetailBien from './back/detail-bien';
import AddBien from './back/add-bien';
import UserManagement from './back/user-management';
import BienManagement from './back/bien-management';
import AddUser   from './back/add-user'
import Dashboard from './back/dashboard'
import EditUser from './back/edituser'
import SideBar from './back/sideBar'
import ServiceManagement from './back/service-management'
import AddService from './back/add-service'
import  EventManagement from './back/events-management'
import EditBien from './back/editBien'
import EditService from './back/edit-service'
import DetailService from './back/detail-service'
import DetailUser from './back/detail-user'

import DonManagement from './back/don-management'
import AddDon from './back/add-don'
import EditDon from './back/edit-don'
import  DetailDon from './back/detail-don'
import AddEvent from './back/add-event'
import EditEvent from './back/edit-event'
import DetailEvent from './back/detail-event'

class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Home}/>
             <Route exact path='/Bien' component={Bien}/>
             <Route exact path='/Service' component={Service}/>
             <Route exact path='/Contact' component={Contact}/>
             <Route exact path='/Don' component={Donation}/>
             <Route exact path='/Evenement' component={Event}/>
             <Route exact path='/Apropos' component={About}/>  
             <Route exact path='/Identifier' component={Login}/>
             <Route exact path='/Registre' component={Registre}/>
             <Route exact path='/Monbien' component={Monbien}/>
             <Route exact path='/Monservice' component={Monservice}/>
             <Route exact path='/Mondonation' component={Mondonation}/>
             <Route exact path='/Monprofil' component={Monprofil}/>
            
             

             <Route exact path="/editbien/:_id" 
             render={props=><EditBien _id={props.match.params._id}/>}/>

             <Route exact path="/detail-bien/:_id" render={props=><DetailBien _id={props.match.params._id}/>}/>
             <Route exact path="/add-bien" component={AddBien} />
            <Route exact path="/backend" component={SideBar} />
            <Route exact path="/back" component={Dashboard} />
            <Route  path="/user-management" component={UserManagement} />
            <Route  path="/Bien-Management" component={BienManagement} />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/edit-user" component={EditUser} />
            <Route exact path="/detail-user/:_id" render={props=><DetailUser _id={props.match.params._id}/>}/>


            <Route exact path="/Liste-services" component={ServiceManagement}/>
            <Route exact path="/add-service" component={AddService}/>
            <Route exact path="/editservice/:_id" 
             render={props=><EditService _id={props.match.params._id}/>}/>
             <Route exact path="/detail-service/:_id" render={props=><DetailService _id={props.match.params._id}/>}/>


             <Route exact path="/Liste-dons" component={DonManagement}/>
             <Route exact path="/add-don" component={AddDon}/>
             <Route exact path="/editdon/:_id" 
             render={props=><EditDon _id={props.match.params._id}/>}/>
            <Route exact path="/detail-don/:_id" render={props=><DetailDon _id={props.match.params._id}/>}/> 


            <Route exact path="/Liste-events" component={EventManagement}/>
            <Route exact path="/add-event" component={AddEvent}/>
            <Route exact path="/edit-event/:_id" 
             render={props=><EditEvent _id={props.match.params._id}/>}/>
             <Route exact path="/detail-event/:_id" render={props=><DetailEvent _id={props.match.params._id}/>}/>

            </div>
         );
    }
}
 
export default Routes;
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



import UserManagement from './back/user-management';
import AddUser   from './back/add-user'
import Dashboard from './back/dashboard'
import EditUser from './back/edituser'
import SideBar from './back/sideBar'


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
            
       
             <Route exact path="/backend" component={SideBar} />
             <Route exact path="/back" component={Dashboard} />
              <Route  path="/user-management" component={UserManagement} />
              <Route exact path="/add-user" component={AddUser} />
                <Route exact path="/edit-user" component={EditUser} />
               
            </div>
         );
    }
}
 
export default Routes;
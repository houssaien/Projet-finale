import React,{Component} from 'react'; 
import {Route} from 'react-router-dom';



import UserManagement from './user-management';
import AddUser   from './add-user'
import Dashboard from './dashboard'
import EditUser from './edituser'


class Routes extends Component {
    
    
   
      render() { 

        return (
           
                
            <div>
                <Route exact path="/" component={Dashboard} />
                <Route  path="/user-management" component={UserManagement} />
                <Route exact path="/add-user" component={AddUser} />
                <Route exact path="/edit-user" component={EditUser} />

                {/* <Route  path="/contact-list" component={ContactList} /> */}
            </div>
            
            
          );
    }
}
 
export default Routes;
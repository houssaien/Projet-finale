import React, { Component } from 'react';
import {connect} from 'react-redux'
import ItemUser from './item-user'

class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {users}=this.props
        return ( 
            <div>
        <div className='liste-user'>
        {
            users.map((el,index)=><ItemUser item={el} key={index} id={index}/>)
        }
         </div>         
         </div> 
        );
    }
} 

const mapStateToProps=(state)=>
{  return {
    users:state.reducerusers
}
}
 
export default connect(mapStateToProps)(ListUser);
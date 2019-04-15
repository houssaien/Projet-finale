import React, { Component } from 'react';
import {connect} from 'react-redux'

import Itemservices from './itemservices'
import './listeservices.css'

class ListServices extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {service}=this.props
        return ( 
            
      
        <div className='liste-service'>
        {
            service.map((el,index)=><Itemservices item={el} key={index} id={index}/>)
        }
         </div>         
          
        );
    }
} 

const mapStateToProps=(state)=>
{  return {
    service:state.reducerservices
}
}
 
export default connect(mapStateToProps)(ListServices);
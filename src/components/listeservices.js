import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

import Itemservices from './itemservices'
import './listeservices.css'

class ListServices extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount=()=>{
        axios.get('/get-service').then((res)=>this.props.updateServiceReducer(res.data))
    }
    render() { 
        const {services}=this.props
        return ( 
            
      
        <div className='liste-service'>
        {
            services.map((el,index)=><Itemservices item={el} key={index} id={index}/>)
        }
         </div>         
          
        );
    }
} 

const mapStateToProps=(state)=>
{  return {
    services:state.reducerservices
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
      updateServiceReducer:confirmservice=>
        {
            dispatch({
                type:'CONFIRM_SERVICE',
                confirmservice
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(ListServices);
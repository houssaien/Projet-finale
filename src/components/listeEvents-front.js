import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

import ItemEvents from './itemEvents-front'
import './listeservices.css'

class ListEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount=()=>{
        axios.get('/get-event').then((res)=>this.props.updateEventReducer(res.data))
    }
    render() { 
        const {events}=this.props
        return ( 
            
      
        <div className='liste-service'>
        {
            events.map((el,index)=><ItemEvents item={el} key={index} id={index}/>)
        }
         </div>         
          
        );
    }
} 

const mapStateToProps=(state)=>
{  return {
    events:state.reducerevents
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
      updateEventReducer:events=>
        {
            dispatch({
                type:'UPDATE_EVENT',
                events
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(ListEvents);
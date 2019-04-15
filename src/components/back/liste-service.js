import React,{Component} from 'react'
import { Container, Row, Col } from 'reactstrap';

import {connect} from 'react-redux'

import ItemService from './item-serviceAdmin'

 class ListeService extends Component {
   state = {  }
   render() { 
    const {serviceadmin}=this.props
     return ( 
       <div className="table-service">
     
  <div className='liste-service'>
        {
            serviceadmin.map((el,index)=><ItemService item={el} key={index} id={index}/>)
        }
         </div>    
      </div>);
   }
 }
 const mapStateToProps=(state)=>
{  return {
    serviceadmin:state.reducerservices
}
}
  
 export default connect(mapStateToProps)(ListeService);

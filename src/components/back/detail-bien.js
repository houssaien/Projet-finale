import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import axios from 'axios'
import './detail.css'
import SideBar from './sideBar';
class DetailBien extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            title:"",
            description:'',
            imageUrl:'',
            location:''
        }
    }

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    componentDidMount=()=>

    {
        this.setState({
            ...this.props.biens.filter(el=>el._id===this.props._id)[0]
        })
    }
    editBien=()=>
    {
       axios.put(`/getbien/${this.state._id}`,{
        title:this.state.title,
        description:this.state.description,
        imageUrl:this.state.imageUrl,
        location:this.state.location
     }) 
      .then(()=>this.props.detailBienReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        console.log(this.props.biens)
        return ( 
            
            <div>
                <SideBar/>
            <Container>

                <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <div className='detail-container'>
            <center><h1>Détail Bien</h1></center>

           
            <h5>title :</h5>
              {this.state.title}
              <br/>
            <h5> description :</h5>
             {this.state.description}
             <br/>
             <h5>imageUrl :</h5>
             {this.state.imageUrl}
             <br/>
             <h5>location :</h5>{this.state.location}
             
             <br/>

             
             <Link to='/Bien-Management'>
             <Button onClick={this.editBien} color="info" className="button-detail">Modifier Bien</Button>{' '}
             </Link>
            

             </div>
             </Col>
             </Row>
             </Container>
             </div>
         );
    }
}

const mapStateToProps=(state)=>
{
    return {
        biens:state.reducersbiens
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        detailBienReducer:detailbien=>
        {
            dispatch({
                type:'DETAIL_BIEN',
                detailbien
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(DetailBien);
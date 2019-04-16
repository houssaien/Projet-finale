import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
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
            <div className='add-contact-container'>
            <h1>Détail Bien</h1>

           
            title :
              {this.state.title}
             description :
             {this.state.description}
             imageUrl :
             {this.state.imageUrl}
             location :
             {this.state.location}

             
             <Link to='/Bien-Management'>
             <button onClick={this.editBien}>Modifier Bien</button>
             </Link>
            

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
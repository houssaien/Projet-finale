import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class EditBien extends Component {
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
       axios.put(`/edit-bien/${this.state._id}`,{
        title:this.state.title,
        description:this.state.description,
        imageUrl:this.state.imageUrl,
        location:this.state.location
     }) 
      .then(()=>this.props.editBienReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        console.log(this.props.biens)
        return ( 
            <div className='add-contact-container'>
            <h1>Modifier Bien</h1>
            title :
             <input  type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
             description :
             <input  type='text' name='description' value={this.state.description} onChange={this.handleChange}/>
             imageUrl :
             <input  type='text' name='imageUrl' value={this.state.imageUrl} onChange={this.handleChange}/>
             location :
             <input  type='text' name='location' value={this.state.location} onChange={this.handleChange}/>
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
        editBienReducer:editbien=>
        {
            dispatch({
                type:'EDIT_BIEN',
                editbien
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(EditBien);
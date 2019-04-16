import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
class ModalRemove extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  deleteService=()=>
    {  
    const {ItemService} = this.props
    axios.delete(`/delete-service/${ItemService._id}`)   
  .then(()=>this.props.deleteServiceReducer(ItemService._id)) 
  .catch((err)=>alert(err)) 
    }

  render() {
    const {ItemService} = this.props
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
      

          <ModalHeader toggle={this.toggle}> Supprimer un Service</ModalHeader>
          <ModalBody>
             Voules vous vraiment supprimer ce service ?
             {ItemService.title}
             {ItemService._id}
          </ModalBody>
          <ModalFooter>
          <Link to='/Liste-services'> 
            <Button color="primary" onClick={()=>{this.toggle();this.deleteService()}}>Supprimer</Button>{' '}
          </Link>
          <Link to='/Liste-services'>
            <Button color="secondary" onClick={this.toggle}>Fermer</Button>
        </Link>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteServiceReducer:_id=>
        {
            dispatch({
                type:'REMOVE_SERVICE',
                _id
            })
        }
    }
}

export default connect(null,mapDispatchToProps)( ModalRemove);
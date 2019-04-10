import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import SideBar from './sideBar';
import './formuser.css'
const AddUser = () => {
  return (
    <div>
       <SideBar/>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="form-user">
          <form>
            <p className="h5 text-center mb-4">Add User</p>
            <div className="grey-text">
              <MDBInput
                label=" name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              
              <MDBInput
                label=" email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Confirm  email"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label=" password"
                icon="lock"
                group
                type="password"
                validate
              />
              <MDBInput
                label="Location"
                icon="home"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary">Add</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default AddUser;
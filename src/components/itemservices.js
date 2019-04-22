import React,{Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
class Itemservices  extends Component {
  render(){ 
    const {item}=this.props
 return (
    <MDBCol>
      <MDBCard style={{ width: "16rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardText>
            {item.description}
          </MDBCardText>
          <MDBCardText>
            {item.date}
          </MDBCardText>
          <MDBCardText>
            {item.location}
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}
}
export default Itemservices;
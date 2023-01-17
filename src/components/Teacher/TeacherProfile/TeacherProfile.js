import React, { useContext } from 'react';
import './TeacherProfile.css'

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { userContext } from '../../../App';
const TeacherProfile = () => {
 
    const [loggedinUser,setloggedinUser]=useContext(userContext);
    const {username,school,mobile,image,email,address}=loggedinUser;
    
  
    return (
        <div className='profileBackground'>
          
            
             <section className="vh-100 profileBackground" style={{ backgroundColor: '#f4f5f7' }}>
                     
                <MDBContainer className="py-5 h-100"  >
                    <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                        <MDBRow className="g-0">
                            <MDBCol md="4" className="gradient-custom text-center text-white"
                            style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                            <MDBCardImage src={image} 
                                alt="Avatar" className="my-5" style={{ width: '150px',borderRadius:'50%' }} fluid />
                            <MDBTypography tag="h5">{username}</MDBTypography>
                            <MDBCardText>{school}</MDBCardText>
                            <MDBIcon far icon="edit mb-5" />
                            </MDBCol>
                            <MDBCol md="8">
                            <MDBCardBody className="p-4">
                                <MDBTypography tag="h6">Information</MDBTypography>
                                <hr className="mt-0 mb-4" />
                                <MDBRow className="pt-1">
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">Email</MDBTypography>
                                    <MDBCardText className="text-muted">{email}</MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">Phone</MDBTypography>
                                    <MDBCardText className="text-muted">{mobile}</MDBCardText>
                                </MDBCol>
                                </MDBRow>

                                <MDBTypography tag="h6">Information</MDBTypography>
                                <hr className="mt-0 mb-4" />
                                <MDBRow className="pt-1">
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">Address</MDBTypography>
                                    <MDBCardText className="text-muted">{address}</MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">Profession</MDBTypography>
                                    <MDBCardText className="text-muted">Teacher</MDBCardText>
                                </MDBCol>
                                </MDBRow>

                                <div className="d-flex justify-content-start">
                                <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                                <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                                <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                                </div>
                            </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                        </MDBCard>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
    </section>
        </div>
    );
};


export default TeacherProfile;
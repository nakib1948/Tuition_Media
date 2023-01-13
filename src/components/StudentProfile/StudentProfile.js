import React, { useContext } from 'react';
import './StudentProfile.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
const StudentProfile = () => {
    const navigate = useNavigate();
    const [loggedinUser,setloggedinUser]=useContext(userContext)
    const check=false;
    function handleClick(event) {
        check=true;
           
        navigate('/studentlogin')    
   }
    return (
        <div className='profileBackground'>
             <Navbar  bg="dark" variant="dark">
                <Container style={{marginLeft:'40vw'}} >
                <Navbar.Brand href="#home">
                <Button  size="sm" variant="primary"  active>
                       Update Profile
                    </Button>
                </Navbar.Brand>
                <Nav style={{paddingLeft:'3vw'}}  className="me-auto">
                   
                    <Button onClick={handleClick} size="sm" variant="primary"  active>
                        Logout
                    </Button>
                 
                </Nav>
                </Container>
            </Navbar>
             <section className="vh-100 profileBackground" style={{ backgroundColor: '#f4f5f7' }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                        <MDBRow className="g-0">
                            <MDBCol md="4" className="gradient-custom text-center text-white"
                            style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                            <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                            <MDBCardText>Web Designer</MDBCardText>
                            <MDBIcon far icon="edit mb-5" />
                            </MDBCol>
                            <MDBCol md="8">
                            <MDBCardBody className="p-4">
                                <MDBTypography tag="h6">Information</MDBTypography>
                                <hr className="mt-0 mb-4" />
                                <MDBRow className="pt-1">
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">Email</MDBTypography>
                                    <MDBCardText className="text-muted">info@example.com</MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">Phone</MDBTypography>
                                    <MDBCardText className="text-muted">123 456 789</MDBCardText>
                                </MDBCol>
                                </MDBRow>

                                <MDBTypography tag="h6">Information</MDBTypography>
                                <hr className="mt-0 mb-4" />
                                <MDBRow className="pt-1">
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">Email</MDBTypography>
                                    <MDBCardText className="text-muted">info@example.com</MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">Phone</MDBTypography>
                                    <MDBCardText className="text-muted">123 456 789</MDBCardText>
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

export default StudentProfile;
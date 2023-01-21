import React, { useContext } from 'react';
import './StudentProfile.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
const StudentProfile = () => {
    const navigate = useNavigate();
    const [loggedinUser,setloggedinUser]=useContext(userContext);
    const {username,school,mobile,image,email,address}=loggedinUser;
    let check=false;
    function handleClick(event) {
        check=true;
        setloggedinUser({})
        if(check){
        navigate('/studentlogin')    
        }
   }
   function handleClick1(){
       navigate('/studenthistory')
   }
   function handleClick2(){
    navigate('/updateprofile')
}
    return (
        <div className='profileBackground'>
          
             <Navbar  bg="light" variant="dark">
                <Container style={{marginLeft:'20vw'}} >
                <Navbar.Brand href="#home">
              <Link to={"/updateprofile/"+loggedinUser._id}>  <Button  onClick={handleClick2} size="sm" variant="primary"  active>
                       Update Profile
                    </Button></Link>
                </Navbar.Brand>
                <Nav style={{paddingLeft:'0vw'}}  className="me-auto">
                   
                    <Button onClick={handleClick1} size="sm" variant="primary"  active>
                        History
                    </Button>
                 
                </Nav>
                <Nav style={{paddingLeft:'1vw'}}  className="me-auto">
                   
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
                            <MDBCardImage src={image} 
                                alt="Avatar" className="my-5" style={{ width: '150px',borderRadius:'50%' }} fluid />
                            <MDBTypography tag="h5">{username}</MDBTypography>
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
                                    <MDBTypography tag="h6">School</MDBTypography>
                                    <MDBCardText className="text-muted">{school}</MDBCardText>
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
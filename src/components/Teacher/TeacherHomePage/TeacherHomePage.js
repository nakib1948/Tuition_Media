import React, { useContext, useEffect, useState } from 'react';
import './TeacherHomePage.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TeacherAllPost from '../TeacherAllPost/TeacherAllPost';



const TeacherHomePage = () => {
    const [post,setPost]=useState([]);
   const [searchterm,setSearchterm]=useState("");
    
    useEffect(()=>{
        fetch('http://localhost:5000/studentpostget')
        .then(res=>res.json())
        .then(data=>setPost(data));
    },[])
    return (
        <div>
            <Navbar bg="primary"  expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" style={{color:'white'}}>Welcome!!</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1" style={{color:'white'}}>Home</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="enter your district"
                    className="me-2"
                    aria-label="Search"
                    onChange={(event)=>{
                        setSearchterm(event.target.value);
                    }}
                    />
                    <Button style={{color:'white',backgroundColor:'gray'}} variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>

         
            <div className='display-fix' >
          
            {
                post.filter((val)=>{
                    if(searchterm === ""){
                       return val
                    }else if (val.district.toLowerCase().includes(searchterm.toLowerCase())){
                     return val
                 }
                 }).map(dt=> <TeacherAllPost post={dt}></TeacherAllPost>)
            }
         
            </div>


        </div>
    );
};

export default TeacherHomePage;
import React, { useContext, useEffect, useState } from 'react';
import './TeacherHomePage.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TeacherAllPost from '../TeacherAllPost/TeacherAllPost';
import {useNavigate } from 'react-router-dom';
import { userContext } from '../../../App';



const TeacherHomePage = () => {
    const [loggedinUser,setloggedinUser]= useContext(userContext)
   const [post,setPost]=useState([]);
   const [searchterm,setSearchterm]=useState("");
   const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://localhost:5000/studentpostget')
        .then(res=>res.json())
        .then(data=>setPost(data));
    },[])
    let check=false;
    function handleClick(event) {
        check=true;
        setloggedinUser({})
        if(check){
        navigate('/teacherloginpage')    
        }
   }
   function handleClick1(event) {
    navigate('/teacherprofile')    
}



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
                    <Button variant='primary' style={{fontSize:'15px',fontWeight:'500'}} >Home</Button>
                    <Button onClick={handleClick1} variant='primary' style={{fontSize:'15px',fontWeight:'500'}} > Profile</Button>
                    <Button onClick={handleClick} variant='primary' style={{fontSize:'15px',fontWeight:'500'}} >Logout</Button>
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
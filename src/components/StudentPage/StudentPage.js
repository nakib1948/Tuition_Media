import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './StudentPage.css'
const StudentPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    function handleClick(event) {   
        navigate('/studentprofile')    
   }

    const onSubmit=data=>{
        fetch('http://localhost:5000/studentpost',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
        })

       
            alert('post successfull');
    }

    return (
        <div style={{height:'100%'}}>
             <Navbar  bg="dark" variant="dark">
                <Container style={{marginLeft:'40vw'}} >
                <Navbar.Brand href="#home">
                <Button onClick={handleClick} size="sm" variant="primary"  active>
                        Profile
                    </Button>
                </Navbar.Brand>
                <Nav style={{paddingLeft:'3vw'}}  className="me-auto">
                   
                    <Button size="sm" variant="primary"  active>
                        Home
                    </Button>
                 
                </Nav>
                </Container>
            </Navbar>

        <div className='setBackground'>
        <h2 style={{textAlign:'center'}}>make a post...</h2>

        <div className='formhandle' >

        
        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
        
         <label>Name:
         <input  {...register("name", { required: true })} placeholder="Your Name" />
         {errors.name && <span className='error'>name is required</span>}
         </label>
         <br />

         <label>Email:
         <input  {...register("email", { required: true })} placeholder="Your Email" />
         {errors.email && <span className='error'>email is required</span>}
         </label>
         <br />

         <label>Address:
         <input {...register("address", { required: true })} placeholder="Your Address" />
         {errors.address && <span className='error'>address is required</span>}
         </label>
         <br />

         <label>Phone:
         <input {...register("phone", { required: true })} placeholder="Your Phone Number"  />
         {errors.phone && <span className='error'>phone is required</span>}
         </label>
         <br />

         <label>Class:
         <input {...register("class", { required: true })} placeholder="Class"  />
         {errors.class && <span className='error'>class is required</span>}
         </label>
         <br />

         <label>Subject:
         <input {...register("subject", { required: true })} placeholder="subject"  />
         {errors.subject && <span className='error'>subject is required</span>}
         </label>
         <br />

         <label>Days:
         <input {...register("days", { required: true })} placeholder="days/week"  />
         {errors.days && <span className='error'>days/week is required</span>}
         </label>
         <br />

         <label>Salary:
         <input {...register("salary", { required: true })} placeholder="Salary"  />
         {errors.salary && <span className='error'>Salary is required</span>}
         </label>
         <br />


         <label>Description:
         <input  {...register("description", { required: true })} placeholder="description"  />
         {errors.description && <span className='error'>description is required</span>}
         </label>
         <br />

         <input size='25' {...register("id", { required: true })} placeholder="add a unique id (length>4)"  />
         {errors.description && <span className='error'>description is required</span>}
         <br />
         <input style={{marginLeft:'6vw'}} type="submit" />
       </form>
       </div>

       </div>

        </div>
    );
};

export default StudentPage;
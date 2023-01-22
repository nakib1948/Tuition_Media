import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './StudentPage.css'
import { userContext } from '../../App';
const StudentPage = () => {
    const [loggedinUser,setloggedinUser]=useContext(userContext);

 
    
    
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    function handleClick(event) {   
        navigate('/studentprofile')    
   }
    function handleClick1(){
        navigate('/studenthome')
    }

    const onSubmit=data=>{
        fetch('https://tuition-media-server.onrender.com/studentpost',{
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
             <Navbar  bg="light" variant="dark">
                <Container style={{marginLeft:'40vw'}} >
                <Navbar.Brand href="#home">
                <Button onClick={handleClick} size="sm" variant="primary"  active>
                        Profile
                    </Button>
                </Navbar.Brand>
                <Nav style={{paddingLeft:'3vw'}}  className="me-auto">
                   
                    <Button onClick={handleClick1} size="sm" variant="primary"  active>
                        Home
                    </Button>
                 
                </Nav>
                </Container>
            </Navbar>

        <div className='setBackground'>
        <h2 style={{textAlign:'center',color:'#330000'}}>make a post...</h2>

        <div className='formhandle' >

        
        <form className='ship-form setinput' onSubmit={handleSubmit(onSubmit)}>
        
         <label>Name:
         <input className='studentpage'  {...register("name", { required: true })} placeholder="Your Name" />
         {errors.name && <span className='error'>name is required</span>}
         </label>
         <br />

         <label>Email:
         <input className='studentpage' {...register("email", { required: true })} placeholder="Your Email" />
         {errors.email && <span className='error'>email is required</span>}
         </label>
         <br />

         <label>Address:
         <input className='studentpage' {...register("address", { required: true })} placeholder="Your Address" />
         {errors.address && <span className='error'>address is required</span>}
         </label>
         <br />

         <label>Phone:
         <input className='studentpage' {...register("phone", { required: true })} placeholder="Your Phone Number"  />
         {errors.phone && <span className='error'>phone is required</span>}
         </label>
         <br />

         <label>Class:
         <input className='studentpage' {...register("class", { required: true })} placeholder="Class"  />
         {errors.class && <span className='error'>class is required</span>}
         </label>
         <br />

         <label>Subject:
         <input className='studentpage' {...register("subject", { required: true })} placeholder="subject"  />
         {errors.subject && <span className='error'>subject is required</span>}
         </label>
         <br />

         <label>Days:
         <input className='studentpage' {...register("days", { required: true })} placeholder="days/week"  />
         {errors.days && <span className='error'>days/week is required</span>}
         </label>
         <br />

         <label>Salary:
         <input className='studentpage' {...register("salary", { required: true })} placeholder="Salary"  />
         {errors.salary && <span className='error'>Salary is required</span>}
         </label>
         <br />


         <label>Description:
         <input className='studentpage'  {...register("description", { required: true })} placeholder="description"  />
         {errors.description && <span className='error'>description is required</span>}
         </label>
         <br />

         <label>District:
         <input className='studentpage' {...register("district", { required: true })} placeholder="Your district name"  />
         {errors.district && <span className='error'>district is required</span>}
         </label>
         <br />

       
         <input  className='bg-primary text-white submitsetting'  type="submit" />
       </form>
       </div>

       </div>

        </div>
    );
};

export default StudentPage;
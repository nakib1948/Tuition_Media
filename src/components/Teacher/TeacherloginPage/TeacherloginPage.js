import React, { useContext, useEffect, useState } from 'react';
import './TeacherloginPage.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../App';


const TeacherloginPage = () => {
	const [loggedinUser,setloggedinUser]= useContext(userContext)
	const [loginUser,setloginUser]=useState([]);
	
	useEffect(()=>{
		fetch('http://localhost:5000/studentLogin')
		.then(res=>res.json())
		.then(data=>setloginUser(data));
	},[])
    const navigate = useNavigate();
	


	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => {
		const {email,password}=data;
		const result= loginUser.find(data=> data.email===email && data.password===password)
		if(result)
		{
			setloggedinUser(result);
			if(loggedinUser){
			 navigate('/teacherhomepage');
			}
		}
		else alert('username and password incorrect')
	}

  
    function handleClick(event) {
   
      navigate('/teachersignup');
	 
	
    }


    return (
		<div className='bod'>
		
		<div >
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1 style={{marginTop:'3rem'}}>Sign in</h1>
				<p>use your account</p>
				<span style={{paddingLeft:'20rem'}}> </span>
				<input type="email" {...register("email")} required  placeholder='Email' />
				{errors.email?.type === "required" && "email is required"}
				<input type="password" {...register("password")} required  placeholder='password' />
				{errors.password?.type === "required" && "password is required"}
				<a href="#">Forgot your password?</a>
				<button>Sign In</button>
			
				<p>Don't have an account?</p>
				<button style={{marginBottom:'5rem'}}  onClick={handleClick}>Sign Up</button>
			</form>
		</div>
		
	</div>
    );
};

export default TeacherloginPage;
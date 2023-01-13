import React, { useContext, useEffect, useState } from 'react';
import './Studentlogin.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

const Studentlogin = () => {
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
			 navigate('/studentpage');
			}
		}
		else alert('username and password incorrect')
	}

    let check= false;
    function handleClick(event) {
   
      navigate('/studentregister');
	  if(check)
	  {
		alert('button click catched');
	  }
	
    }


    return (
        <div className='bod'>
         
    <div class="container" id="container">
	   
	<div class="form-container sign-in-container">
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Sign in</h1>
			
			<span> use your account</span>
			<input type="email" {...register("email")} required  placeholder='Email' />
             {errors.email?.type === "required" && "email is required"}
			 <input type="password" {...register("password")} required  placeholder='password' />
            {errors.password?.type === "required" && "password is required"}
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			
			<div class="overlay-panel overlay-right">
				<h1>Welcome!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp" onClick={handleClick}>Sign Up</button>
			</div>
		</div>
	</div>
</div>


        </div>
    );
};

export default Studentlogin;
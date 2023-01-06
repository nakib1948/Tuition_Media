import React from 'react';
import './Studentlogin.css'
import { useNavigate } from 'react-router-dom';
const Studentlogin = () => {

 const navigate = useNavigate();

    function handleClick(event) {
  
      navigate('/studentregister');
    }


    return (
        <div className='bod'>
         
    <div class="container" id="container">
	    <div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			
			<span> use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			
			<span> use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
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
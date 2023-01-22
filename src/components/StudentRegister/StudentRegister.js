import React from 'react';
import './StudentRegister.css'
import { useForm } from 'react-hook-form';
import bgImg from '../../Images/registerimage.jpg'
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const StudentRegister = () => {
    const navigate = useNavigate();
   

    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required('Password is mendatory')
          .min(6, 'Password must be at 3 char long')
       
      })
      const formOptions = { resolver: yupResolver(formSchema) }

    const { register, handleSubmit, watch, formState: { errors } } = useForm(formOptions)
    const onSubmit = data => {

   
        fetch('https://tuition-media-server.onrender.com/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
        })

       
            alert('registration successfull');
            navigate('/studentlogin')    
       
    }

    // console.log(watch('username'));
    
  return (

        <div className='setBackground '>
            
            <div className='formhandle pt-2 ' >
                <h2 className='pt-2 studentregisterh2' style={{paddingLeft:'5vw'}}>SignUp</h2>
                

                <form className='ship-form studentregisterinput'  onSubmit={handleSubmit(onSubmit)}>
                    <input className='studentpage' type="text" {...register("username")} required placeholder='Name' />
                    {errors.username?.type === "required" && "username is required"}
                    <br />
                    <input className='studentpage' type="email" {...register("email")} required  placeholder='Email' />
                    {errors.email?.type === "required" && "email is required"}
                    <br />
                    <input className='studentpage'  name="password" type="password" required {...register("password", { required : true, minLength: 6 })} 
                     placeholder='password' 
                    />
                    {errors.password?.type === "required" && "Mobile Number is required"}
                    {errors.password?.type === "minLength" && "password must be six character long"}
                    <br />
                    <input className='studentpage' type="text" {...register("address")} required placeholder='Address' />
                    {errors.address?.type === "required" && "address is required"}
                    <br />
                    <input className='studentpage' type="text" {...register("class")} required placeholder='Class' />
                    {errors.class?.type === "required" && "class is required"}
                    <br />
                    <input className='studentpage' type="text" {...register("school")} required placeholder='School and college' />
                    {errors.school?.type === "required" && "school and college is required"}
                    <br />
                    <input className='studentpage' type="url" {...register("image")} required placeholder='image url' />
                    {errors.image?.type === "required" && "image is required"}
                    <br />
                    <input className='studentpage' type="text" required {...register("mobile", { required : true, maxLength: 11 })}          
                     placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <br />
                    <button  className='btn bg-primary text-white submitsetting1 ' >Sign Up</button>
                </form>
                </div>
        </div>
    
  )
};

export default StudentRegister;
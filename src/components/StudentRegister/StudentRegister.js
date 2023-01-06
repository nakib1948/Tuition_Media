import React from 'react';
import './StudentRegister.css'
import { useForm } from 'react-hook-form';
import bgImg from '../../Images/registerimage.jpg'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const StudentRegister = () => {

    


    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required('Password is mendatory')
          .min(6, 'Password must be at 3 char long')
       
      })
      const formOptions = { resolver: yupResolver(formSchema) }

    const { register, handleSubmit, watch, formState: { errors } } = useForm(formOptions)
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (

        <div className="register">
            <div className="col-1">
                <h2 id='signin'>SignUp</h2>
                

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='Name' />
                    {errors.username?.type === "required" && "username is required"}

                    <input type="text" {...register("email")} placeholder='Email' />
                    {errors.email?.type === "required" && "email is required"}

                    <input  name="password" type="password" {...register("password")} 
                     placeholder='password(must be 6 character long)' 
                     className={`form-control ${errors.password ? 'is-invalid' : ''}`}/>

                    <input type="text" {...register("address")} placeholder='Address' />
                    {errors.address?.type === "required" && "address is required"}

                    <input type="text" {...register("class")} placeholder='Class' />
                    {errors.class?.type === "required" && "class is required"}

                    <input type="text" {...register("school")} placeholder='School and college' />
                    {errors.school?.type === "required" && "school and college is required"}

                    <input type="text" {...register("mobile", { required : true, maxLength: 11 })}          
                     placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign Up</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    
  )
};

export default StudentRegister;
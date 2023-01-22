import React, { useContext } from 'react';
import './TeacherApplyTuition.css'
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';
const TeacherApplyTuition = () => {

    const [loggedinUser,setloggedinUser]=useContext(userContext);
    console.log(loggedinUser)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => {
        data.id=loggedinUser.id;
        fetch('https://tuition-media-server.onrender.com/teacherpost',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
        })
       
            alert('Post Sent!!');  
       
    }
    return (
        <div className='teacherapplytuition'>
            <div className='applytuition'>
                <h1 class="fst-italic">Tuition</h1>
                <img src={require('../../../Images/owl_image.png')} alt="" />
            </div>
            <div className='applytuition1'>
                <h1>Your Proposal:</h1>
                <br />
                <form id='form' className='flex flex-col applytuition-form' onSubmit={handleSubmit(onSubmit)}>
                   

                    <input style={{height:'200px',width:'100%',fontSize:'14pt'}} type="text" {...register("description")} required placeholder='describe your proposal' />
                    {errors.description?.type === "required" && "description is required"}
                    <br />

                    <input type="text" {...register("education")} required  placeholder='your education/job' />
                    {errors.education?.type === "required" && "education/job is required"}
                    <br />

                    <input type="text" {...register("username")} required  placeholder='username' />
                    {errors.username?.type === "required" && "username is required"}
                    <br />
                    
                    <input type="email" {...register("email")} required  placeholder='Email' />
                    {errors.email?.type === "required" && "email is required"}
                    <br />
                    
                    <input type="text" required {...register("mobile", { required : true, maxLength: 11 })}          
                     placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <br />
                    <button className='btn'  ><i style={{paddingRight:'5px'}} class="fa fa-paper-plane" aria-hidden="true"></i>Send</button>
                </form>
            </div>
        </div>
    );
};

export default TeacherApplyTuition;
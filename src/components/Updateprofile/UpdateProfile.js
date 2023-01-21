import React, { useContext } from 'react';
import './Updateprofile.css'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { userContext } from '../../App';
const UpdateProfile = () => {

    const {id}= useParams();
    console.log(id);
    const [loggedinUser,setloggedinUser]=useContext(userContext);

 
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit=data=>{
        fetch(`http://localhost:5000/updateprofile/${id}`,{
            method:'PATCH',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
            }) 
            .then(res=>res.json())
            .then(result=>{
               console.log('updated successfully');
            })
         alert('updated successfully');
    }

    return (
        <div className='setBackground'>
             <h2 style={{textAlign:'center',color:'#330000'}}>update your profile...</h2>
            <div className='formhandle' >

        
            <form className='ship-form updateprofile' onSubmit={handleSubmit(onSubmit)}>

            <label>Name:
            <input className='studentpage' defaultValue={loggedinUser.username}  {...register("name")} placeholder="Change Name" />
            {errors.name && <span className='error'>name is required</span>}
            </label>
            <br />

            <label>Password:
            <input className='studentpage' defaultValue={loggedinUser.password} type="password"  {...register("password")} placeholder="Change Password" />
            {errors.password && <span className='error'>password is required</span>}
            </label>
            <br />

            <label>Address:
            <input className='studentpage' defaultValue={loggedinUser.address} {...register("address", { required: true })} placeholder="Change Address" />
            {errors.address && <span className='error'>address is required</span>}
            </label>
            <br />

            <label>Class:
            <input className='studentpage' defaultValue={loggedinUser.class} {...register("class", { required: true })} placeholder=" Change Class"  />
            {errors.class && <span className='error'>class is required</span>}
            </label>
            <br />

           
           

            <label>Institution:
            <input className='studentpage' defaultValue={loggedinUser.school} {...register("school", { required: true })} placeholder="Change school and college"  />
            {errors.school && <span className='error'>instituion is required</span>}
            </label>
            <br />

            <label>Image:
            <input className='studentpage' defaultValue={loggedinUser.image} {...register("image", { required: true })} placeholder="Change image"  />
            {errors.image && <span className='error'>image is required</span>}
            </label>
            <br />

            <label>Phone:
            <input className='studentpage' defaultValue={loggedinUser.mobile} {...register("mobile", { required: true })} placeholder="Change Phone Number"  />
            {errors.mobile && <span className='error'>mobile is required</span>}
            </label>
            <br />


            <input className='bg-primary text-white' style={{marginLeft:'6vw',marginTop:'1.5vh',marginBottom:'2vh',borderRadius:'5px'}} type="submit" />
            </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
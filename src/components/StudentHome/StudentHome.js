import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Studentsavepost from '../Studentsavepost/Studentsavepost';
import './StudentHome.css'

const StudentHome = () => {
   const [loggedinUser,setloggedinUser]=useContext(userContext);
   const [post,setPost]=useState([]);
   useEffect(()=>{
    fetch('https://tuition-media-server.onrender.com/relationget')
    .then(res=>res.json())
    .then(data=>setPost(data));
    },[])

  const data=post.filter(post=> post.studentemail===loggedinUser.email);
   console.log(data)

    return (
        <div className='studenthomeparent'>
           <h5 style={{textAlign:'center',color:'#330000',padding:'2vh'}}>Your Teachers information...</h5>

       <div className='studenthome'>
            
        {
                    data.map(data => <Studentsavepost post={data}></Studentsavepost>)
        }
       </div>
     



        </div>
    );
};

export default StudentHome;
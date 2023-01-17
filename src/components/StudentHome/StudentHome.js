import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

const StudentHome = () => {
   const [loggedinUser,setloggedinUser]=useContext(userContext);
   const [post,setPost]=useState([]);
   useEffect(()=>{
    fetch('http://localhost:5000/relationget')
    .then(res=>res.json())
    .then(data=>setPost(data));
    },[])

  const data=post.find(post=> post.studentemail===loggedinUser.email);
   console.log(data)

    return (
        <div>
            <h1>student home</h1>
        </div>
    );
};

export default StudentHome;
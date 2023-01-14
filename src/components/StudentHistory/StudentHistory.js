import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import StudentshowPost from '../StudentshowPost/StudentshowPost';

const StudentHistory = () => {
    const [post,setPost]=useState([]);
    const [loggedinUser,setloggedinUser]=useContext(userContext);
    useEffect(()=>{
        fetch('http://localhost:5000/studentpostget')
        .then(res=>res.json())
        .then(data=>setPost(data));
    },[])
    
      const data=post.filter(post=> post.email===loggedinUser.email);
      console.log(data);
   

    return (
        <div className='background' style={{display:'flex',justifyContent:'space-around',paddingBottom:'20%',paddingTop:'3%'}}>
            
            {
                data.map(dt=> <StudentshowPost post={dt}></StudentshowPost>)
            }
        </div>
    );
};

export default StudentHistory;
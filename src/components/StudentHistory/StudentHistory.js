import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import StudentshowPost from '../StudentshowPost/StudentshowPost';
import './StudentHistory.css'
const StudentHistory = () => {
    const [post,setPost]=useState([]);
    const [loggedinUser,setloggedinUser]=useContext(userContext);
    useEffect(()=>{
        fetch('https://tuition-media-server.onrender.com/studentpostget')
        .then(res=>res.json())
        .then(data=>setPost(data));
    },[])
    
      const data=post.filter(post=> post.email===loggedinUser.email);

   

    return (
        <div className='studenthistory'>
             <h2 style={{color:'#003300',textAlign:'center'}}>Your previous post....</h2>
        <div  style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',paddingBottom:'20%',paddingTop:'3%'}}>
            
            {
                data.map(dt=> <StudentshowPost post={dt}></StudentshowPost>)
            }
        </div>

        </div>
    );
};

export default StudentHistory;
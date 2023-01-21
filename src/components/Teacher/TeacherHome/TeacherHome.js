import React, { useContext, useEffect, useState } from 'react';
import Teachersavepost from '../Teachersavepost/Teachersavepost';
import './TeacherHome.css'
import { userContext } from '../../../App';
const TeacherHome = () => {
   const [loggedinUser,setloggedinUser]=useContext(userContext);
   const [post,setPost]=useState([]);
   useEffect(()=>{
    fetch('http://localhost:5000/relationget')
    .then(res=>res.json())
    .then(data=>setPost(data));
    },[])

  const data=post.filter(post=> post.teacheremail===loggedinUser.email);
   console.log(data)

    return (
        <div className='teacherhomeparent'>
           <h5 style={{textAlign:'center',color:'#330000',padding:'2vh'}}>Your Students information...</h5>

                <div className='teacherhome' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',paddingBottom:'20%',paddingTop:'3%'}}>
                        
                    {
                                data.map(data => <Teachersavepost post={data}></Teachersavepost>)
                    }
                </div>
                



        </div>
    );
};

export default TeacherHome;
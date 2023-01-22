import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResponseShow from '../ResponseShow/ResponseShow';
import './Response.css'
const Response = () => {
    const [post,setPost]=useState([]);
    const {key}= useParams();
    useEffect(()=>{
        fetch('https://tuition-media-server.onrender.com/teacherpostget')
        .then(res=>res.json())
        .then(data=>setPost(data));
    },[])
    
      const data=post.filter(post=> post.id===key);
      console.log(data)
      
    return (
        <div className='response' >
            <div  style={{display:'flex', flexWrap: 'wrap',gap:'3vw',paddingBottom:'20%',paddingTop:'3%'}}>
            
            {
                data.map(dt=> <ResponseShow post={dt}></ResponseShow>)
            }
        </div>
        </div>
    );
};

export default Response;
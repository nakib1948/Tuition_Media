import React, { useEffect } from 'react';
import './Selectlogin.css';
import studentimg from '../images/student.jpg';
import teacherimg from'../images/Teacher.jpg';
import { useNavigate } from 'react-router-dom';
const Selectlogin = () => {
    const navigate = useNavigate();
    let check=false;
    function handleClick(event) {   
         navigate('/studentlogin')    
    }

    return (
        <div className='selectlogin'>
          
            <h3>Welcome to tuition Point</h3>
            <h6>Choose your login type:</h6>
            <button onClick={handleClick} style={{marginTop:"10px",borderRadius:"20px"}}>
                <img className='image' src={studentimg} alt="" />
                <p>Student</p>
            </button>
            <br />
            <button style={{marginTop:"10px",borderRadius:"20px"}}>
                <img className='image' src={teacherimg} alt="" />
                <p>Teacher</p>
            </button>
        </div>
    );
};

export default Selectlogin;
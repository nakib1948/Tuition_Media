import React from 'react';
import './Header.css'
import logo from '../images/firstPage.jpg'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Header = () => {

    const navigate = useNavigate();

    function handleClick(event) {
  
      navigate('/selectlogin');
    }

    return (
        <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">
            <img src={logo} class="center-fit" alt="" />
        </div>
        <div style={{width:'40%'}} class="p-2 bd-highlight">
        <h2 className='font'>Find an expert tutor</h2>
            <h6 className='font1' >Private, 1-on-1 lessons with the expert instructor of your choice.
            Meet online or in-person.Decide how much you pay and who you 
            want to work with.The choice is yours.

            </h6>
            <Button className='baton' onClick={handleClick} variant="primary" size="lg">Login</Button>
        </div>
        
        </div>
    );
};

export default Header;
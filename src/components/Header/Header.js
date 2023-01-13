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
        <div className='header'>
          <div className='header-child'>
          <h3 >Find an expert tutor</h3>
            <p  >Private, 1-on-1 lessons with the expert instructor of your choice.
            Meet online or in-person.Decide how much you pay and who you 
            want to work with.The choice is yours.
            </p>
            <Button className='baton' onClick={handleClick} variant="primary" size="lg">Login</Button>
          </div>
          
        </div>
    );
};

export default Header;
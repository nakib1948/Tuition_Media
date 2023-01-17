import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { userContext } from '../../App';

const ResponseShow = (props) => {

    const [loggedinUser,setloggedinUser]=useContext(userContext);
     const [relation,setrelation]=useState([]);
     const {email,username,mobile,description,education}=props.post;
     

     
     function handleClick(){
        const updatedValue = {
        "studentemail":loggedinUser.email,
        "teacheremail":email ,
        "studentname":loggedinUser.username,
        "teachername":username,
        "studentmobile":loggedinUser.mobile,
        "teachermobile":mobile,
        "studentaddress":loggedinUser.address,
        "teachereducation":education,
        "studentschool":loggedinUser.school,
        "studentclass":loggedinUser.class
        }; 
        setrelation(relation => ({
            ...relation,
            ...updatedValue
          }));
          
        fetch('http://localhost:5000/relationpost',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(relation)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
        })
     }
    return (
        <div>
                
                <Card style={{ width: '25rem',backgroundColor:'#FFF8F3',paddingBottom:'5px' }}>
                
                <Card.Body>
                    
                    <Card.Text>
                      {description}.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{education}</ListGroup.Item>
                    
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Email:{email}</Card.Link>
                    <br />
                    <Card.Link href="#">Phone:{mobile}</Card.Link>
                    <br />
                    
                        
                      <button onClick={handleClick} className='batonn' >Accept</button> 
                </Card.Body>
                
                </Card>
        </div>
    );
};

export default ResponseShow;
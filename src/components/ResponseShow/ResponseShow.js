import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { userContext } from '../../App';

const ResponseShow = (props) => {

    const [loggedinUser,setloggedinUser]=useContext(userContext);
    const [sbj,setsbj]=useState([]);
    const {email,username,mobile,description,education,id,_id}=props.post;
    let waitrak=false;

    useEffect(()=>{
        fetch('http://localhost:5000/studentpostget')
        .then(res=>res.json())
        .then(data=>setsbj(data));
    },[])

    const dat=sbj.find(data=>data._id===id);
   // console.log(dat.subject);
     
  
    const [hidden, setHidden] = useState(false);
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
        "studentclass":loggedinUser.class,
        "subject":dat.subject,
        "day":dat.days,
        "salary":dat.salary,
        "district":dat.district
        }
      
          
        fetch('http://localhost:5000/relationpost',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(updatedValue)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
        })

        alert('accepted!')
        waitrak=true;
        if(waitrak){
            fetch(`http://localhost:5000/deletepost/${_id}`,{
                method:'DELETE'
            }) 
            .then(res=>res.json())
            .then(result=>{
               console.log(result)
            })
             setHidden(true)
        }
        
     }
    return (
        <div>
                
                <Card style={{ width: '25rem',color:'#003300', backgroundColor:'#FFF8F3',paddingBottom:'5px' }}>
                
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
                    
                        
                    {!hidden && <button onClick={handleClick} className='batonn' >Accept</button> }  
                </Card.Body>
                
                </Card>
        </div>
    );
};

export default ResponseShow;
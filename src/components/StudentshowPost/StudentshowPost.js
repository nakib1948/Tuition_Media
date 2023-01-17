import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './StudentshowPost.css'

const StudentshowPost = (props) => {
    const {address,days,email,phone,salary,subject,description,name,_id}=props.post;
    const clas=props.post.class;
    const [loggedinUser,setloggedinUser]=useContext(userContext);
     

    return (
        <div >
              
                <Card style={{ width: '25rem',backgroundColor:'#FFF8F3',paddingBottom:'5px' }}>
                
                <Card.Body>
                    <Card.Title>{subject} Teacher needed</Card.Title>
                    <Card.Text>Hi! My name is {name}.I read in class {clas}.I need a {subject} teacher who can
                    teach me well,highly skillful and friendly.If you are interested please knock me.
                     {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Days/Weeks: {days} days</ListGroup.Item>
                    <ListGroup.Item>Salary: {salary}TK</ListGroup.Item>
                    
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Email:{email}</Card.Link>
                    <br />
                    <Card.Link href="#">Phone:{phone}</Card.Link>
                    <br />
                    
                        
                      <Link to={"/response/"+_id}> <button className='batonn' >see response</button></Link> 
                </Card.Body>
                
                </Card>
               
        </div>
    );
};

export default StudentshowPost;
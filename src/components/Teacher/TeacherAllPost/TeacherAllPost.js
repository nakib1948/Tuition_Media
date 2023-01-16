import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './TeacherAllPost.css'

const  TeacherAllPost = (props) => {
    const {address,days,email,phone,salary,subject,description,district,name}=props.post;
    const clas=props.post.class;
    return (
        <div className='box-shadow' style={{ width: '25rem',margin:'20px' }}>
              
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
                    <ListGroup.Item>Address: {address}</ListGroup.Item>
                    <ListGroup.Item>District: {district}</ListGroup.Item>
                    
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Email:{email}</Card.Link>
                    <br />
                    <Card.Link href="#">Phone:{phone}</Card.Link>
                    <ListGroup.Item><button style={{padding:'2px 15px 2px 15px',marginLeft:'7vw'}} className='batonn' >Apply</button></ListGroup.Item>
                </Card.Body>
                
                </Card>
                
        </div>
    );
};




export default TeacherAllPost;
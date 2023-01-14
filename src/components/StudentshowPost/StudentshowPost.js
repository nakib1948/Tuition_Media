import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './StudentshowPost.css'

const StudentshowPost = (props) => {
    const {address,days,email,phone,salary,subject,description,name}=props.post;
    const clas=props.post.class;
    return (
        <div >
              
                <Card style={{ width: '20rem',backgroundColor:'#FFF8F3' }}>
                
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
                    <ListGroup.Item>Address:{address}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Email:{email}</Card.Link>
                    <br />
                    <Card.Link href="#">Phone:{phone}</Card.Link>
                </Card.Body>
                </Card>
                
        </div>
    );
};

export default StudentshowPost;
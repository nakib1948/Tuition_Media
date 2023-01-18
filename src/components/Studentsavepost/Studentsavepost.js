import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const Studentsavepost = (props) => {
    const {teachername,teacheremail,subject,teachereducation,teachermobile}=props.post;
    return (
        <div className='studenthome' >

            <Card bg="Light" style={{ width: '18rem',color:"#000033",   backgroundColor: '#FFF8F3' }}>
                <Card.Body>
                    <Card.Title>{teachername}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Subject: {subject}</Card.Subtitle>
                    <Card.Text>
                    {teachereducation}
                    </Card.Text>
                    <Card.Link href="#">{teacheremail}</Card.Link>
                    <br />
                    <Card.Link href="#">{teachermobile}</Card.Link>
                </Card.Body>
                </Card>
        
        </div>
    );
};

export default Studentsavepost;
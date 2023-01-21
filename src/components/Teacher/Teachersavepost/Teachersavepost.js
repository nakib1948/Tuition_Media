import React from 'react';

import Card from 'react-bootstrap/Card';

const Teachersavepost = (props) => {
    const {studentname,studentemail,subject,studentaddress,studentmobile}=props.post;
    return (
        <div className='studenthome' >

            <Card bg="Light" style={{ width: '20rem',color:"#000033",   backgroundColor: '#FFF8F3' }}>
                <Card.Body>
                    <Card.Title>{studentname} accepted your proposal</Card.Title>
                    <Card.Text> student:
                     {studentname}
                    </Card.Text>
                    <Card.Text className="mb-2 text-muted">Subject: {subject}</Card.Text>
                    <Card.Text>
                    {studentaddress}
                    </Card.Text>
                    <Card.Link href="#">{studentemail}</Card.Link>
                    <br />
                    <Card.Link href="#">{studentmobile}</Card.Link>
                </Card.Body>
                </Card>
        
        </div>
    );
};

export default Teachersavepost;
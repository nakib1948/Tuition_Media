import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const Studentsavepost = (props) => {
    const {teachername,teacheremail,subject,teachereducation,teachermobile,day,salary}=props.post;
    return (
        <div className='studenthome' >

            <Card bg="Light" style={{ width: '22rem',color:"#000033",   backgroundColor: '#FFF8F3' }}>
                <Card.Body>
                    <Card.Title>{teachername}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{teachereducation} </Card.Subtitle>
                    <Card.Text>
                     Subject:{subject}
                    </Card.Text>
                    <Card.Text>
                     Days: {day}/week
                    </Card.Text>
                    <Card.Text>
                     Salary:{salary}TK
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
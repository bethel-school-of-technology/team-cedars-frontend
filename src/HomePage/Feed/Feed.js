import React, { Component } from 'react'; 
import { Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Banner from '../Images/Banner.png'; 
import './Feed.css'; 

class Feed extends Component {
    render() {
        return (
            <div> 
                <Image src={Banner} alt="Banner" fluid></Image>
            </div>
        );
    }
}

class SignUpForm extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>Staying Connected</h1>
                            <h2>Sign up to receive direct updates from CCOH to your inbox!</h2>
                            <Form>
                                <Form.Group controlId="formBasicText">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Please enter your first name" />
                                </Form.Group>
                            
                                <Form.Group controlId="formBasicText">
                                    <Form.Labal>Last Name</Form.Labal>
                                    <Form.Conrol type="text" placeholder="Please enter your last name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Please enter your email address" />
                                </Form.Group>

                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Col>

                        <Col>
                            <Image src="https://i.picsum.photos/id/19/200/300.jpg?hmac=znGSIxHtiP0JiLTKW6bT7HlcfagMutcHfeZyNkglQFM" alt="Signup Form"></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Feed; 
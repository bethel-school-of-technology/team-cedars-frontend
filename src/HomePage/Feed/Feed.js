import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Banner from '../Images/Banner.png';

import './Feed.css';
import '../Footer/Footer.css';
import '../NavBar/NavBar.css';

import Footer from '../Footer/Footer.js';
import NavBar from '../NavBar/NavBar.js';

function HomePageApp() {
    return (
        <div className="App bg-light">

            <HomePageBanner />
            <br />
            <br />
            <ImagesDisplay />
            <br />
            <br />
            <SignUpForm />
            <br />
            <br />
            <HomePageMap />
            <Footer />
        </div>
    );
}


class HomePageBanner extends Component {
    render() {
        return (
            <div className="bg-white">
                <Image src={Banner} alt="Banner" fluid></Image>
            </div>
        );
    }
}

class ImagesDisplay extends Component {
    render() {
        return (
            <div>
                <Container fluid="lg">
                    <Row>
                        <Col>
                            <a href="/knowJesus">
                                <Image src="https://i.picsum.photos/id/788/200/300.jpg?hmac=86XnLHCHcI7HWgr9Y662VsXxUxs7H70DjGHc_6iaIw4" alt="Know Jesus" className="LinkPics hover-zoom" fluid></Image>
                            </a>
                        </Col>
                        <br />
                        <Col>
                            <a href="/events">
                                <Image src="https://i.picsum.photos/id/521/200/300.jpg?hmac=_MGlU-tHw5IBlsNL7YvJ9lTMo4Ge605GWQwuKGxWIWU" alt="Events" className="LinkPics hover-zoom" fluid></Image>
                            </a>
                        </Col>
                        <br />
                        <Col>
                            <a href="/getInvolved">
                                <Image src="https://i.picsum.photos/id/756/200/300.jpg?hmac=kojqQY60yVD4KaSEFOEw62LRuwfiOR2f-6ZdnEgKhxM" alt="Get Involved" className="LinkPics hover-zoom" fluid></Image>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class SignUpForm extends Component {
    render() {
        return (
            <div>
                <Container fluid="lg" className="bg-white text-left" >
                    <Row>
                        <Col>
                            <h1>Staying Connected</h1>
                            <h4>Sign up to receive direct updates from CCOH to your inbox!</h4>
                            <br />
                            <br />
                            <Form>
                                <Form.Group controlId="formBasicText">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Please enter your first name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicText">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Please enter your last name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Please enter your email address" />
                                </Form.Group>

                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Col>
                        <br />
                        <Col>
                            <Image src="https://i.picsum.photos/id/19/200/300.jpg?hmac=znGSIxHtiP0JiLTKW6bT7HlcfagMutcHfeZyNkglQFM" alt="Signup Form"></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class HomePageMap extends Component {
    render() {
        return (
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.3960587365864!2d-118.0771884849445!3d33.72457328069642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd257189b8071f%3A0x94f819a76929b827!2s16450%20Pacific%20Coast%20Hwy%20%23100%2C%20Huntington%20Beach%2C%20CA%2092649!5e0!3m2!1sen!2sus!4v1621340881061!5m2!1sen!2sus"
                    style={{ width: "100%", height: "600px", style: "border:0;", allowfullscreen: "true", loading: "lazy" }} title="CCOHLocation" fluid />
            </div>
        );
    }
}


export default HomePageApp;
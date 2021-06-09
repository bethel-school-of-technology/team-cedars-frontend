import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Banner from '../Images/Banner.png';

import './Feed.css';

function HomePageApp() {
    return (

        <div className="App">

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
        </div>
    );
}

class HomePageBanner extends Component {
    render() {
        return (

            <div>
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
                            <a href="/knowJesis">
                                <div className="container">
                                    <Image src="https://i.picsum.photos/id/788/200/300.jpg?hmac=86XnLHCHcI7HWgr9Y662VsXxUxs7H70DjGHc_6iaIw4" alt="Know Jesus" className="LinkPics hover-zoom" fluid></Image>
                                    <div class="centered">Know Jesus</div>
                                </div>
                            </a>
                        </Col>
                        <br />
                        <Col>
                            <a href="/events">
                                <div className="container">
                                    <Image src="https://i.picsum.photos/id/521/200/300.jpg?hmac=_MGlU-tHw5IBlsNL7YvJ9lTMo4Ge605GWQwuKGxWIWU" alt="Events" className="LinkPics hover-zoom" fluid></Image>
                                    <div class="centered">Events</div>
                                </div>
                            </a>
                        </Col>
                        <br />
                        <Col>
                            <a href="/getInvolved">
                                <div className="container">
                                    <Image src="https://i.picsum.photos/id/756/200/300.jpg?hmac=kojqQY60yVD4KaSEFOEw62LRuwfiOR2f-6ZdnEgKhxM" alt="Get Involved" className="LinkPics hover-zoom" fluid></Image>
                                    <div class="centered">Get Involved</div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        }
        this.onClicking = this.onClicking.bind(this);
    }

    onClicking = (e) => {
        //When this form is submitted, it keeps whatever input was typed in, even after the user presses submit.
        //I'm afraid that people are going to press it numerous times, because they think it didn't go through, so 
        //I commented out the line below so that the page refreshes after selecting submit. All the data is still entered 
        //into the database, so I don't think it's a problem. 
        // e.preventDefault(); 
        this.setState(fetch("http://localhost:8080/signup", {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email })
        }));
        alert("Thanks for signing up!");
    }

    onFirstNameChange = (e) => this.setState({ ...this.state, firstName: e.target.value });
    onLastNameChange = (e) => this.setState({ ...this.state, lastName: e.target.value });
    onEmailChange = (e) => this.setState({ ...this.state, email: e.target.value });

    render() {
        return (
            <div>

                <Container fluid="lg" className="bg-white text-left">

                    <Row>
                        <Col>
                            <h1>Staying Connected</h1>
                            <h4>Sign up to receive direct updates from CCOTH to your inbox!</h4>
                            <br />
                            <br />
                            <Form onSubmit={this.onClicking}>
                                <Form.Group controlId="formBasicText" role="form">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Please enter your first name" onChange={this.onFirstNameChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicText" role="form">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Please enter your last name" onChange={this.onLastNameChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail" role="form">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Please enter your email address" onChange={this.onEmailChange} />
                                </Form.Group>

                                <Form.Group onSubmit={this.onClicking}>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Form.Group>
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
                    style={{ width: "100%", height: "600px", style: "border:0", allowfullscreen: "true", loading: "lazy" }} title="CCOHLocation" fluid="lg" />
            </div>
        );
    }
}


export default HomePageApp;
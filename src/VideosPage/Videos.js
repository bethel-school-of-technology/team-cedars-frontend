import React, { Component } from 'react'; 
import { Navbar, Nav, ListGroup } from 'react-bootstrap'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Videos.css'; 


function VideoPageApp() {
    return (
        <div>
            <VideosNavBar />
            <VideoFeed/>
        </div>
    )
}

class VideosNavBar extends Component {
    render() {
        return (
            <div> 
                <Navbar bg="light" expand="lg" className="HomePageNavBar" fixed="sticky">
                    <Navbar.Brand href="/home">CCOTH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/watch">WATCH</Nav.Link>
                            <Nav.Link href="/connect">CONNECT</Nav.Link>
                            <Nav.Link href="/events">EVENTS</Nav.Link>
                            <Nav.Link href="/teachings">TEACHINGS</Nav.Link>
                            <Nav.Link href="/give">GIVE</Nav.Link>
                            <Nav.Link href="/login">LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}


class VideoFeed extends Component {
    render() {
        return (
            <div>
                    <Row>
                        <Col className="col-lg-8"  style={{ paddingLeft: '50px' }}>
                            <br/>
                            <br/>
                            <br/>
                            <h1>Title of Video</h1>
                            <br/>
                            <br/>
                            <br/>
                            <h4>Short Description of Video</h4>
                            <br/>
                            <br/>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe title="Styling" src="https://player.vimeo.com/video/373201297" 
                                    width="640" 
                                    height="360" 
                                    frameborder="0" 
                                    allow="autoplay; fullscreen; picture-in-picture" 
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </Col>

                        <Col className="bg-light col-lg-4" fluid>
                            <ListGroup>
                                <ListGroup.Item>
                                    <iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
                                    <p>Here is a short description of the video.</p>
                                </ListGroup.Item>
                                
                                <ListGroup.Item>
                                    <iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
                                    <p>Here is a short description of the video.</p> 
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
                                    <p>Here is a short description of the video.</p> 
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
                                    <p>Here is a short description of the video.</p> 
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
                                    <p>Here is a short description of the video.</p> 
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
            </div>
        );
    }
}


export default VideoPageApp; 
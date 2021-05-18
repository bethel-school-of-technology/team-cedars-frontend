import React, { Component } from 'react';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Banner from '../Images/Banner.png'; 
import './Feed.css'; 

function HomePageApp() {
    return (
      <div className="App">
        <HomePageBanner/>
        <br/>
        <br/>
        <ImagesDisplay/>
        <br/>
        <br/>
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
                            <a href="/knowJesus">
                                <Image src="https://i.picsum.photos/id/788/200/300.jpg?hmac=86XnLHCHcI7HWgr9Y662VsXxUxs7H70DjGHc_6iaIw4" alt="Know Jesus" className="LinkPics" fluid></Image>
                            </a>
                        </Col>
                        <br/>
                        <Col>
                            <a href="/events">
                                <Image src="https://i.picsum.photos/id/521/200/300.jpg?hmac=_MGlU-tHw5IBlsNL7YvJ9lTMo4Ge605GWQwuKGxWIWU" alt="Events" className="LinkPics" fluid></Image>
                            </a>
                        </Col>
                        <br/>
                        <Col>
                            <a href="/getInvolved">
                                <Image src="https://i.picsum.photos/id/756/200/300.jpg?hmac=kojqQY60yVD4KaSEFOEw62LRuwfiOR2f-6ZdnEgKhxM" alt="Get Involved" className="LinkPics" fluid></Image>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HomePageApp; 
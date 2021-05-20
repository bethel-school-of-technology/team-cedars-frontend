import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import './NavBar.css';

class NavBar extends Component {
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


export default NavBar; 
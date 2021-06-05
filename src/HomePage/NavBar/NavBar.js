import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
import VideoApp from '../../VideosPage/Videos';
// import AdminVideoApp from '../../VideosPage/AdminVideoApp'; 
import LoginApp from '../../Login/LoginApp';
import HomePageApp from '../../HomePage/Feed/Feed';
import Events from '../../EventsPage/Events';



class NavBar extends Component {
    render() {
        return (
            <div>

                <Navbar bg="light" expand="lg" className="HomePageNavBar" fixed="sticky">
                    <Navbar.Brand href="/">CCOTH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/">
                                <h5>HOME</h5>
                            </Nav.Link>
                            <Nav.Link href="/events">
                                <h5>
                                    EVENTS
                                </h5>
                            </Nav.Link>
                            <Nav.Link href="/videos">
                                <h5>
                                    TEACHINGS
                                </h5>
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <h5>
                                    LOGIN
                                </h5>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Router>
                    <Switch>
                        <Route path="/events">
                            <Events />
                        </Route>

                        <Route path="/videos">
                            <VideoApp />
                            {/* <AdminVideoApp /> */}
                        </Route>

                        <Route path="/login">
                            <LoginApp />
                        </Route>

                        <Route path="/">
                            <HomePageApp />
                        </Route>
                    </Switch>
                </Router>
            </div >
        );
    }
}

export default NavBar;
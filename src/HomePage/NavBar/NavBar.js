import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar bg="light" expand="lg" className="HomePageNavBar" fixed="sticky">
                        <Navbar.Brand href="/home">CCOTH</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Link t0="/">HOME</Link>
                                <Link to="/events">EVENTS</Link>
                                <Link to="/videos">TEACHINGS</Link>
                                <Link to="/login">LOGIN</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Switch>
                        <Route path="/events">
                            <Events />
                        </Route>

                        <Route path="/videos">
                            <VideoFeed />
                        </Route>

                        <Route path="/login">
                            <LoginApp />
                        </Route>

                        <Route path="/home">
                            <HomePageApp />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}


export default NavBar;
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import './HomePage/NavBar/NavBar.css';
import NavBar from './HomePage/NavBar/NavBar.js';
import { Navbar, Nav } from 'react-bootstrap';

import HomePageApp from './HomePage/Feed/Feed.js';
import Footer from './HomePage/Footer/Footer.js';
import LoginApp from './Login/LoginApp';
import VideoFeed from './VideosPage/Videos'
import VideoApp from './VideosPage/Videos.js';
import AdminVideoApp from './VideosPage/VideosTest.js'; 
import Events from './EventsPage/Events';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar bg="light" expand="lg" className="HomePageNavBar" fixed="sticky">
          <Navbar.Brand href="/">CCOTH</Navbar.Brand>
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

          <Route path="/">
            <HomePageApp />
          </Route>
        </Switch>
      </Router>

      <Footer />

    </div>
  );
}

export default App;

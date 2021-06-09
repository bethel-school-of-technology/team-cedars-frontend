import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import './HomePage/NavBar/NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';

import HomePageApp from './HomePage/Feed/Feed.js';
import Footer from './HomePage/Footer/Footer.js';
import LoginApp from './Login/LoginApp';
import Events from './EventsPage/Events';
import VideoApp from './VideosPage/Videos'; 

import './App.css';
import './HomePage/NavBar/NavBar.css';
import NavBar from './HomePage/NavBar/NavBar.js';



//Added on 2.0 process of Videos Page
import AdminVideoApp from './VideosPage/AdminVideoApp';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Footer />
      </div>

      {/* <Router>
        <Navbar bg="light" expand="lg" className="HomePageNavBar" fixed="sticky">
          <Navbar.Brand href="/">CCOTH</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Link to="/">HOME</Link>
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
            <VideoApp />
          </Route>

          <Route path="/login">
            <LoginApp />
          </Route>

          <Route path="/">
            <HomePageApp />
          </Route>
        </Switch>
      </Router> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;

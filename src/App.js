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
// import AdminVideoApp from './VideosPage/VideosTest.js';
import Events from './EventsPage/Events';

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
    </div>
  );
}

export default App;

import React from 'react'; 

import './App.css';
import './HomePage/NavBar/NavBar.css'; 
import NavBar from './HomePage/NavBar/NavBar.js';
import HomePageApp from './HomePage/Feed/Feed.js';
import Footer from './HomePage/Footer/Footer.js';
import LoginApp from './Login/LoginApp';
import VideoFeed from './VideosPage/Videos.js'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <HomePageApp /> */}
      {/* <LoginApp /> */}
      {/* <Footer /> */}
      <VideoFeed/>
    </div>
  );
}

export default App;

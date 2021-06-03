import React from 'react';

import './App.css';
import './HomePage/NavBar/NavBar.css';
import NavBar from './HomePage/NavBar/NavBar.js';
import Footer from './HomePage/Footer/Footer.js';



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

import './App.css';
import NavBar from './HomePage/NavBar/NavBar.js';
import HomePageApp from './HomePage/Feed/Feed.js'; 

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePageApp/>
    </div>
  );
}

export default App;

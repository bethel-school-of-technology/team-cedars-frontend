import './App.css';
import NavBar from './HomePage/NavBar/NavBar.js';
import HomePageApp from './HomePage/Feed/Feed.js';
import Footer from './HomePage/Footer/Footer.js';
import LoginApp from './Login/LoginApp'
import Events from './EventsPage/Events';



import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePageApp />
      <LoginApp />
      <Footer />
      <Events />
    </div>
  );
}

export default App;

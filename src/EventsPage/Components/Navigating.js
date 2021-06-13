import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Navigating = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">
        <Button variant="btn btn-outline-dark">
            Events
          </Button>
        </Link>
          <Link to="/create-event">
          <Button variant="btn btn-outline-dark">
            Create Event
          </Button>
        </Link>
     

        
      </div>
    </nav>
  );
}

export default Navigating;

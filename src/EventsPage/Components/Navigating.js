import React from 'react';
import { Link} from 'react-router-dom';
const Navigating = () => {
    return (
      <nav className="navbar">
        <div className="links">
          <Link to="/">Events</Link>
          <Link to="/create-event">Create New Events</Link>
        </div>
      </nav>
    );
  }

  export default Navigating;

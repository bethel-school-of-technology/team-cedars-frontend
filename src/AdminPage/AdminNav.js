
import React from 'react';
import { Link } from 'react-router-dom';
const Navigating = () => {
    return (
        <nav className="">
            <div className="links">
                <Link to="/create-event">Create New Event</Link>
                <Link to="/create-video">Create New Video</Link>
            </div>
        </nav>
    );
}
export default Navigating;
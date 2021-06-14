import React from 'react';
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { MdDateRange, MdAccessTime, MdLocationOn, MdDescription } from 'react-icons/md';

const EventsLists = ({ events, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            {events.map((events) => (
                <p className="events-details" key={events.id}>
                    <div>
                        <Card >
                            <Card.Body><Link to={`/events/${events.id}`}>
                                <Card.Header>{events.title}</Card.Header>
                                <Card.Title></Card.Title>
                            </Link>
                                <Card.Text >
                                    <h2>{events.image}</h2>
                                    <p><MdDescription /> {events.description}</p>
                                    <p><MdDateRange /> {events.date}</p>
                                    <p><MdAccessTime /> {events.time}</p>
                                    <p><MdLocationOn /> {events.location}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </p>
            ))
            }

        </div>
    );
}

export default EventsLists;

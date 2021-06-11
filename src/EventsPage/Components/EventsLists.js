import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Image } from 'react-bootstrap';
import { MdDateRange, MdAccessTime, MdLocationOn, MdDescription } from 'react-icons/md';

const EventsLists = ({ events, title }) => {
    return (
        <div>
            <h2>{title}</h2>
        <ul className="events-details">
            
            {events.map((events) => (
                <p className="events-list" key={events.id}>
                    <Row>
                        <Link to={`/events/${events.id}`}>
                            <Col xs={6} md={4}>
                                <Image src={events.image} thumbnail />
                                <ul>
                                    <h2>{events.image}</h2>
                                    <br />
                                    <h2>{events.title}</h2>
                                    <br />
                                    <p><MdDescription /> {events.description}</p>
                                    <br />
                                    <p><MdDateRange /> {events.date}</p>
                                    <br />
                                    <p><MdAccessTime /> {events.time}</p>
                                    <br />
                                    <p><MdLocationOn /> {events.location}</p>
                                </ul>
                            </Col>
                        </Link>

                    </Row>
                </p>
            ))
            }
        </ul >
        </div>
    );
}

export default EventsLists;

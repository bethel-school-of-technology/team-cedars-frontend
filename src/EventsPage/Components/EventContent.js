
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Events.css';

const EventContent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/events').then(results => {
            console.log(results);
            setEvents(results.data);
        });
    }, []);

    console.log(events);


    return (
        <ul className="list">
            {events.map(event => (
                <li key={event.id}>
                    <span><p className="event">{event.eventTitle}</p><sub className="description">{event.description}</sub><sub className="date">{event.date}</sub></span>
                    {/* <button onClick={() => deleteContent(event.id)} className="delete-btn">x</button> */}
                </li>
            ))
            }
        </ul >
    )
}

export default EventContent;
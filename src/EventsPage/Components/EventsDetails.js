import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';
import { Card, Button } from 'react-bootstrap';
import { MdDateRange, MdAccessTime, MdLocationOn, MdDescription } from 'react-icons/md';

const EventsDetails = () => {
    const { id } = useParams();
    const { data: events, error } = useFetch('http://localhost:8000/events/' + id);
    const redirect = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/events/' + events.id, {
            method: 'DELETE'
        }).then(() => {
            redirect.push('/');
        })
    }
    return (
        <div>
            {error && <div>{error}</div>}
            {events && (
                <div className="events-details">
                    <Card>
                        <Card.Body>
                            <Card.Title>{events.title}</Card.Title>
                            <Card.Text>
                                <h2>{events.image}</h2>
                                <p><MdDescription /> {events.description}</p>
                                <p><MdDateRange /> {events.date}</p>
                                <p><MdAccessTime /> {events.time}</p>
                                <p><MdLocationOn /> {events.location}</p>
                            </Card.Text>
                            <Button variant="btn btn-outline-dark" onClick={handleClick}>DELETE</Button>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </div>
    );
}

export default EventsDetails;
import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';
import {MdDateRange, MdAccessTime, MdLocationOn, MdDescription} from 'react-icons/md';

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
        <div className="events-details">
            { error && <div>{error}</div>}
            { events && (
                <div>
                    <ul>
                        <h2>{events.image}</h2>
                        <br />
                        <h2>{events.title}</h2>
                        <br />
                        <li><MdDescription /> {events.description}</li>
                        <br />
                        <li><MdDateRange /> {events.date}</li>
                        <br />
                        <li><MdAccessTime /> {events.time}</li>
                        <br />
                        <li><MdLocationOn /> {events.location}</li>
                    </ul>
                    <br />
                    <button variant="btn btn-outline-dark" onClick={handleClick}>DELETE</button>
                </div>
            )}
        </div>
    );
}

export default EventsDetails;
import { useState } from "react";
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button, Container } from 'react-bootstrap';
// import UploadForm from './UploadForm';


const CreateEvents = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    // useHistory to redirct user to main eventsPage after new event is added
    const redirect = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const events = {
            title,
            description,
            date,
            time,
            location
        };

        fetch('http://localhost:8000/events', {
            method: 'POST',
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(events)
        }).then(() => {
            redirect.push('/')
        })
    }

    return (
        <div className="create">
            <h2>Create A New Event</h2>
            <Container background-color="black" fluid="lg" className="bg-white text-left">
                <br />
                <Row>
                    <Col>
                        <form onSubmit={handleSubmit}>

                            <Form.Group controlId="formBasicText" role="form">
                                <Form.Label>Event Title:</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    value={title}
                                    placeholder="Title"
                                    onChange={(e) => setTitle(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicText" role="form">
                                <Form.Label>Event Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={description}
                                    placeholder="Description"
                                    onChange={(e) => setDescription(e.target.value)}
                                ></Form.Control>
                            </Form.Group>


                            <Form.Group controlId="formBasicText" role="form">
                                <Form.Label>Date:</Form.Label>
                                <Form.Control
                                    type="date"
                                    required
                                    value={date}
                                    placeholder="Date"
                                    onChange={(e) => setDate(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicText" role="form">
                                <Form.Label>Time:</Form.Label>
                                <Form.Control
                                    type="time"
                                    required
                                    value={time}
                                    placeholder=""
                                    onChange={(e) => setTime(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicText" role="form">
                                <Form.Label>Location:</Form.Label>
                                <Form.Control
                                    type="location"
                                    required
                                    value={location}
                                    placeholder="Location"
                                    onChange={(e) => setLocation(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group>

                        </form>
                        {/* <p>{title}</p>
            <p>{description}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>{host}</p>
            <p>{location}</p> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );

}


export default CreateEvents;
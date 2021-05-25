import React, { Component } from 'react'; 
import { Form, Button, Container } from 'react-bootstrap';

//https://www.youtube.com/embed/5NEe8OkXVzE

class AdminVideoApp extends Component {
    constructor() {
        super(); 
        this.state = {
            title: '',
            info: '',
            url: ''
        }
        this.submitForm =  this.submitForm.bind(this);
    }

    submitForm = () => {
        this.setState(state => ({
            title: document.getElementById('titleInput').value,
            info: document.getElementById('infoInput').value,
            url: document.getElementById('urlInput').value
        }));
    }

    render() {
        return (
            <div>
                <h1>Add a Video</h1>
                <br/>
                <br/>
                <Container className="text-left">
                <Form>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Title of Video</Form.Label>
                        <Form.Control id="titleInput" type="text" placeholder="Please enter the title of the video" />
                    </Form.Group>

                    <Form.Group controlId="formBasicText">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control id="infoInput" type="text" placeholder="Please enter a short description" />
                    </Form.Group>

                    <Form.Group controlId="formBasicUrl">
                        <Form.Label>Url of Video</Form.Label>
                        <Form.Control id="urlInput" type="url" placeholder="Please enter the video url" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.submitForm}>Submit</Button>
                </Form>
                </Container>

                <Container>
                    <div>
                        <p>{this.state.title}</p>
                        <p>{this.state.info}</p>
                        <p>{this.state.url}</p>
                    </div>
                </Container>
         </div>
        )
    }
}

export default AdminVideoApp
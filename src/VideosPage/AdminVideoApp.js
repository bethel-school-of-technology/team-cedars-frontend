import React, { Component } from 'react'; 
import { Form, Button, Container } from 'react-bootstrap';

//https://www.youtube.com/embed/5NEe8OkXVzE

function AdminVideoApp() {
    return(
        <div>
            <AdminVideoPost/>
        </div>
    );
}

class AdminVideoPost extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            title: "",
            info: "", 
            url: ""
        }
        this.onClicking = this.onClicking.bind(this); 
    }

    onClicking = (e) => {
        e.preventDefault(); 
        this.setState(fetch("http://localhost:8080/api/video", {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ title: this.state.title, info: this.state.info, url: this.state.url })
        }));
    }

    onTitleChange = (e) => this.setState({ ...this.state, title: e.target.value });
    onInfoChange = (e) => this.setState({ ...this.state, info: e.target.value });
    onUrlChange = (e) => this.setState({ ...this.state, url: e.target.value });

    render() {
        return (
            <div>
                <h1>Add a Video</h1>
                <br/>
                <br/>
                <Container className="text-left">
                    <Form onSubmit={this.onClicking}>
                        <Form.Group controlId="formBasicText" role="form">
                            <Form.Label>Title of Video</Form.Label>
                            <Form.Control type="text" placeholder="Please enter the title of the video" onChange={this.onTitleChange}/>
                         </Form.Group>

                        <Form.Group controlId="formBasicText" role="form">
                            <Form.Label>Short Description</Form.Label>
                            <Form.Control type="text" placeholder="Please enter a short description" onChange={this.onInfoChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicUrl" role="form">
                            <Form.Label>Url of Video</Form.Label>
                             <Form.Control type="url" placeholder="Please enter the video url" onChange={this.onUrlChange}/>
                        </Form.Group>

                        <Form.Group onSubmit={this.onClicking}>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}


export default AdminVideoApp; 
import React, { Component } from 'react'; 
import { Form, Button, Container } from 'react-bootstrap';

//https://www.youtube.com/embed/5NEe8OkXVzE

class AdminVideoApp extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            title: '',
            info: '',
            url: ''
        }
    }

    onGetValues = () => {
        fetch("http://localhost:8080/api/video", {
            headers: { 'Authorization': this.state.token },
            method: "POST",
            body: JSON.stringify({ title: this.state.title, info: this.state.info, url: this.state.url })
        })
            .then(res => res.json())
            .then(json => this.setState({ ...this.state, values: json }));
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
                <Form>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Title of Video</Form.Label>
                        <Form.Control id="titleInput" type="text" placeholder="Please enter the title of the video" onChange={this.onTitleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicText">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control id="infoInput" type="text" placeholder="Please enter a short description" onChange={this.onInfoChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicUrl">
                        <Form.Label>Url of Video</Form.Label>
                        <Form.Control id="urlInput" type="url" placeholder="Please enter the video url" onChange={this.onUrlChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.onGetValues}>Submit</Button>
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
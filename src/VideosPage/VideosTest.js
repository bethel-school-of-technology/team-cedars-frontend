import React, { Component } from 'react'; 
import { Form, Button, Container } from 'react-bootstrap';

//https://www.youtube.com/embed/5NEe8OkXVzE

class AdminVideoApp extends Component {
    // constructor(props) {
    //     super(props); 
    //     this.state = {
    //         title: '',
    //         info: '',
    //         url: ''
    //     }
    // }

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
                        <Form.Control id="titleInput" type="text" placeholder="Please enter the title of the video" onChange={this.props.onTitleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicText">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control id="infoInput" type="text" placeholder="Please enter a short description" onChange={this.props.onInfoChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicUrl">
                        <Form.Label>Url of Video</Form.Label>
                        <Form.Control id="urlInput" type="url" placeholder="Please enter the video url" onChange={this.props.onUrlChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.props.onSubmit}>Submit</Button>
                </Form>
                </Container>
         </div>
        )
    }
}


export default AdminVideoApp
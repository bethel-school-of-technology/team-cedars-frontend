import React, { Component } from 'react';
import AdminVideoApp from './VideosTest';  
import './Videos.css'; 

class VideosAdminApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "", 
            info: "", 
            url: "",
        }
    }

    onSubmit = () => {
        fetch("http://localhost:8080/api/video" , {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST", 
            body: JSON.stringify({ title: this.state.title, info: this.state.info, url: this.state.url })
        })
    }

    onTitleChange = (e) => this.setState({ ...this.state, title: e.target.value });
    onInfoChange = (e) => this.setState({ ...this.state, info: e.target.value });
    onUrlChange = (e) => this.setState({ ...this.state, url: e.target.value });

    render() {
        return (
            <div>
                <AdminVideoApp 
                    onTitleChange={this.onTitleChange}
                    onInfoChange={this.onInfoChange}
                    onUrlChange={this.onUrlChange}
                />
            </div>
        )
    }
}

export default VideosAdminApp; 
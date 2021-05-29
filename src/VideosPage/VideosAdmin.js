import React, { Component } from 'react'; 
import VideosTest from './VideosTest';
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
        fetch("http://localhost:8080/login/videos" , {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST", 
            body: JSON.stringify({ title: this.state.title, info: this.state.info, url: this.state.url })
        })
    }
}
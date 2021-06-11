import React, { Component } from 'react';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams
// } from "react-router-dom";
import Login from './Login';
import Admin from '../AdminPage/Admin';
import './Login.css';

class LoginApp extends Component {
    constructor(props) {
        super(props);
        this.state = { token: "", username: "", password: "", values: [], error: "" };
    }

    onLogin = () => {
        fetch("http://localhost:8080/login", {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        })
            .then(res => res.headers.get("authorization"))
            .then(token => {
                if (token) {
                    this.setState({ ...this.state, token: token });
                } else {
                    this.setState({ ...this.state, error: "Unable to login with username and password." });
                }
            });
    }

    onUsernameChange = (e) => this.setState({ ...this.state, username: e.target.value });
    onPasswordChange = (e) => this.setState({ ...this.state, password: e.target.value });

    onGetValues = () => {
        fetch("http://localhost:8080/api/video", {
            headers: { 'Authorization': this.state.token }
        })
            .then(res => res.json())
            .then(json => this.setState({ ...this.state, values: json }));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {(!this.state.token || this.state.token === "")
                        ? (<Login onUsernameChange={this.onUsernameChange}
                            onPasswordChange={this.onPasswordChange}
                            onLogin={this.onLogin}
                            error={this.state.error}></Login>)
                        : (<Admin />)}
                </header>
            </div>
        );
    }
}

export default LoginApp;
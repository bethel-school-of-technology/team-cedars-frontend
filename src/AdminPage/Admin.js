import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import VideoFeed from '../VideosPage/Videos'
import Events from '../EventsPage/Events';
import HomePageApp from '../HomePage/Footer/Footer.js'

export class Admin extends Component {
    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/events">EVENTS</Link>
                        </li>
                        <li>
                            <Link to="/videos">VIDEOS</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/events">
                            <Events />
                        </Route>

                        <Route path="/videos">
                            <VideoFeed />
                        </Route>

                        <Route path="/">
                            <HomePageApp />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Admin


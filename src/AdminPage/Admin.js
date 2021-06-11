import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Button from 'react-bootstrap/Button';

import AdminVideoApp from '../VideosPage/Videos';
import EventsApp from '../EventsPage/EventsApp';




export class Admin extends Component {
    render() {
        return (
            <div>


                <Button href="/Events" variant="secondary" size="lg" block>
                    EVENTS
                    </Button>

                <Button href="/AdminVideo" variant="secondary" size="lg" block>
                    VIDEOS
                    </Button>

                <Router>
                    <Switch>
                        <Route path="/events">
                            <EventsApp />
                        </Route>
                        <Route path='/AdminVideo'>
                            <AdminVideoApp />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Admin


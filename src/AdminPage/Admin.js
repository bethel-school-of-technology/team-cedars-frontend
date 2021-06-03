import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Button from 'react-bootstrap/Button';

import AdminVideoApp from '../VideosPage/Videos';
import Events from '../EventsPage/Events';




export class Admin extends Component {
    render() {
        return (
            <>


                <Button href="/Events" variant="secondary" size="lg" block>
                    EVENTS
                    </Button>

                <Button href="/AdminVideo" variant="secondary" size="lg" block>
                    VIDEOS
                    </Button>

                <Router>
                    <Switch>
                        <Route path="/events">
                            <Events />
                        </Route>
                        <Route path='/AdminVideo'>
                            <AdminVideoApp />
                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Admin


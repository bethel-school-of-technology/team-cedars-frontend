import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import VideoFeed from '../VideosPage/Videos'
import Events from '../EventsPage/Events';



export class Admin extends Component {
    render() {
        return (
            <>


                <Button href="/events" variant="secondary" size="lg" block>
                    EVENTS
                    </Button>

                <Button href="/videos" variant="secondary" size="lg" block>
                    VIDEOS
                    </Button>


            </>
        )
    }
}

export default Admin


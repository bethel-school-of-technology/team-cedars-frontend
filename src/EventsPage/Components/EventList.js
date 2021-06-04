import React, { Component } from 'react'

import '../EventsList.css';
import EventContent from './EventContent';

export class EventList extends Component {
    render() {
        return (
            <div>
                <EventContent />
            </div>
        )
    }
};

export default EventList;
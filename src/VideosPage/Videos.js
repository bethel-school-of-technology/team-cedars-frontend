import React, { Component } from 'react'

import './Videos.css';
import VideoList from './VideoPageArray';

export class VideoApp extends Component {
    render() {
        return (
            <div>
                <VideoList />
            </div>
        )
    }
};

export default VideoApp;
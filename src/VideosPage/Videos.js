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

// const Display = props => {
//     const displayVideos = props.map((video, index) => (
//         <div>
//             <br />
//             <br />
//             <h1>{video.title}</h1>
//             <h4>{video.info}</h4>
//             <iframe
//                 key={index}
//                 src={video.url}
//                 width="640"
//                 height="360"
//                 frameborder="0"
//                 title="defaultVideo"
//                 allow="autoplay; fullscreen; picture-in-picture"
//                 allowfullscreen
//             ></iframe>
//             <br />
//             <br />
//         </div>
//     ));

//     return (
//         <ul>{displayVideos}</ul>
//     )
// }

export default VideoApp;
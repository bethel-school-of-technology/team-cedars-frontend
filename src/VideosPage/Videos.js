import React from 'react';
import './Videos.css';
import VideoList from './VideoPageArray';

const VideoApp = props => {
    return (
        <div>
            <Display videos={VideoList} />
        </div>
    )
};

const Display = props => {
    const displayVideos = props.videos.map((video, index) => (
        <div>
            <br />
            <br />
            <h1>{video.videoTitle}</h1>
            <h4>{video.videoInfo}</h4>
            <iframe
                key={index}
                src={video.videoUrl}
                width="640"
                height="360"
                frameborder="0"
                title="defaultVideo"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
            ></iframe>
            <br />
            <br />
        </div>
    ));

    return (
        <ul>{displayVideos}</ul>
    )
}

export default VideoApp;
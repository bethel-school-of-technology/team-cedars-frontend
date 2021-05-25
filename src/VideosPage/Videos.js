import React from 'react'; 
import './Videos.css'; 

const VideoApp = props => {
    const videos = [
        {
            videoTitle: 'Men vs Women Shampoos', 
            videoInfo: 'Starring Natalie and Stacey', 
            videoUrl: 'https://www.youtube.com/embed/zTrszcsaCxI'
        }, 
        {
            videoTitle: 'Broken Window', 
            videoInfo: 'Starring Matt and Whitney', 
            videoUrl: 'https://www.youtube.com/embed/yPEr7kHugT0'
        },
        {
            videoTitle: 'Halloween Trick or Greet', 
            videoInfo: 'Starring Jason', 
            videoUrl: 'https://www.youtube.com/embed/FGdKUyTtMzA'
        }
    ];

    return (
        <div>
            <Display videos={videos} />
        </div>
    )
}

const Display = props => {
    const displayVideos = props.videos.map((video, index) => (
        <div>
            <br/>
            <br/>
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
            <br/>
            <br/>
        </div>
    ));

    return (
        <ul>{displayVideos}</ul>
    )
}

export default VideoApp; 

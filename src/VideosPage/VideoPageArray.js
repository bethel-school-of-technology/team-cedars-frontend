
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Videos.css';

const VideoList = () => {

    const [videos, setVideos] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:8080/api/video').then(results => {
            console.log(results);
            setVideos(results.data);
        });
    }, []);

    console.log(videos);




    return (
        <ul>
            {videos.map(video => (
                <div key={video.id}>
                    <br />
                    <br />
                    <h1>{video.title}</h1>
                    <h4>{video.info}</h4>
                    <iframe
                        key={video.id}
                        src={video.url}
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
            ))}
        </ul>


    );
}






export default VideoList;
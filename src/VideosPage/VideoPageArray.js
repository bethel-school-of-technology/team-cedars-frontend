
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Videos.css';

const VideoList = () => {

    const [videos, setVideos] = useState();


    useEffect(() => {
        axios.get('http://localhost:8080/api/video').then(results => {
            console.log(results);
            setVideos(results.data);
        });
    }, []);

}





// const videos = [
//     {
//         videoTitle: 'Men vs Women Shampoos',
//         videoInfo: 'Starring Natalie and Stacey',
//         videoUrl: 'https://www.youtube.com/embed/zTrszcsaCxI'
//     },
//     {
//         videoTitle: 'Broken Window',
//         videoInfo: 'Starring Matt and Whitney',
//         videoUrl: 'https://www.youtube.com/embed/yPEr7kHugT0'
//     },
//     {
//         videoTitle: 'Halloween Trick or Greet',
//         videoInfo: 'Starring Jason',
//         videoUrl: 'https://www.youtube.com/embed/FGdKUyTtMzA'
//     }
// ];

export default VideoList;
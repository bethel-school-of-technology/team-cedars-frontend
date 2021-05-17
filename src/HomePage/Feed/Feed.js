import React, { Component } from 'react'; 
import Image from 'react-bootstrap/Image';
import Banner from '../Images/Banner.png'; 
import './Feed.css'; 

class Feed extends Component {
    render() {
        return (
            <div> 
                <Image src={Banner} alt="Banner" fluid></Image>
            </div>
        );
    }
}

export default Feed; 
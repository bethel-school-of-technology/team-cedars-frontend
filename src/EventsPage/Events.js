import React from 'react';
import Title from './Components/Title';
import UploadForm from './Components/UploadForm';
import ImageGrid from './Components/ImageGrid';
import './events.css';



function Events () {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default Events;

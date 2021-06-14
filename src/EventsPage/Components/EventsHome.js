import React from 'react';
import EventsList from './EventsLists.js';
import useFetch from './useFetch.js';
import Image from 'react-bootstrap/Image';
import Banner from '../Images/events-banner.png';

const EventsHome = () => {
  const { data: events, error } = useFetch('http://localhost:8000/events');

  return (
    <div >
      <div>
        <Image src={Banner} alt="Banner" fluid></Image>
      </div>

      <br/>

      <div>
        {error && <div>{error}</div>}
        {/* // {isPending && <div>Loading..</div>} */}
        {events && <EventsList events={events} title="New Events at our Church" />}
      </div>
    </div>
  );
}


export default EventsHome;

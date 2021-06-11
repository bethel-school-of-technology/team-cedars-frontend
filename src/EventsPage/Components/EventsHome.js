import React from 'react';
import EventsList from './EventsLists.js';
import useFetch from './useFetch.js';

const EventsHome = () => {
const {data: events, error} = useFetch('http://localhost:8000/events');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {/* // {isPending && <div>Loading..</div>} */}
      {events && <EventsList events={events} title="New Events at our Church" />}

    </div>
  );
}

export default EventsHome;

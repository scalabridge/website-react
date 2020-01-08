import React from 'react';
import Navbar from "./Navbar";
import EventCard from './components/EventCard'
import EVENT_INFO from './eventInfo.json';
import './Events.css'

class Events extends React.Component {
  render() {
    return (
      <div className='event-page-container'>
        <Navbar/>
        {EVENT_INFO.map(event => {
          return (
            <EventCard 
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
              url={event.url}
            />
          )
        })}
      </div>
    );
  }
}

export default Events;
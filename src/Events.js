import React from 'react';
import EventCard from './components/EventCard'
import EVENT_INFO from './eventInfo.json';

class Events extends React.Component {
  render() {
    return (
      <div>
        <h1>History of ScalaBridge Workshops</h1>
        {EVENT_INFO.map(event => {
          return (
            <EventCard 
              title={event.title}
              description={event.description}
            />
          )
        })}
      </div>
    );
  }
}

export default Events;
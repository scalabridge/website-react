import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.css'

function EventCard(props) {
  return (
    <div className="event-card-container">
      <div style={{width: '100%'}}>
          <div className='event-card-title'>{props.title}</div>
          <p className='event-card-description'>{props.description}</p>
          <div className='event-card-post-meta'>
            <img className='event-card-image' src={props.image}/>
            <p>{props.date} at {props.location}</p>
          </div>
      </div> 
  </div>);
}

EventCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string
};

export default EventCard;
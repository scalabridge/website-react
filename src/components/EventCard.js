import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.css'

function EventCard(props) {
  return (
    <div className="event-card-container">
      <div style={{width: '100%'}}>
          <h2 className='event-card-title'>{props.title}</h2>
          <p className='event-card-description'>{props.description}</p>
          <div className='event-card-post-meta'>
            <img className='portrait' style={{'object-fit': 'cover'}} src={props.image}/>
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
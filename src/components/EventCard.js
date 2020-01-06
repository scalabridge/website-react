import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.css'

function EventCard(props) {
  console.log('card title', props.title);
  console.log('card description', props.description);
  return (
    <div className="image-card-text text-white">
      <div style={{width: '100%'}}>
          <p className='event-card-title'>{props.title}</p>
          <p className='event-card-description'>{props.description}</p>
      </div> 
  </div>);
}

EventCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string
};

export default EventCard;
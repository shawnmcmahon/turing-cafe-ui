import React from 'react';
import './Card.css';

const Card = ({ date, id, name, number, time, newEntry }) => {

  return (
    <div> 
      <div className="card">
        <p>{name}</p>
        <p>{date}</p>
        <p>{time} pm</p>
        <p>Number of Guests: {number}</p>
      </div>
    </div>
  )
};

export default Card;

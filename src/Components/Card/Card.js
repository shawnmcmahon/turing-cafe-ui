import React, { Component } from 'react';
import './Card.css';

const Card = ({ date, id, key, name, number, time, newEntry }) => {

  return (
    <div> 
      <div className="card">
        <p>{date}</p>
        <p> {id}</p>
        <p>{name}</p>
        <p>{number}</p>
        <p>{time}</p>
      </div>
    </div>
  )
};

export default Card;

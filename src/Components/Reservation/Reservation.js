import React from 'react';
import Card from '../Card/Card'
import './Reservation.css';

const Reservation = ({ data }) => {

  const reservationCards = data.map(currentReservation => {
    return (
      <Card
        date={currentReservation.date}
        id={currentReservation.id}
        key={currentReservation.id}
        name={currentReservation.name}
        number={currentReservation.number}
        time={currentReservation.time}
        newEntry={currentReservation.newEntry}
      /> 
    )
  })


  return (
    <>
      {reservationCards}
    </>
  )
};

export default Reservation;

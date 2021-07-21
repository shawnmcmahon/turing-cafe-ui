import React, { Component } from 'react';
import Reservation from '../Reservation/Reservation';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        reservations: []
      }
  }



  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response =>  response.json())
      .then(data => this.setState({reservations: data}))
      .catch(error => console.log(error))
  }

  makeReservation = (reservationData) => {
    this.setState({reservations: [...this.state.reservations, reservationData] })
  }


  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form makeReservation={this.makeReservation}/>
        </div>
        <div className="resy-container"></div>
          <Reservation data={this.state.reservations}/>
      </div>
    );
  }
}

export default App;

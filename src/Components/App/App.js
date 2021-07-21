import React, { Component } from 'react';
import Reservation from '../Reservation/Reservation';
// import Form from '../Form/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        {/* <Form /> */}
        <div className="resy-container"></div>
        <Reservation />
      </div>
    );
  }
}

export default App;

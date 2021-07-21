import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name: '', 
        date: '',
        time: ''
      };

      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = () => {
    let reservationData = this.state;
    this.props.makeReservation(reservationData)
  } 



  render() {
    return  (
      <>
        <input
          type="text"
          name="date"
          placeholder="date"
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          name="time"
          placeholder="time"
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
        />
        <button onClick={this.handleSubmit}>Make Reservation</button>
      </>

    )
  }
}

export default Form;

import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name: '', 
        date: '',
        time: '',
        key: Date.now()
      };

      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let reservationData = this.state;
    this.props.makeReservation(reservationData)
  } 



  render() {
    return  (
      <form>
        <input
          type="text"
          name="date"
          placeholder="date"
          className="date"
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
          data-cy="date"
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          className="name"
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
          data-cy="name"
        />
        <input
          type="text"
          name="time"
          placeholder="time"
          className="time"
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
          data-cy="time"
        />
        <input
          type="text"
          name="number"
          placeholder="Number of Guests"
          className="number"
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
          data-cy="number"
        />
        <button onClick={(event) => this.handleSubmit(event)}>Make Reservation</button>
      </form>

    )
  }
}

export default Form;

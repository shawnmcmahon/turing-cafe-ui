import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
      this.state = {
        name: '', 
        date: '',
        time: ''
      };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
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
      </>

    )
  }
}

export default Form;

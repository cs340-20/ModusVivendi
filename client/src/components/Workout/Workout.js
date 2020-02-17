import React, { Component } from 'react';
import './Workout.css';

class Workout extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render() {
    return (
      <div>
        <h2>Hello </h2>
        <ul>
        {this.state.customers.map(customer => 
          <li>{customer.name}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Workout;
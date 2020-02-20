import React, { Component } from 'react';
import WorkoutTable from './WorkoutTable';
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

  // Returns an int, 1-7, with 1 being Monday ..., and 7 being Sunday.
  intDay() {
    var d = new Date();
    var n = d.getDay()

    return n;
  }

  // Takes an int (from intDay) and returns the day of week. If
  // it's an off day, function will return "an off day"
  stringDay(n) {
    if(n === 1) {
      return "Monday";
    }
    else if(n === 2) {
      return "Tuesday";
    }
    else if(n === 4) {
      return "Thursday";
    }
    else if(n === 5) {
      return "Friday";
    }
    else {
      return "an off day!"
    }
  }

  render() {
    return (
      <div>
          {this.state.customers.map(customer =>
            <div className="workout">
              <h1>Hello {customer.name}</h1>
              <h2>Since your primary goal is to {customer.primary_goal}:</h2>
              <p>Your customized workout is based on a weekly full body routine. The exercises</p>
              <p>below will be performed on Monday, Tuesday, Thursday and Friday. Your off days</p>
              <p>are Wednesday, Saturday and Sunday. You may add accessory exercises on your off</p>
              <p>days or after your workouts, but it's suggested that you take one full day off</p>
              <p>after working out for two consecutive days. On Monday your lifts will be based</p>
              <p>on a percentage of your max, and the percentage will increase on Tuesday and then</p>
              <p>again on Thursday. On Friday you will deload and the percentage of weight you will</p>
              <p>lift will be less than the percentage you did on Monday.</p>
              <h2>It's { this.stringDay(this.intDay()) }</h2>
              <WorkoutTable table={ customer.name }/>
            </div>
          )}
      </div>
      
    );
  }
}

export default Workout;
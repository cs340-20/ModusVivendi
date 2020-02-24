import React from 'react';
import { Table } from 'reactstrap';
import './Workout.css';

// This function rounds integers to the nearest multiple of 5.
function round5(x) {
  return Math.ceil(x/5)*5;
}

// This functions arguments are two integers, one being the max weight 
// property and the other being the percent of the max weight being lifted.
function displayWeight(weight, percent) {
  return round5(weight*percent);
}

const WorkoutTable = (props) => {
  // first, second, and third are variables that will be used to determine
  // the percent of the max weight that will be lifted based on the day
  // of the week. The weight goes up as the week goes on, and on the last 
  // day of the week the weight is low for a deload day.
  let first;
  let second;
  let third;
  if(props.day === 1) {
    first = 0.50;
    second = 0.55;
    third = 0.60;
  }
  else if(props.day === 2) {
    first = 0.60;
    second = 0.65;
    third = 0.70;
  }
  else if(props.day === 4) {
    first = 0.70;
    second = 0.75;
    third = 0.80;
  }
  else if(props.day === 5) {
    first = 0.40;
    second = 0.45;
    third = 0.50;
  }
  else {
    first = null;
    second = null;
    third = null;
  }

  // if it's not an off day...
  if(props.day === 1 || props.day === 2 || props.day === 4 || props.day === 5) {
    return (
      <Table dark>
        <thead>
          <tr className="bu">
            <th>List</th>
            <th>First Set</th>
            <th>Second Set</th>
            <th>Third Set</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Overhead Press</th>
            <td>{ displayWeight(props.op, first) } x 12</td>
            <td>{ displayWeight(props.op, second) } x 10</td>
            <td>{ displayWeight(props.op, third) } x 8</td>
          </tr>
          <tr>
            <th scope="row">Deadlift</th>
            <td>{ displayWeight(props.dead, first) } x 12</td>
            <td>{ displayWeight(props.dead, second) } x 10</td>
            <td>{ displayWeight(props.dead, third) } x 8</td>
          </tr>
          <tr>
            <th scope="row">Benchpress</th>
            <td>{ displayWeight(props.bench, first) } x 12</td>
            <td>{ displayWeight(props.bench, second) } x 10</td>
            <td>{ displayWeight(props.bench, third) } x 8</td>
          </tr>
          <tr>
            <th scope="row">Squat</th>
            <td>{ displayWeight(props.squat, first) } x 12</td>
            <td>{ displayWeight(props.squat, second) } x 10</td>
            <td>{ displayWeight(props.squat, third) } x 8</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  else return null;
}

export default WorkoutTable;
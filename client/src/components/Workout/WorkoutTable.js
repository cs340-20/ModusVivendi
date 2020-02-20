import React from 'react';
import { Table } from 'reactstrap';
import './Workout.css';

const WorkoutTable = (props) => {
  return (
    <Table dark>
      <thead>
        <tr className="bu">
        {/* <th>{ props.table }</th> */}
          <th>Lift</th>
          <th>First Set</th>
          <th>Second Set</th>
          <th>Third Set</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Overhead Press</th>
          <td>135 x 12</td>
          <td>145 x 10</td>
          <td>155 x 8</td>
        </tr>
        <tr>
          <th scope="row">Deadlift</th>
          <td>400 x 12</td>
          <td>420 x 10</td>
          <td>440 x 8</td>
        </tr>
        <tr>
          <th scope="row">Benchpress</th>
          <td>200 x 12</td>
          <td>215 x 10</td>
          <td>230 x 8</td>
        </tr>
        <tr>
          <th scope="row">Squat</th>
          <td>300 x 12</td>
          <td>330 x 10</td>
          <td>360 x 12</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default WorkoutTable;
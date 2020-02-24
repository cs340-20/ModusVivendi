import React from 'react';
import { Progress } from 'reactstrap';
import './Workout.css';

const ProgressBar = (props) => {
  return (
    <div>
      <div className="text-center">{ props.progress }%</div>
        <Progress color='info' value={ props.progress }>
        Keep up the good work! 
        </Progress>
    </div>
  );
};

export default ProgressBar;
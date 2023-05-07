import { useState } from "react";


interface WorkoutsProps {
    exercises: string[];
    onSelect: (exercises: string) =>void;
    selectedExercise: string;

}

const Workouts = ({ exercises, onSelect, selectedExercise}: WorkoutsProps) => {
    
    return(
        <div>
            <label 
                htmlFor="exercise-select">Select an Exercise</label>
        <select 
            id="exercise-select"
            value={selectedExercise}
            onChange={(e) => onSelect(e.target.value)}>
            

            {exercises.map((exercise) => (
          <option key={exercise} value={exercise}>
            {exercise}
          </option>
        ))}
      </select>
    </div>
  );
};


export default Workouts;


Sure, I can help you create a small lightweight stopwatch widget in React using TypeScript. Here is one way to do it:

First, create a new React component for the stopwatch widget. In the component's state, we'll keep track of the current elapsed time and whether the stopwatch is currently running or not:

typescript
Copy code
import React, { Component } from 'react';

type StopwatchState = {
  isRunning: boolean;
  elapsedTime: number;
};

class Stopwatch extends Component<{}, StopwatchState> {
  state: StopwatchState = {
    isRunning: false,
    elapsedTime: 0,
  };

  render() {
    const { isRunning, elapsedTime } = this.state;

    return (
      <div>
        <h2>Stopwatch</h2>
        <div>{elapsedTime}ms</div>
        <button onClick={this.handleStartStopClick}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.handleResetClick}>Reset</button>
      </div>
    );
  }

  handleStartStopClick = () => {
    const { isRunning } = this.state;

    if (isRunning) {
      clearInterval(this.timer);
    } else {
      const startTime = Date.now() - this.state.elapsedTime;
      this.timer = setInterval(() => {
        this.setState({
          elapsedTime: Date.now() - startTime,
        });
      }, 10);
    }

    this.setState({
      isRunning: !isRunning,
    });
  };

  handleResetClick = () => {
    clearInterval(this.timer);
    this.setState({
      isRunning: false,
      elapsedTime: 0,
    });
  };

  private timer: any;
}

export default Stopwatch;
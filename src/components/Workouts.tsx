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


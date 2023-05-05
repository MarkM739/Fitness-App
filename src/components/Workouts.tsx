import { useState } from "react";


interface WorkoutsProps {
    exercises: string[];
    onSelect: (exercises: string) =>void;

}

const Workouts = ({ exercises, onSelect}: WorkoutsProps) => {
    const [selectedExercise, setSelectedExercise] = useState("");

    const handleSelect = (event: any) => {
        const exercise = event.target.value;
        setSelectedExercise(exercise);
        onSelect(exercise)
    };
    

    return(
        <div>
            <label 
                htmlFor="exercise-select">Select an Exercise</label>
        <select 
            id="exercise-select"
            value={selectedExercise}
            onChange={handleSelect}>
            

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
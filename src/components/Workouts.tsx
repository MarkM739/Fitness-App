import React, { useState } from "react";



const exercises = [
  "Push-ups",
  "Sit-ups",
  "Squats",
  "Lunges",
  "Burpees",
  "Jumping jacks",
  "Plank",
  "Mountain climbers",
  "High knees",
  "Jump squats",
];


interface WorkoutsProps {
    exercises: string[];
    onSelect: (exercises: string) =>void;

}

const Workouts = ({ exercises, onSelect}: WorkoutsProps) => {
    const [selectedExercise, setSelectedExercise] = useState("");

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
            </select>

        </div>
    )
};

export default Workouts;
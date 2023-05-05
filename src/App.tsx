import { useState } from "react";
import './App.css'
import Workouts from './components/Workouts'
import Profile from './components/Profile'

const exercises = [
  "Push-ups",
  "Sit-ups",
  "Squats",
  "Lunges",
  "Burpees",
];

function App() {
  const [selectedExercise, setSelectedExercise] = React.useState(exercises);

  const handleExerciseSelect = (exercise: string) => {
    setSelectedExercise(exercise);
  };
  

  return (
    <div>
      <Workouts exercises={exercises} onSelect={handleExerciseSelect} />
      <Profile></Profile>
    </div>
  )
    
   
  
}


export default App;

import { useState } from "react";
import './App.css'
import Workouts from './components/Workouts'
import Profile from "./components/Profile";


const exercises = [
  "Push-ups",
  "Sit-ups",
  "Squats",
  "Lunges",
  "Burpees",
];

function App() {
  const [selectedExercise, setSelectedExercise] = useState("");

  const handleExerciseSelect = (exercise: string) => {
    setSelectedExercise(exercise);
  };
  

  return (
    <div>
      <Workouts exercises={exercises} onSelect={handleExerciseSelect} selectedExercise={selectedExercise} />
      <Profile></Profile>
    </div>
  )
    
   
  
}


export default App;
